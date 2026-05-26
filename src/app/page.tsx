import { About } from "@/sections/about";
import { ContactFooter } from "@/sections/contact-footer";
import { Education } from "@/sections/education";
import { Experience } from "@/sections/experience";
import { Hero } from "@/sections/hero";
import { Leadership } from "@/sections/leadership";
import { Projects } from "@/sections/projects";
import { ResumeCta } from "@/sections/resume-cta";
import { Skills } from "@/sections/skills";

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Leadership />
        <Education />
        <ResumeCta />
      </main>
      <ContactFooter />
    </>
  );
}
