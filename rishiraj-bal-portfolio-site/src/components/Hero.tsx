
import { Button } from "@/components/ui/button";
import { Github, Download, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-stone-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gray-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-400 via-stone-500 to-gray-500 bg-clip-text text-transparent">
              Rishiraj Bal
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            RB | Enthusiastic about everything tech
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            B.Tech CSE student at KIIT, pushing the boundaries of AI/ML. 
            Creator of RAG systems, Unity games, and privacy-preserving ZKP applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              className="bg-gradient-to-r from-slate-600 to-stone-700 hover:from-slate-700 hover:to-stone-800 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
            >
              <a href="https://github.com/Rishirajbal" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" size={20} />
                View GitHub
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              className="border-stone-600 text-stone-400 hover:bg-stone-600/20 px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
            >
              <a href="https://drive.google.com/file/d/1x_ZSYQ3GtoukjiefktiORZYK_GG8TD_t/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2" size={20} />
                View Resume
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="ghost" 
              className="text-white hover:text-slate-300 px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
            >
              <a href="#contact">
                <Mail className="mr-2" size={20} />
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
