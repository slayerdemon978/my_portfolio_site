import streamlit as st
import os
import tempfile
from langchain_community.document_loaders import PyPDFLoader, WebBaseLoader, TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
from langchain.memory import ConversationBufferMemory
from langchain.prompts import PromptTemplate
from langchain.chains import ConversationalRetrievalChain
from langchain_groq import ChatGroq
from langchain.agents import AgentType, load_tools, initialize_agent
from langchain_core.output_parsers import StrOutputParser

os.environ["GROQ_API_KEY"] = st.secrets["GROQ_API_KEY"]
os.environ["SERPAPI_API_KEY"] = st.secrets["SERPAPI_API_KEY"]

model = ChatGroq(
    model="meta-llama/llama-4-scout-17b-16e-instruct",
    temperature=0.1
)
output_parser = StrOutputParser()

st.title("RishiGPT")
st.caption("A versatile AI chatbot that supports live web search, focused file-based Q&A, and natural free-flowing conversation — all in one place. It features efficient memory tracking for context-aware chats, basic multilingual support, and is designed to evolve fast: upcoming features include seamless GitHub repo interactions and more advanced dev tools.Stay tuned for RishiGPT+ — powered by LangGraph architecture for even more powerful, modular, and intelligent workflows coming soon!")

use_rag = st.sidebar.checkbox("Enable personalised file Chat")
use_serp = st.sidebar.checkbox("Enable Web Search")
rag_mode = st.sidebar.selectbox("Select your file source:", ["Choose...", "PDF", "Website", "Text"])

if "memory" not in st.session_state:
    st.session_state.memory = ConversationBufferMemory(
        memory_key="chat_history",
        return_messages=True,
        output_key="answer",
        k=10
    )

if "rag_memory" not in st.session_state:
    st.session_state.rag_memory = ConversationBufferMemory(
        memory_key="chat_history",
        return_messages=True,
        output_key="answer",
        k=10
    )

if use_rag:
    st.session_state.pop("memory", None)
    st.session_state.pop("agent", None)
    st.session_state.pop("tools", None)
    if st.sidebar.button("Reset RAG Session"):
        for key in ["vector", "db", "loader", "doc", "splitter", "split_docs", "embedd"]:
            st.session_state.pop(key, None)
        st.session_state.rag_memory.clear()
        st.rerun()

if not use_rag and use_serp and "agent" not in st.session_state:
    st.session_state.tools = load_tools(["serpapi"], llm=model)
    st.session_state.agent = initialize_agent(
        llm=model,
        tools=st.session_state.tools,
        agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
        verbose=False,
        memory=None
    )

if use_rag:
    if rag_mode == "Website":
        url = st.text_input("Enter the URL (must start with https):")
        if url and not url.startswith("https://"):
            st.warning("ERROR! Please enter a valid HTTPS URL.")
        elif url.startswith("https://") and "vector" not in st.session_state:
            with st.spinner("Website is loading and embedding..."):
                st.session_state.loader = WebBaseLoader(url)
                st.session_state.doc = st.session_state.loader.load()
                st.session_state.splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
                st.session_state.split_docs = st.session_state.splitter.split_documents(st.session_state.doc)
                st.session_state.embedd = HuggingFaceEmbeddings()
                st.session_state.db = FAISS.from_documents(st.session_state.split_docs, embedding=st.session_state.embedd)
                st.session_state.vector = True
            st.success("Website loaded and embedded!")

    elif rag_mode == "PDF":
        pdf_file = st.file_uploader("Upload your PDF here", type="pdf")
        if pdf_file and "vector" not in st.session_state:
            with st.spinner("PDF is loading and embedding..."):
                with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp_file:
                    tmp_file.write(pdf_file.read())
                    tmp_path = tmp_file.name
                st.session_state.loader = PyPDFLoader(tmp_path)
                st.session_state.doc = st.session_state.loader.load()
                st.session_state.splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
                st.session_state.split_docs = st.session_state.splitter.split_documents(st.session_state.doc)
                st.session_state.embedd = HuggingFaceEmbeddings()
                st.session_state.db = FAISS.from_documents(st.session_state.split_docs, embedding=st.session_state.embedd)
                st.session_state.vector = True
            st.success("PDF loaded and embedded!")

    elif rag_mode == "Text":
        txt_file = st.file_uploader("Upload your text file here", type="txt")
        if txt_file and "vector" not in st.session_state:
            with st.spinner("Text file is loading and embedding..."):
                with tempfile.NamedTemporaryFile(delete=False, suffix=".txt") as tmp_file:
                    tmp_file.write(txt_file.read())
                    tmp_path = tmp_file.name
                st.session_state.loader = TextLoader(tmp_path)
                st.session_state.doc = st.session_state.loader.load()
                st.session_state.splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
                st.session_state.split_docs = st.session_state.splitter.split_documents(st.session_state.doc)
                st.session_state.embedd = HuggingFaceEmbeddings()
                st.session_state.db = FAISS.from_documents(st.session_state.split_docs, embedding=st.session_state.embedd)
                st.session_state.vector = True
            st.success("Text loaded and embedded!")

active_memory = st.session_state.rag_memory if use_rag else st.session_state.memory
for msg in active_memory.chat_memory.messages:
    role = "user" if msg.type == "human" else "assistant"
    st.chat_message(role).markdown(msg.content)

user_query = st.chat_input("Ask me anything...")
if user_query:
    st.chat_message("user").markdown(user_query)
    response_text = ""

    if use_rag and "vector" in st.session_state:
        prompt_template = PromptTemplate.from_template("""
        You are a helpful, smart, talkative, gen-z and friendly AI Assistant.
        Be detailed, accurate, and conversational.
        Context: {context}
        Question: {question}
        """)
        retriever = st.session_state.db.as_retriever(search_kwargs={"k": 5})
        chain = ConversationalRetrievalChain.from_llm(
            llm=model,
            retriever=retriever,
            memory=st.session_state.rag_memory,
            return_source_documents=True,
            combine_docs_chain_kwargs={"prompt": prompt_template}
        )
        response = chain.invoke({"question": user_query})
        response_text = output_parser.invoke(response["answer"])

    elif not use_rag and use_serp and "agent" in st.session_state:
        serp_response = st.session_state.agent.run(user_query)
        response_text = output_parser.invoke(serp_response)
        st.session_state.memory.chat_memory.add_user_message(user_query)
        st.session_state.memory.chat_memory.add_ai_message(response_text)

    elif not use_rag:
        model_response = model.invoke(user_query)
        response_text = output_parser.invoke(model_response)
        st.session_state.memory.chat_memory.add_user_message(user_query)
        st.session_state.memory.chat_memory.add_ai_message(response_text)

    st.chat_message("assistant").markdown(response_text)
