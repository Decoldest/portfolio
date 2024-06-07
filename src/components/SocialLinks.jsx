export default function SocialLinks() {
  return (
    <div className="flex flex-row sm:flex-col sm:fixed sm:top-90 sm:left-20 sm:gap-4 justify-around items-center">
      <a>
        <i className="fab fa-github text-2xl lg:text-4xl hover:animate-jiggle"></i>
      </a>
      <a>
        <i className="fab fa-linkedin text-2xl lg:text-4xl hover:animate-jiggle"></i>
      </a>
      <a>
        <i className="fab fa-instagram text-2xl lg:text-4xl hover:animate-jiggle"></i>
      </a>

    </div>
  );
}
