import Hero from "./Hero";
import SocialLinks from "./SocialLinks";
import Skills from "./Skills";
import Projects from "./Projects";
import { useNavigate } from "react-router-dom";
import portrait from "../assets/me.png";

export default function Main() {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate(`/contact`);
  };
  return (
    <main className="mx-4 md:mx-20 lg:mx-32">
      <Hero />
      <Projects align={"text-center"} />
      <Skills />
      <div className="flex flex-row justify-center items-center py-10 sm:py-18 my-16 sm:my-28">
        <button onClick={navigateToContact} className="text-4xl underline">
          Get In Touch
        </button>
      </div>
      <SocialLinks />
    </main>
  );
}
