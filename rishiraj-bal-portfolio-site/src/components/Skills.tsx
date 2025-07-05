
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C/C++", "JavaScript", "SQL"],
      color: "from-slate-600 to-gray-600"
    },
    {
      title: "AI & Machine Learning",
      skills: ["ANN", "CNN", "Reinforcement Learning", "Deep Learning", "Quantum ML", "Computer Vision"],
      color: "from-stone-600 to-slate-600"
    },
    {
      title: "Web & Databases",
      skills: ["HTML", "CSS", "React", "MySQL", "Oracle SQL", "Flask"],
      color: "from-gray-600 to-stone-600"
    },
    {
      title: "Tools & Platforms",
      skills: ["Docker", "Unity", "Arduino", "GitHub", "Power BI", "Tableau"],
      color: "from-zinc-600 to-gray-600"
    },
    {
      title: "Cloud & Development",
      skills: ["Google Cloud Platform", "Ubuntu", "VS Code", "Visual Studio"],
      color: "from-slate-700 to-stone-700"
    },
    {
      title: "Blockchain & Crypto",
      skills: ["Solidity", "Circom", "ZK-SNARKs", "Smart Contracts", "Web3"],
      color: "from-stone-700 to-zinc-700"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-slate-400 to-stone-500 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-white/5 backdrop-blur-sm border-stone-600/20 hover:border-stone-600/40 transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="mb-4">
                <h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform`}>
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="p-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg text-center hover:from-slate-700/20 hover:to-stone-700/20 transition-all duration-300 transform hover:scale-105 border border-gray-600/30 hover:border-slate-600/50"
                  >
                    <span className="text-sm text-gray-300 font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Skills Visualization */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Core Competencies
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { skill: "Machine Learning", level: 90 },
              { skill: "Python", level: 95 },
              { skill: "Blockchain", level: 85 },
              { skill: "Game Development", level: 80 }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="2"
                    />
                    <path
                      d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeDasharray={`${item.level}, 100`}
                      className="animate-pulse"
                    />
                    <defs>
                      <linearGradient id="gradient">
                        <stop offset="0%" stopColor="#64748B" />
                        <stop offset="100%" stopColor="#78716C" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-white">{item.level}%</span>
                  </div>
                </div>
                <h4 className="text-white font-medium">{item.skill}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
