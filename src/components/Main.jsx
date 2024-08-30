import Hero from "./Hero";
import SocialLinks from "./SocialLinks";
import Skills from "./Skills";
import Projects from "./Projects";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate(`/contact`);
  };
  return (
    <main className="mx-4 md:mx-20 lg:mx-32">
      <Hero />
      <section className="about-small py-4 mb-16 px-4 sm:px-16">
        <Link to={"/about"}>
          <h2 className="text-center mb-4 header-font">about</h2>
        </Link>
        <p>
          After working as a chemist for years, I decided to adapt my technical
          skills towards a full-stack developer role. I also work as a lifelong
          freelance artist in multiple forms of physical and digital media.
        </p>
      </section>
      <Projects align={"text-center mb-4"} />
      <Skills />
      <section className="flex flex-row justify-center items-center py-10 sm:py-18 my-16 sm:my-28">
        <button onClick={navigateToContact} className="text-4xl underline">
          Get In Touch
        </button>
      </section>
      <SocialLinks />
    </main>
  );
}
