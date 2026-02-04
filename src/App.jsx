import Navbar from "./components/Navbar";
import MobileBottomNav from "./components/MobileBottomNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import useActiveSection from "./hooks/useActiveSection";
import { navItems } from "./data/content";

function App() {
  const activeSection = useActiveSection(navItems);

  return (
    <div className="bg-background-light text-text-main overflow-y-hidden">
      <Navbar activeSection={activeSection} />
      <MobileBottomNav activeSection={activeSection} />

      <main className="pb-20 md:pb-0">
         <section  id="home"  className="min-h-[100svh] flex items-center scroll-mt-22">
          <div className="mx-auto w-full max-w-6xl px-4">
            <Hero />
          </div>
        </section>

        <section  id="about"  className="min-h-[100svh] flex items-center scroll-mt-22">
          <div className="mx-auto w-full max-w-6xl px-4">
            <About />
          </div>
        </section> 

        <section  id="experience"  className="min-h-[100svh] flex items-center scroll-mt-22">
          <div className="mx-auto w-full max-w-6xl px-4">
            <Experience />
          </div>
        </section> 


        <section  id="skills"  className="min-h-[100svh] flex items-center scroll-mt-22 pt-8 md:pt-12">
          <div className="mx-auto w-full max-w-6xl px-4">
            <Skills />
          </div>
        </section> 

        <section  id="projects"  className="min-h-[100svh] flex items-center scroll-mt-22 md:pt-12">
          <div className="mx-auto w-full max-w-6xl px-4">
            <Projects />
          </div>
        </section>
    

        <section  id="contact"className="min-h-[100svh] flex items-center scroll-mt-22 md:pt-12">
          <div className="mx-auto w-full max-w-6xl px-4">
            <Contact />
          </div>
        </section>   

        <Footer />
      </main>
    </div>
  );
}

export default App;
