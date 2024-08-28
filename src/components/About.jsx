import portrait from "../assets/me.png";

export default function About() {
  return (
    <section className="py-4 sm:py-10 m-2">
      <div className="about-container gap-4 sm:gap-10">
        <div className="portrait-container flex flex-col items-center gap-6">
          <img src={portrait} alt="Personal Portrait" className="me" />
          <p className="mx-10 text-center">{`I made this digital portrait in Photoshop :)`}</p>
        </div>
        <div className="about-text">
          <h1 id="name">{`I'm Ryan`}</h1>
          <p>
            {`I am a full-stack developer bringing a unique blend of creativity
            and traditionality to craft visually appealing and functional web experiences.`}
          </p>
          <p>
            As a former chemist and lifelong artist, I leverage my unique
            background to produce a distinctive perspective in my work.
          </p>
          <p>
            In my free time, I am deeply immersed in hockey, whether playing or
            watching the game. I also enjoy caring for my pet tortoise, who
            tends to slow down my busy life.
          </p>
          <p>
            {`Check out my project and art portfolios 
              to see more of my work and what I’m passionate about.`}
          </p>
        </div>
      </div>
    </section>
  );
}
