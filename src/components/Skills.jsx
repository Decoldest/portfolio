export default function Skills() {
  return (
    <section>
      <SkillsGrid />
    </section>
  );
}

function SkillsGrid() {
  return (
    <section className="mt-20">
      <h1 className="text-sm">technologies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-10 px-8 sm:px-6 md:px-12 mx-6 sm:mx-18">
        <div className="flex flex-col items-center justify-center p-4">
          <i className="devicon-html5-plain text-xl"></i>
          <div className="text-center">Html</div>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <i className="devicon-css3-plain text-xl"></i>
          <div className="text-center">CSS</div>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <i className="devicon-javascript-plain text-xl"></i>
          <div className="text-center">Javascript</div>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <i className="devicon-react-plain text-2xl"></i>
          <div className="text-center">React</div>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <i className="devicon-nodejs-plain-wordmark text-4xl"></i>
          <div className="text-center">NodeJS</div>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <i className="devicon-tailwindcss-original text-2xl"></i>
          <div className="text-center">Tailwind</div>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <i className="devicon-express-original text-2xl"></i>
          <div className="text-center">Express</div>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <i className="devicon-python-plain text-xl"></i>
          <div className="text-center">Python</div>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <i className="devicon-mongodb-plain text-2xl"></i>
          <div className="text-center">MongoDB</div>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <i className="devicon-git-plain text-xl"></i>
          <div className="text-center">Git</div>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <i className="devicon-sass-original text-3xl"></i>
          <div className="text-center">Sass</div>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <i className="devicon-jest-plain text-xl"></i>
          <div className="text-center">Jest</div>
        </div>
      </div>
    </section>
  );
}
