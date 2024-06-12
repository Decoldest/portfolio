import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between gap-4 p-8">
        <Link to={"/"} className="text-sm sm:text-lg">
          Logo
        </Link>
        <div className="flex gap-4 sm:gap-8 ">
          <a className="text-sm sm:text-lg" href="">
            Projects
          </a>
          <Link to={"/art"} className="text-sm sm:text-lg">
            Art
          </Link>

          <Link to={"/about"} className="text-sm sm:text-lg">
            About
          </Link>

          <Link to={"/contact"} className="text-sm sm:text-lg">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
