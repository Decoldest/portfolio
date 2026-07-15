import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

const work = {
  title: "Hensall Global Logistics",
  meta: "Software Developer & IT Consultant · Walseth Consulting Group · Jan 2025 - Present",
  description:
    "Primary technical consultant for Hensall Global Logistics, partnering with stakeholders to identify business challenges and deliver tailored software solutions.",
  details: [
    "Architected and implemented a REST API integration between Hensall Global Logistics and BridgeNet Solutions that automated shipment booking creation, reducing manual processing and improving data accuracy.",
    "Designed and developed enterprise applications using C#, .NET, JavaScript, jQuery, Bootstrap, SQL Server, and REST APIs, while translating business requirements into technical specifications.",
    "Led client meetings, solution demonstrations, and technical presentations, and modernized legacy infrastructure by migrating application file storage to Amazon S3.",
  ],
  href: "https://www.hensallglobal.com/",
};

Work.propTypes = {
  align: PropTypes.string,
};

export default function Work({ align }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main className="work-page p-2">
      <Link to="/work">
        <h2 className={` ${align ?? ""} header-font`}>work</h2>
      </Link>
      <article className="work-card">
        <div className="work-card-meta">{work.meta}</div>
        <h2 className="header-font text-3xl sm:text-4xl mt-3">
          {work.title}
        </h2>
        <p>{work.description}</p>
        {isExpanded && (
          <div className="work-card-details">
            {work.details.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </div>
        )}
        <div className="work-card-actions">
          <a
            className="project-button"
            href={work.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit
          </a>
          <button
            className="work-read-more"
            type="button"
            aria-expanded={isExpanded}
            onClick={() => setIsExpanded((expanded) => !expanded)}
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        </div>
      </article>
    </main>
  );
}
