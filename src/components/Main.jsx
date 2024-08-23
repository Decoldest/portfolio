import Hero from "./Hero";
import SocialLinks from "./SocialLinks";
import Skills from "./Skills";
import Projects from "./Projects";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate(`/contact`);
  };
  return (
    <main className="mx-4 md:mx-20 lg:mx-28">
      <Hero />
      <Projects />
      <Skills />
      <SocialLinks />
      <div className="flex flex-row justify-center items-center">
        <button onClick={navigateToContact} className="text-4xl underline">
          Get In Touch
        </button>
      </div>
    </main>
  );
}
