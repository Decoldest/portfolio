import boozeBashVideo from "../assets/boozebash.mov";
import fetchVideo from "../assets/fetch.mov";

export const projects = [
  {
    id: "booze-bash",
    title: "Booze Bash",
    description:
      "A multiplayer party game built with React, Socket.IO, and Phaser.",
    videoSrc: boozeBashVideo,
    alt: "Booze Bash Party Game",
    href: "https://www.boozebash.ca",
    repo: "",
  },
  {
    id: "tortoise-fetch",
    title: "Tortoise Fetch",
    description:
      "A 3D fetch simulation created in React Three Fiber with Rapier physics engine.",
    videoSrc: fetchVideo,
    alt: "Tortoise Fetching Ball",
    href: "https://fetch-decoldests-projects.vercel.app/",
    repo: "",
  },
];
