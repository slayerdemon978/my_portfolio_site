
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Instagram } from "lucide-react";
import { View } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <div className="flex justify-center">
          <Card className="p-8 bg-white/5 backdrop-blur-sm border-purple-500/20 max-w-2xl w-full">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Let's Connect</h3>
            
            <p className="text-gray-300 mb-8 leading-relaxed text-center">
              I'm always interested in discussing new opportunities, innovative projects, 
              and collaborations in AI/ML, quantum computing, and blockchain technology. 
              Feel free to reach out!
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <a 
                href="https://github.com/Rishirajbal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg hover:bg-purple-600/20 transition-all duration-300 transform hover:scale-105 group"
              >
                <Github size={24} className="text-purple-400 group-hover:text-purple-300" />
                <span className="text-white group-hover:text-purple-300">GitHub</span>
              </a>
              
              <a 
                href="https://in.linkedin.com/in/rishiraj-bal-3a3778315" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg hover:bg-blue-600/20 transition-all duration-300 transform hover:scale-105 group"
              >
                <Linkedin size={24} className="text-blue-400 group-hover:text-blue-300" />
                <span className="text-white group-hover:text-blue-300">LinkedIn</span>
              </a>
              
              <a 
                href="https://www.instagram.com/the___rishiraj?utm_source=qr&igsh=NW4xOTBvZmx5YXJq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg hover:bg-pink-600/20 transition-all duration-300 transform hover:scale-105 group"
              >
                <Instagram size={24} className="text-pink-400 group-hover:text-pink-300" />
                <span className="text-white group-hover:text-pink-300">Instagram</span>
              </a>
              
              <a 
                href="https://drive.google.com/file/d/1x_ZSYQ3GtoukjiefktiORZYK_GG8TD_t/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg hover:bg-green-600/20 transition-all duration-300 transform hover:scale-105 group"
              >
                <View size={24} className="text-green-400 group-hover:text-green-300" />
                <span className="text-white group-hover:text-green-300">Resume</span>
              </a>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center border-t border-purple-500/20 pt-8">
          <p className="text-gray-400">
            Rishiraj Bal - AI/ML Engineer & Quantum Computing Researcher
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2025 Rishiraj Bal. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
