import PropTypes from "prop-types";
import { projects } from "./ProjectsDetails";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

Projects.propTypes = {
  align: PropTypes.string,
};

export default function Projects({ align }) {
  return (
    <main className="p-2">
      <h1 className={` ${align} header-font`}>featured projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectPreview project={project} key={project.title} />
        ))}
      </div>
    </main>
  );
}

ProjectPreview.propTypes = {
  project: PropTypes.object,
};

function ProjectPreview({ project }) {
  const { id, title, description, videoSrc, imgSrc, alt, href, repo } = project;
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsLargeScreen(mediaQuery.matches);

    const handleResize = (e) => {
      setIsLargeScreen(e.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = (e) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const navigateToProject = () => {
    navigate(`/projects/${id}`);
  };

  return (
    <div
      className="project-preview flex flex-col gap-2"
      onClick={navigateToProject}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isLargeScreen ? (
        <video
          src={videoSrc}
          alt={alt}
          ref={videoRef}
          loop
          muted
          playsInline
          className="video-thumbnail"
        ></video>
      ) : (
        <img src={imgSrc} alt={alt} className="image-thumbnail"></img>
      )}
      <h2 className="text-3xl header-font">{title}</h2>
      <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mr-4 flex-grow">
        <div>
          <p>{description}</p>
        </div>
        <div className="flex flex-row gap-2 self-center sm:self-start">
          <a href={repo} target="_blank" rel="noopener noreferrer">
            <button
              className="project-button"
              onClick={(e) => e.stopPropagation()}
            >
              Github
            </button>
          </a>
          <a href={href} target="_blank" rel="noopener noreferrer">
            <button
              className="project-button"
              onClick={(e) => e.stopPropagation()}
            >
              Visit
            </button>
          </a>
        </div>
      </div>
      <button onClick={navigateToProject}>
        Read More <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

ProjectFull.propTypes = {
  tit: PropTypes.object,
};

export function ProjectFull() {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);
  const {
    title,
    videoSrc,
    alt,
    href,
    repo,
    tags,
    fullDescription,
    learned,
    challenges,
  } = project;
  return (
    <main className="px-2 sm:px-6 m-10 sm:m-14 md:m-18">
      <section className="flex flex-row justify-between mb-6 sm:mb-10 ">
        <div>
          <h1 className="text-4xl sm:text-6xl header-font">{title}</h1>
          <div className="flex flex-row justify-center gap-4 sm:gap-16 more-links">
            <a href={href} target="_blank" rel="noopener noreferrer">
              <button className="" onClick={(e) => e.stopPropagation()}>
                See It Live{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </a>
            <a href={repo} target="_blank" rel="noopener noreferrer">
              <button className="" onClick={(e) => e.stopPropagation()}>
                Source Code{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          {tags.map((tag) => (
            <div key={tag}>{tag}</div>
          ))}
        </div>
      </section>
      <section>
        <video
          src={videoSrc}
          alt={alt}
          loop
          preload="auto"
          controls
          muted
          autoPlay
          playsInline
          className="video-full"
        ></video>
      </section>
      <section>
        <div className="project-details-full mx-6 sm:mx-22 md:mx-28">
          <div
            data-aos="fade-zoom-in"
            data-aos-delay="100"
            data-aos-easing="ease-out-back"
          >
            <h2 className="text-4xl project-header header-font">Intention</h2>
            <p className="project-content">{fullDescription}</p>
          </div>
          <div
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-easing="ease-in-sine"
          >
            <h2 className="text-4xl project-header header-font">
              What I Learned
            </h2>
            <p className="project-content">{learned}</p>
          </div>

          <div
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-easing="ease-in-sine"
          >
            <h2 className="text-4xl project-header header-font">Challenges</h2>
            <p className="project-content">{challenges}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
