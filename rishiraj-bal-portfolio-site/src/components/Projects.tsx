import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "RishiGPT",
      description: "This app helps founders and daydreamers generate unique startup ideas, names, structures, launch plans, and growth strategies — all from a single prompt. Enter your company's mission or the problem you want to solve. The app then returns: A unique startup idea, A catchy brand name, Ideal team structure, Step-by-step launch plan, Long-term growth strategy",
      tags: ["Python", "Streamlit", "GenAI", "NLP", "Startup"],
      demo: "https://rishigpt.streamlit.app/",
      repo: "https://github.com/Rishirajbal/RishiGPT.git",
      featured: true
    },
    {
      title: "YouTube RAG System", 
      description: "Python-based Retrieval-Augmented Generation tool that extracts and processes YouTube video transcripts using Flask, FAISS, and Transformers. Features automatic transcript fetching with multi-language support and semantic search powered by Microsoft's Phi-2 model.",
      tags: ["Python", "Flask", "FAISS", "Transformers", "RAG"],
      repo: "https://github.com/Rishirajbal/youtube_rag-system",
      featured: true
    },
    {
      title: "MacroHFT Trading System",
      description: "Advanced algorithmic trading system implementing reinforcement learning for high-frequency trading. Uses Double Deep Q-Network (DDQN) with prioritized experience replay, analyzing RSI, MACD, and ATR indicators.",
      tags: ["Python", "PyTorch", "RL", "DDQN", "Trading"],
      repo: "https://github.com/Rishirajbal/Stock_prediction_using-reinforcement_learning",
      featured: true
    },
    {
      title: "ZKP Circom Crypto Blockchain",
      description: "Comprehensive toolkit for implementing Zero-Knowledge Proofs using Circom and SnarkJS. Features modular circuit designs, proof creation/verification, and Solidity smart contract integration.",
      tags: ["Circom", "ZK-SNARKs", "Blockchain", "Solidity", "Cryptography"],
      repo: "https://github.com/Rishirajbal/ZKP-circom-Crypto-blockchain",
      featured: true
    },
    {
      title: "Unity Game Development",
      description: "Simple obstacle avoidance game demonstrating core Unity development concepts with C# scripting, physics system, player movement controls, and collision detection.",
      tags: ["Unity", "C#", "Game Development", "Physics"],
      repo: "https://github.com/Rishirajbal/Basic_game_dev_using_UNITY",
      featured: false
    },
    {
      title: "ML Models Comparison",
      description: "Python-based project analyzing stock market performance across five machine learning models including regression, time series forecasting, and deep learning approaches.",
      tags: ["Python", "Machine Learning", "Stock Analysis", "Time Series"],
      repo: "https://github.com/Rishirajbal/stock_data_comparison_using_ml_models",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-slate-400 to-stone-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 mb-12 lg:grid-rows-2">
          {projects.filter(p => p.featured).map((project, index) => (
            <Card key={index} className="group p-8 bg-white/5 backdrop-blur-sm border-stone-600/20 hover:border-stone-600/40 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-stone-600/20 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-slate-300 transition-colors">
                  {project.title}
                </h3>
                <div className="flex space-x-2 flex-shrink-0">
                  {project.repo && (
                    <Button asChild size="sm" className="bg-slate-700/50 hover:bg-slate-600/70 text-white border border-slate-600/50 hover:border-slate-500/70">
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                        <Github size={18} />
                        <span className="hidden sm:inline">GitHub</span>
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button asChild size="sm" className="bg-stone-700/50 hover:bg-stone-600/70 text-white border border-stone-600/50 hover:border-stone-500/70">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                        <ExternalLink size={18} />
                        <span className="hidden sm:inline">Demo</span>
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-3 py-1 bg-gradient-to-r from-slate-700/30 to-stone-700/30 rounded-full text-sm text-slate-200 border border-slate-600/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <Card key={index} className="group p-6 bg-white/5 backdrop-blur-sm border-stone-600/20 hover:border-stone-600/40 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-slate-300 transition-colors">
                  {project.title}
                </h3>
                <Button asChild size="sm" className="bg-slate-700/50 hover:bg-slate-600/70 text-white border border-slate-600/50 hover:border-slate-500/70 px-3">
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
                    <Github size={16} />
                    <span className="text-xs">GitHub</span>
                  </a>
                </Button>
              </div>
              
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1">
                {project.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-2 py-1 bg-gradient-to-r from-slate-700/20 to-stone-700/20 rounded text-xs text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2 py-1 text-xs text-gray-400">
                    +{project.tags.length - 3} more
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
