import { About } from "@/sections/about";
import { ContactFooter } from "@/sections/contact-footer";
import { Education } from "@/sections/education";
import { Experience } from "@/sections/experience";
import { Hero } from "@/sections/hero";
import { InfrastructureArchitecture } from "@/sections/infrastructure-architecture";
import { Projects } from "@/sections/projects";
import { ResumeCta } from "@/sections/resume-cta";
import { Skills } from "@/sections/skills";

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <InfrastructureArchitecture />
        <Education />
        <ResumeCta />
      </main>
      <ContactFooter />
    </>
  );
}
