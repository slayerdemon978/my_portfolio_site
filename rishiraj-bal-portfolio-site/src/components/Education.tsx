
import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech Computer Science & Engineering",
      institution: "KIIT University",
      location: "Bhubaneswar",
      period: "2022 – 2026",
      description: "Specializing in AI/ML, blockchain technology, and quantum computing. Active member of technical communities and research groups.",
      current: true
    },
    {
      degree: "Class 12 (Higher Secondary)",
      institution: "Delhi Public School",
      location: "Faridabad",
      period: "2022",
      description: "Completed senior secondary education with focus on Science and Mathematics.",
      current: false
    },
    {
      degree: "Class 10 (Secondary)",
      institution: "Delhi Public School",
      location: "Faridabad",
      period: "2020",
      description: "Completed secondary education with strong foundation in STEM subjects.",
      current: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-slate-400 to-stone-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="p-8 bg-white/5 backdrop-blur-sm border-stone-600/20 hover:border-stone-600/40 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-stone-600/20 rounded-full">
                      <GraduationCap size={20} className="text-stone-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-stone-300 transition-colors">
                      {edu.degree}
                    </h3>
                    {edu.current && (
                      <span className="bg-slate-600/20 text-slate-300 text-xs px-2 py-1 rounded-full border border-slate-600/30">
                        Current
                      </span>
                    )}
                  </div>
                  
                  <h4 className="text-xl text-slate-400 font-semibold mb-1">
                    {edu.institution}
                  </h4>
                  
                  <p className="text-gray-400 mb-3">{edu.location}</p>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Calendar size={16} />
                  <span>{edu.period}</span>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {edu.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
