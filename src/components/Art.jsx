import { useEffect } from "react";
import Duck from "../assets/Ducky.svg";
import Portrait from "../assets/Portrait.jpeg";
import Posty from "../assets/Posty.svg";
import Sketch from "../assets/Sketch.png";
import Valentine from "../assets/Valentine.png";
import Unfinished from "../assets/Unfinished.jpg";
import Pencil from "../assets/Pencil.svg";
import ColouredPencil from "../assets/ColouredPencil.svg";
import Icon from "@mdi/react";
import { mdiPaletteOutline, mdiCamera } from "@mdi/js";

export default function Art() {
  useEffect(() => {
    document.documentElement.classList.add("light-theme");
    return () => {
      document.documentElement.classList.remove("light-theme");
    };
  }, []);

  return (
    <main className="p-2">
      <h1 className="text-sm">selected works</h1>
      <ImageGrid />
      <div>
        <h1 className="text-sm">art stack</h1>
        <ArtStack />
      </div>
    </main>
  );
}

function ImageGrid() {
  return (
    <section
      id=""
      className="relative flex min-h-screen flex-col justify-center pt-6 mb-2 sm:mb-20"
    >
      <div className="columns-2 xl:columns-3 gap-2 md:gap-6 [column-fill:_balance] box-border before:box-inherit after:box-inherit p-2 md:px-12">
        <img
          className="break-inside-avoid mb-2 md:mb-6"
          src={Duck}
          alt="Duck With Inflatable Digital Photo"
        />
        <img
          className="break-inside-avoid mb-2 md:mb-6"
          src={Valentine}
          alt="Couple Portrait Photo"
        />
        <img
          className="break-inside-avoid mb-2 md:mb-6"
          src={Portrait}
          alt="Portrait Drawing of a Woman in Graphite"
        />
        <img
          className="break-inside-avoid mb-2 md:mb-6"
          src={Sketch}
          alt="Sketch of Woman in Graphite"
        />
        <img
          className="break-inside-avoid mb-2 md:mb-6"
          src={Posty}
          alt="Post Malone Digital Portrait"
        />
        <img
          className="break-inside-avoid mb-2 md:mb-6"
          src={Unfinished}
          alt="Unfinished Portrait"
        />
      </div>
    </section>
  );
}

function ArtStack() {
  return (
    <section className="flex justify-center flex-wrap gap-4 md:gap-10 mt-4">
      <div className="flex flex-col items-center justify-center p-4 gap-2 md:gap-4">
        <img
          className="h-8"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"
          alt="Adobe Photoshop Icon"
        />
        <div className="text-center text-sm">photoshop</div>
      </div>
      <div className="flex flex-col items-center justify-center p-4 gap-2 md:gap-4">
        <img
          className="h-8"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg"
          alt="Adobe Illustrator Icon"
        />
        <div className="text-center text-sm">illustrator</div>
      </div>
      <div className="flex flex-col items-center justify-center p-4 gap-2 md:gap-4">
        <img
          className="h-8"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg"
          alt="Adobe Premiere Pro Icon"
        />
        <div className="text-center text-sm">premiere pro</div>
      </div>
      <div className="flex flex-col items-center justify-center p-4 gap-1 md:gap-3">
        <img className="h-6" src={Pencil} alt="Graphite Pencil Icon" />
        <div className="text-center mt-2 text-sm">Graphite</div>
      </div>
      <div className="flex flex-col items-center justify-center p-4 gap-1 md:gap-3">
        <img className="h-6" src={ColouredPencil} alt="Coloured Pencil Icon" />
        <div className="text-center mt-2 text-sm">coloured pencil</div>
      </div>
      <div className="flex flex-col items-center justify-center p-4 md:gap-1">
        <Icon
          path={mdiPaletteOutline}
          size={1.5}
          color="#fc6d6d"
          aria-label="Paint Palette Icon"
        />
        <div className="text-center mt-2 text-sm">paint</div>
      </div>
      <div className="flex flex-col items-center justify-center p-4 md:gap-1">
        <Icon
          path={mdiCamera}
          size={1.5}
          color="#8f8f8f"
          aria-label="Camera Icon"
        />
        <div className="text-center mt-2 text-sm">camera</div>
      </div>
    </section>
  );
}
