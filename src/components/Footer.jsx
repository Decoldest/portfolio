import Email from "./Email";

export default function Footer() {
  return (
    <div className="flex justify-around mx-10 my-6 items-center">
      <div className="">© Ryan Wong {new Date().getFullYear()}</div>
      <div className="footer-content flex flex-col gap-2">
        <Email />
        <a
          href={`https://github.com/Decoldest`}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href={`https://linkedin.com/ryanjameswong`}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
