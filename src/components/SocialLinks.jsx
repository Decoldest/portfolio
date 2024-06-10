import { Link } from "react-router-dom";

export default function SocialLinks() {
  return (
    <div className=" flex flex-row sm:flex-col sm:fixed sm:top-80 sm:left-20 sm:gap-4 justify-around items-center">
      <Link
        to={"https://github.com/Decoldest"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github text-2xl sm:hover:animate-jiggle"></i>
      </Link>
      <Link
        to={"https://linkedin.com/ryanjameswong"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin text-2xl sm:hover:animate-jiggle"></i>
      </Link>
      <Link
        to={"https://instagram.com/ryanwong.zip"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram text-2xl sm:hover:animate-jiggle"></i>
      </Link>
    </div>
  );
}
