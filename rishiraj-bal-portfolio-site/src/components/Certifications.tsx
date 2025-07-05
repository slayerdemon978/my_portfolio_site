
import { Card } from "@/components/ui/card";
import { Award, CheckCircle } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Google Cloud ML Certification",
      status: "Completed",
      description: "Machine Learning certification focusing on GCP ML services and implementations",
      inProgress: false
    },
    {
      title: "Ethical Decision Making in Tech",
      status: "Completed",
      description: "Understanding ethical implications in technology development and deployment",
      inProgress: false
    },
    {
      title: "AMCAT Employability Report",
      status: "Completed",
      description: "Assessment of technical and soft skills for industry readiness",
      inProgress: false
    },
    {
      title: "Internship Certificate - Sparklehood",
      status: "Completed",
      description: "Research Analytics internship with hands-on project experience",
      inProgress: false
    },
    {
      title: "Corporate Governance, Business for Good",
      status: "Completed",
      description: "Understanding corporate responsibility and sustainable business practices",
      inProgress: false
    },
    {
      title: "IBM Qiskit Summer School of Quantum Computing",
      status: "In Progress",
      description: "Advanced quantum computing program focusing on quantum algorithms and practical implementations using IBM's Qiskit framework",
      inProgress: true
    },
    {
      title: "LangChain Academy Introduction to LangGraph",
      status: "In Progress",
      description: "Comprehensive course on building complex AI workflows and multi-agent systems using LangGraph framework",
      inProgress: true
    }
  ];

  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-slate-400 to-stone-500 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="p-6 bg-white/5 backdrop-blur-sm border-stone-600/20 hover:border-stone-600/40 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {cert.inProgress ? (
                    <div className="p-2 bg-amber-600/20 rounded-full">
                      <Award size={20} className="text-amber-400" />
                    </div>
                  ) : (
                    <div className="p-2 bg-emerald-600/20 rounded-full">
                      <CheckCircle size={20} className="text-emerald-400" />
                    </div>
                  )}
                </div>
                
                <span className={`text-xs px-2 py-1 rounded-full ${
                  cert.inProgress 
                    ? 'bg-amber-600/20 text-amber-300 border border-amber-600/30' 
                    : 'bg-emerald-600/20 text-emerald-300 border border-emerald-600/30'
                }`}>
                  {cert.status}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-slate-300 transition-colors">
                {cert.title}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                {cert.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
