
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import FutureProjects from "@/components/FutureProjects";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <FutureProjects />
      <Certifications />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
