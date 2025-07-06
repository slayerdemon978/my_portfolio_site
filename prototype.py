import streamlit as st
import os
import tempfile
import uuid
import time
from dotenv import load_dotenv
from git import Repo, GitCommandError
from langchain_community.document_loaders import PyPDFLoader, WebBaseLoader, TextLoader, GitLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
from langchain.memory import ConversationBufferMemory
from langchain.prompts import PromptTemplate
from langchain.chains import ConversationalRetrievalChain
from langchain_groq import ChatGroq
from langchain.agents import AgentType, load_tools, initialize_agent
from langchain_core.output_parsers import StrOutputParser

load_dotenv(dotenv_path="API_KEYS.env")
os.environ["GROQ_API_KEY"] = os.getenv("GROQ_API_KEY")
os.environ["SERPAPI_API_KEY"] = os.getenv("SERPAPI_API_KEY")

model = ChatGroq(
    model="meta-llama/llama-4-scout-17b-16e-instruct",
    temperature=0.1
)
output_parser = StrOutputParser()

st.title("RishiGPT")
st.caption(
    "A versatile AI chatbot that supports live web search, file-based Q&A, and natural conversation. "
    "Session memory only. All data resets when you close this app."
)

use_rag = st.sidebar.checkbox("Enable personalised file Chat")
use_serp = st.sidebar.checkbox("Enable Web Search")
rag_mode = st.sidebar.selectbox("Select your file source:", ["Choose...", "PDF", "Website", "Text", "Github"])

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
        for key in ["vector", "db", "loader", "doc", "splitter", "split_docs", "embedd", "repo", "repo_path", "repo_url"]:
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
    if rag_mode == "Github":
        repo_url = st.text_input("Enter the GitHub repository URL (HTTPS only):")
        if repo_url:
            if "repo_url" not in st.session_state or st.session_state.repo_url != repo_url:
                st.session_state.repo_url = repo_url
                new_repo_folder = tempfile.mkdtemp(prefix="repo_")
                st.session_state.repo_path = new_repo_folder
                for key in ["vector", "db", "loader", "doc", "splitter", "split_docs", "embedd", "repo"]:
                    st.session_state.pop(key, None)
                st.session_state.rag_memory.clear()
                try:
                    st.session_state.repo = Repo.clone_from(repo_url, to_path=new_repo_folder)
                except GitCommandError as e:
                    st.error(f"Git clone failed: {e}")
                st.rerun()

            if "repo" not in st.session_state:
                st.session_state.repo = Repo(st.session_state.repo_path)

            if "vector" not in st.session_state:
                with st.spinner("Loading and embedding GitHub repository..."):
                    branch = st.session_state.repo.head.reference
                    st.session_state.loader = GitLoader(repo_path=st.session_state.repo_path, branch=branch)
                    st.session_state.doc = st.session_state.loader.load()
                    st.session_state.splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
                    st.session_state.split_docs = st.session_state.splitter.split_documents(st.session_state.doc)
                    st.session_state.embedd = HuggingFaceEmbeddings()
                    st.session_state.db = FAISS.from_documents(st.session_state.split_docs, embedding=st.session_state.embedd)
                    st.session_state.vector = True
                st.success("GitHub repository loaded and embedded.")

    elif rag_mode == "Website":
        url = st.text_input("Enter the URL (must start with https):")
        if url and not url.startswith("https://"):
            st.warning("Please enter a valid HTTPS URL.")
        elif url.startswith("https://") and "vector" not in st.session_state:
            with st.spinner("Website is loading and embedding..."):
                st.session_state.loader = WebBaseLoader(url)
                st.session_state.doc = st.session_state.loader.load()
                st.session_state.splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
                st.session_state.split_docs = st.session_state.splitter.split_documents(st.session_state.doc)
                st.session_state.embedd = HuggingFaceEmbeddings()
                st.session_state.db = FAISS.from_documents(st.session_state.split_docs, embedding=st.session_state.embedd)
                st.session_state.vector = True
            st.success("Website loaded and embedded.")

    elif rag_mode == "PDF":
        pdf_file = st.file_uploader("Upload your PDF here", type="pdf")
        if pdf_file and "vector" not in st.session_state:
            with st.spinner("PDF is loading and embedding..."):
                with tempfile.NamedTemporaryFile(suffix=".pdf") as tmp_file:
                    tmp_file.write(pdf_file.read())
                    tmp_file.flush()
                    st.session_state.loader = PyPDFLoader(tmp_file.name)
                    st.session_state.doc = st.session_state.loader.load()
                    st.session_state.splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
                    st.session_state.split_docs = st.session_state.splitter.split_documents(st.session_state.doc)
                    st.session_state.embedd = HuggingFaceEmbeddings()
                    st.session_state.db = FAISS.from_documents(st.session_state.split_docs, embedding=st.session_state.embedd)
                    st.session_state.vector = True
            st.success("PDF loaded and embedded.")

    elif rag_mode == "Text":
        txt_file = st.file_uploader("Upload your text file here", type="txt")
        if txt_file and "vector" not in st.session_state:
            with st.spinner("Text file is loading and embedding..."):
                with tempfile.NamedTemporaryFile(suffix=".txt") as tmp_file:
                    tmp_file.write(txt_file.read())
                    tmp_file.flush()
                    st.session_state.loader = TextLoader(tmp_file.name)
                    st.session_state.doc = st.session_state.loader.load()
                    st.session_state.splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
                    st.session_state.split_docs = st.session_state.splitter.split_documents(st.session_state.doc)
                    st.session_state.embedd = HuggingFaceEmbeddings()
                    st.session_state.db = FAISS.from_documents(st.session_state.split_docs, embedding=st.session_state.embedd)
                    st.session_state.vector = True
            st.success("Text loaded and embedded.")

active_memory = st.session_state.rag_memory if use_rag else st.session_state.memory
for msg in active_memory.chat_memory.messages:
    role = "user" if msg.type == "human" else "assistant"
    if role == "assistant":
        st.markdown(f"""
            <div style="position: relative; border: 1px solid #ddd; padding: 10px; border-radius: 8px;">
                <pre id="ai-response-{uuid.uuid4()}" style="white-space: pre-wrap;">{msg.content}</pre>
                <button onclick="navigator.clipboard.writeText(this.previousElementSibling.innerText)" 
                style="position: absolute; top: 5px; right: 5px;">Copy</button>
            </div>
        """, unsafe_allow_html=True)
    else:
        st.chat_message(role).markdown(msg.content)

user_query = st.chat_input("Ask me anything...")
if user_query:
    st.chat_message("user").markdown(user_query)
    response_text = ""

    if use_rag and "vector" in st.session_state:
        prompt_template = PromptTemplate.from_template(
            "You are a helpful, smart, talkative, gen-z AI Assistant.\nContext: {context}\nQuestion: {question}"
        )
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

    message_placeholder = st.empty()
    final_text = ""
    for chunk in response_text:
        final_text += chunk
        message_placeholder.markdown(final_text + "▌")
        time.sleep(0.015)
    # Show final text with copy button
    message_placeholder.markdown(f"""
        <div style="position: relative; border: 1px solid #ddd; padding: 10px; border-radius: 8px;">
            <pre id="ai-response-{uuid.uuid4()}" style="white-space: pre-wrap;">{final_text}</pre>
            <button onclick="navigator.clipboard.writeText(this.previousElementSibling.innerText)" 
            style="position: absolute; top: 5px; right: 5px;">Copy</button>
        </div>
    """, unsafe_allow_html=True)

