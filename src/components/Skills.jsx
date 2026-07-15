const skills = [
  { icon: "devicon-csharp-plain", name: "C#" },
  { icon: "devicon-dotnetcore-plain", name: ".NET" },
  { icon: "devicon-javascript-plain", name: "JavaScript" },
  { icon: "devicon-jquery-plain", name: "jQuery" },
  { icon: "devicon-bootstrap-plain", name: "Bootstrap" },
  { icon: "devicon-microsoftsqlserver-plain", name: "SQL Server" },
  { icon: "fa-solid fa-server", name: "REST APIs" },
  { icon: "devicon-amazonwebservices-plain-wordmark", name: "AWS / S3" },
  { icon: "fa-solid fa-wand-magic-sparkles", name: "OpenAI" },
  { icon: "devicon-react-plain", name: "React" },
  { icon: "devicon-nodejs-plain-wordmark", name: "Node.js" },
  { icon: "devicon-python-plain", name: "Python" },
];

export default function Skills() {
  return (
    <section>
      <SkillsGrid />
    </section>
  );
}

function SkillsGrid() {
  return (
    <section className="mt-24 sm:pt-20">
      <h2 className="text-center mb-4 header-font">technologies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-10 px-6 md:px-12 mx-6 sm:mx-18">
        {skills.map(({ icon, name }) => (
          <div
            className="flex flex-col items-center justify-center p-4"
            key={name}
          >
            <i className={`${icon} text-2xl`} aria-hidden="true"></i>
            <div className="text-center">{name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
