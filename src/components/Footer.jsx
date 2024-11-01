import Email from "./Email";
import Icon from "@mdi/react";
import { mdiArrowTopRight } from "@mdi/js";

export default function Footer() {
  return (
    <div className="footer flex flex-col gap-4 sm:flex-row justify-center sm:justify-around my-10 items-center">
      <div>© Ryan Wong {new Date().getFullYear()}</div>
      <div className="footer-content flex flex-col gap-2 shrink-0">
        <Email underline={true} className={"footer-email self-start"} />
        <a
          href="https://ryanwongresume.tiiny.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex"
        >
          View CV
          <Icon path={mdiArrowTopRight} size={1} />
        </a>
        <a
          href={`https://github.com/Decoldest`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex"
        >
          GitHub
          <Icon path={mdiArrowTopRight} size={1} />
        </a>
        <a
          href={`https://linkedin.com/ryanjameswong`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex"
        >
          LinkedIn
          <Icon path={mdiArrowTopRight} size={1} />
        </a>
      </div>
    </div>
  );
}
