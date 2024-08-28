import { useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdilArrowDown } from "@mdi/light-js";
import '@fontsource-variable/josefin-sans';

export default function Hero() {
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll = 200;
    const newOpacity = Math.max(0, 1 - scrollY / maxScroll);

    setOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero mb-6">
      <div className="main-title-container">
        <h1 className="main-title">Ryan Wong</h1>
        <h2>full-stack web developer</h2>
      </div>
      <Icon
        path={mdilArrowDown}
        size={1.5}
        className="down-arrow"
        style={{ opacity: opacity, transition: "opacity 0.2s ease-out" }} // Apply dynamic opacity
      />
    </section>
  );
}
