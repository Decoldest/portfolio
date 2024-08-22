import PropTypes from "prop-types";
import { projects } from "./ProjectsDetails";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
  const { id, title, description, videoSrc, alt, href } = project;
  return (
    <Link to={`/projects/${id}`}>
      <div className="project-preview flex flex-col gap-2">
        <video
          src={videoSrc}
          //poster={poster}
          alt={alt}
          loop
          muted
          playsInline
          className="video-thumbnail"
        ></video>
        <h2 className="text-xl">{title}</h2>
        <div className="flex justify-around gap-6 mr-4">
          <div>
            <p>{description}</p>
          </div>
          <div className="flex flex-row gap-2">
            <a href={href} target="_blank" rel="noopener noreferrer">
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
      </div>
    </Link>
  );
}

ProjectFull.propTypes = {
  tit: PropTypes.object,
};

export function ProjectFull() {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);
  const { title } = project;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
