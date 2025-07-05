
import { Card } from "@/components/ui/card";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Gen AI Intern",
      company: "Digital Nexus AI",
      period: "May 2025 – Present",
      location: "Remote",
      description: "Working on cutting-edge generative AI projects, developing innovative solutions for real-world applications.",
      current: true
    },
    {
      title: "Research Intern",
      company: "Sparklehood",
      period: "2024",
      location: "Remote",
      description: "Conducted research in artificial intelligence and machine learning, analyzed complex datasets, created visualizations, and provided insights for business decision-making.",
      current: false
    },
    {
      title: "R&D Member",
      company: "UiPath Student Community, KIIT",
      period: "2023 – Present",
      location: "Bhubaneswar",
      description: "Researched automation technologies, organized workshops, and contributed to community projects.",
      current: true
    },
    {
      title: "Tech & Media Team Member",
      company: "Shri K. Raju (MP Candidate) Campaign",
      period: "2024",
      location: "Faridabad",
      description: "Managed digital presence, created content, and handled technology infrastructure for political campaign.",
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-slate-400 to-stone-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 bg-white/5 backdrop-blur-sm border-stone-600/20 hover:border-stone-600/40 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-slate-600/20 rounded-full">
                      <Building size={20} className="text-slate-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-slate-300 transition-colors">
                      {exp.title}
                    </h3>
                    {exp.current && (
                      <span className="bg-emerald-600/20 text-emerald-300 text-xs px-2 py-1 rounded-full border border-emerald-600/30">
                        Current
                      </span>
                    )}
                  </div>
                  
                  <h4 className="text-xl text-stone-400 font-semibold mb-3">
                    {exp.company}
                  </h4>
                </div>
                
                <div className="flex flex-col md:items-end space-y-2 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {exp.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
