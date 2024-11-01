import boozeBashVideo from "../assets/boozebash.mov";
import boozeBashSmall from "../assets/boozebashsmall.png";
import fetchVideo from "../assets/fetch.mov";
import fetchImage from "../assets/fetch.png";
import scraperVideo from "../assets/scraper.mov";
import scraperImage from "../assets/scraper.png";

export const projects = [
  {
    id: "booze-bash",
    title: "Booze Bash",
    description:
      "A multiplayer party game built with React, Socket.io, Phaser, and MongoDB.",
    videoSrc: boozeBashVideo,
    imgSrc: boozeBashSmall,
    alt: "Booze Bash Party Game",
    href: "https://www.boozebash.ca",
    repo: "https://github.com/Decoldest/mingames",
    tags: ["socket.io", "phaser"],
    fullDescription: `I wanted to create an online party room of minigames to play with my friends around the world (well, in the US).
    The concept of a multiplayer online party game isn't new, but my app offers a unique twist: 
    The ability to wager drinks on the outcome of each minigame, adding a fun and competitive element to the experience. 
    `,
    learned: `With this project, I learned how to utilize websockets with Socket.io to enable real-time bidirectional communication between a 
    client and server. I also learned how to render a basic game with Phaser and use game information from the server for updates.
    `,
    challenges: `The most challenging part of this project was managing the socket connections and events in a room. Especially for games that
    required numerous fast-paced events, updating the game state on the server and reflecting that state on the client required lengthy planning.
    This was made even more difficult when integrating socket events with Phaser.  Having the objects in Phaser update upon events triggered by the socket 
    required careful thought of synchronization and race conditions. Ensuring that each client viewed the same game state was a complex problem 
    that was solved by maintaining each smaller state.
    `,
  },
  {
    id: "url-scraper",
    title: "URL Web Scraper",
    description: "A web scaper with AI prompt analysis.",
    videoSrc: scraperVideo,
    imgSrc: scraperImage,
    alt: "Website Scraper Demo",
    href: null,
    repo: "https://github.com/Decoldest/url-scraper",
    tags: ["LLM", "ai", "python", "flask"],
    fullDescription: `This was actually a coding challenge for a job opportunity, but I wanted
    to add the option for AI prompts.
    `,
    learned: `I gained experience on how to improve my code structure and get out of my comfort zone.
     I am incredibly used to Node.js, so using Python with Flask was a slightly different process. Of
     course, I was also able to integrate an LLM into a web app.
    `,
    challenges: `The code structure in the backend of this app was based on a YouTube video by TechWithTim
    on YouTube. Shout out to him. The difference was his app used Streamlit and ran OLLAMA locally.
    I wanted to use an AI model API instead, and I ended up with Gemini, mostly because it was free. After
    changing the model I had to modify how the scraped data was analyzed. Furthermore, since there were now
    separate frontend and backend components, ensuring a proper POST API call to the backend was necessary
    to use Gemini in the first place.`,
  },
  {
    id: "tortoise-fetch",
    title: "Tortoise Fetch",
    description:
      "A 3D fetch simulation created in React Three Fiber with Rapier physics engine.",
    videoSrc: fetchVideo,
    imgSrc: fetchImage,
    alt: "Tortoise Fetching Ball",
    href: "https://fetch-decoldests-projects.vercel.app/",
    repo: "https://github.com/Decoldest/interactive",
    tags: ["three.js", "react-three-fiber"],
    fullDescription: `Unfortunately, after years of trying, my pet tortoise remains unable to learn basic tricks. I made this 3D simulation so
    I could finally have the experience of playing fetch with him.
    `,
    learned: `To render this scene, I had to research the React Three Fiber library documentation and experiment with different examples 
    to incorporate the components I needed. I also learned how to use a physics engine as an extension of my current scene so I can prevent
    myself from reinventing the wheel. Finally, I gained a basic understanding of 3D models and animations using glTF files.
    `,
    challenges: `By far the biggest challenge with this fetch project was understanding how the 2D interactions of the client would
    translate to the 3D rendered space. This included the seemingly simple dragging portion of the ball object, which I solved by using 
    raycasting on the XY-plane. An even larger challenge was tracking the positions of both the ball and my tortoise, and the rotation
    of the latter so he could grab and return the ball. This required remembering math I haven't thought about in years, as well as some
    quick YouTube lectures on math I have never seen before (I still barely know what a quaternion is). In the end, I approximated the ball
    position by transforming the yaw and w values to a coordinate translation in front of his face, and it is still far from perfect.`,
  },
];
