
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Instagram } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-slate-400 to-stone-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-white/5 backdrop-blur-sm border-stone-600/20 hover:border-stone-600/40 transition-all duration-300">
            <p className="text-lg text-gray-300 leading-relaxed">
              B.Tech CSE student at KIIT with hands-on experience in AI/ML, blockchain, and data analytics. 
              Passionate about pushing the boundaries of machine learning and quantum computing. Creator of 
              RAG systems, Unity games, and privacy-preserving ZKP applications.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              I specialize in developing cutting-edge solutions that bridge theoretical concepts with 
              practical applications, from reinforcement learning trading systems to zero-knowledge proof 
              implementations.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              Beyond technology, I love traveling to new places, discovering great songs, gaming with friends, 
              and making meaningful connections with people from all walks of life.
            </p>
          </Card>

          <div className="flex justify-center space-x-6 mt-8">
            <a 
              href="https://in.linkedin.com/in/rishiraj-bal-3a3778315" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-4 bg-slate-600/20 rounded-full group-hover:bg-slate-600/30 transition-all duration-300 transform group-hover:scale-110">
                <Linkedin size={24} className="text-slate-400" />
              </div>
            </a>
            
            <a 
              href="https://github.com/Rishirajbal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-4 bg-stone-600/20 rounded-full group-hover:bg-stone-600/30 transition-all duration-300 transform group-hover:scale-110">
                <Github size={24} className="text-stone-400" />
              </div>
            </a>
            
            <a 
              href="https://www.instagram.com/the___rishiraj?utm_source=qr&igsh=NW4xOTBvZmx5YXJq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-4 bg-gray-600/20 rounded-full group-hover:bg-gray-600/30 transition-all duration-300 transform group-hover:scale-110">
                <Instagram size={24} className="text-gray-400" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
