import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between gap-4 p-8 ">
        <div>Logo</div>
        <div className="flex gap-4 md:gap-8 ">
          <a className="text-sm md:text-lg" href="">
            Work
          </a>
          <Link to={"/art"} className="text-sm md:text-lg">
            Art
          </Link>

          <Link to={"/about"} className="text-sm md:text-lg">
            About
          </Link>

          <a className="text-sm md:text-lg" href="">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
