
import { Card } from "@/components/ui/card";
import { Clock, Brain, Code } from "lucide-react";

const FutureProjects = () => {
  const futureProjects = [
    {
      title: "Tumor Detection System",
      description: "Developing a cutting-edge medical imaging system that combines quantum machine learning with advanced Convolutional Neural Networks (CNNs) for highly accurate tumor detection and classification.",
      icon: Brain,
      tags: ["Quantum ML", "CNN", "Medical Imaging", "AI Healthcare"],
      status: "In Development"
    },
    {
      title: "Code Generation Tools (RishiGPT+)",
      description: "Working on intelligent code generation tools that will automate and enhance the software development process. Further technical details and specifications will be revealed upon completion.",
      icon: Code,
      tags: ["Code Generation", "AI Tools", "Developer Productivity", "Automation"],
      status: "In Research"
    }
  ];

  return (
    <section id="future-projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Future Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {futureProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="group p-6 bg-white/5 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-purple-600/20 rounded-lg mr-4">
                    <IconComponent size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center mt-1">
                      <Clock size={16} className="text-blue-400 mr-2" />
                      <span className="text-sm text-blue-300">{project.status}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-2 py-1 bg-gradient-to-r from-purple-700/20 to-blue-700/20 rounded text-xs text-purple-200 border border-purple-600/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FutureProjects;
