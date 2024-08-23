import PropTypes from "prop-types";
import { projects } from "./ProjectsDetails";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Projects() {
  return (
    <main className="p-2">
      <h1 className="text-sm">featured projects</h1>
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
  const { id, title, description, videoSrc, alt, href, repo } = project;
  const navigate = useNavigate();
  const videoRef = useRef(null);

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
      <video
        src={videoSrc}
        alt={alt}
        ref={videoRef}
        loop
        muted
        playsInline
        className="video-thumbnail"
      ></video>
      <h2 className="text-xl">{title}</h2>
      <div className="flex justify-between items-start gap-6 mr-4">
        <div>
          <p>{description}</p>
        </div>
        <div className="flex flex-row gap-2">
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
      <button onClick={navigateToProject}>Read More <i className="fa-solid fa-arrow-right"></i></button>
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
    <main className="m-10 sm:m-20">
      <div className="flex flex-row justify-between mb-6 sm:mb-10">
        <div>
          <h1 className="text-4xl sm:text-6xl">{title}</h1>
          <div className="flex flex-row justify-center gap-20 more-links">
          <a href={href} target="_blank" rel="noopener noreferrer">
            <button className="" onClick={(e) => e.stopPropagation()}>
              See It Live <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
          </a>
          <a href={repo} target="_blank" rel="noopener noreferrer">
            <button className="" onClick={(e) => e.stopPropagation()}>
              Source Code <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
          </a>
        </div>
      </div>
        <div className="flex flex-row gap-4 items-center">
          {tags.map((tag) => (
            <div key={tag}>{tag}</div>
          ))}
        </div>
      </div>
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
      <div className="mx-6 sm:mx-18 md:mx-28">
        <h2 className="text-4xl project-header">Intention</h2>
        <p className="project-content">{fullDescription}</p>
        <h2 className="text-4xl project-header">What I Learned</h2>
        <p className="project-content">{learned}</p>
        <h2 className="text-4xl project-header">Challenges</h2>
        <p className="project-content">{challenges}</p>
      </div>
    </main>
  );
}
