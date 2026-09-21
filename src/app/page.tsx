import { ContactFooter } from "@/sections/contact-footer";
import { Education } from "@/sections/education";
import { Experience } from "@/sections/experience";
import { Hero } from "@/sections/hero";
import { EngineeringAreas } from "@/sections/engineering-areas";
import { EngineeringWork } from "@/sections/engineering-work";
import { HowIWork } from "@/sections/how-i-work";

export default function Home() {
  return (
    <>
      <main id="main" tabIndex={-1}>
        <Hero />
        <EngineeringAreas />
        <EngineeringWork />
        <Experience />
        <HowIWork />
        <Education />
      </main>
      <ContactFooter />
    </>
  );
}
