import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between gap-4 p-2 sm:p-8">
        <Link to={"/"} className="text-sm sm:text-lg">
          RW
        </Link>
        <div className="flex gap-4 sm:gap-8 ">
          <Link to={"/projects"} className="text-sm sm:text-lg">
            Projects
          </Link>
          <Link to={"/art"} className="text-sm sm:text-lg">
            Art
          </Link>
          <Link to={"/about"} className="text-sm sm:text-lg">
            About
          </Link>
          <a
            href="https://ryanwongresume.tiiny.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-lg"
          >
            Resume
          </a>
          <Link to={"/contact"} className="text-sm sm:text-lg">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
