import Hero from "./Hero";
import SocialLinks from "./SocialLinks";
import Skills from "./Skills";
import Projects from "./Projects";

export default function Main() {
  return (
    <main className="mx-4 md:mx-20 lg:mx-28">
      <Hero />
      <Projects />
      <Skills />
      <SocialLinks />
    </main>
  );
}
