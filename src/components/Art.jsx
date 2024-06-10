import Duck from "../assets/Ducky.svg";
import Portrait from "../assets/Portrait.jpeg";
import Posty from "../assets/Posty.svg";
import Sketch from "../assets/Sketch.png";
import Valentine from "../assets/Valentine.png";
import Unfinished from "../assets/Unfinished.jpg";
import Pencil from "../assets/Pencil.svg";
import ColouredPencil from "../assets/ColouredPencil.svg";
import Icon from "@mdi/react";
import { mdiPaletteOutline, mdiCamera, mdiChefHat } from "@mdi/js";

export default function Art() {
  return (
    <main className="bg-white text-slate-700">
      <ImageGrid />
      <div className="p-8">
        <h1 className="text-xl mx-28 sm:px-20">Art Stack</h1>
        <ArtGrid />
      </div>
    </main>
  );
}

function ImageGrid() {
  return (
    <section
      id=""
      className="relative flex min-h-screen flex-col justify-center pt-6"
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

function ArtGrid() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 m-2 gap-4 md:gap-10 px-4 md:px-20 md:mx-28">
      <div className="flex flex-col items-center justify-center p-4">
        <img
          className="h-10"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"
          alt="Adobe Photoshop Icon"
        />
        <div className="text-center">Photoshop</div>
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <img
          className="h-10"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg"
          alt="Adobe Illustrator Icon"
        />
        <div className="text-center">Illustrator</div>
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <img
          className="h-10"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg"
          alt="Adobe Premiere Pro Icon"
        />
        <div className="text-center">Premiere Pro</div>
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <img className="h-8" src={Pencil} alt="Graphite Pencil Icon" />
        <div className="text-center mt-2">Graphite</div>
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <img className="h-8" src={ColouredPencil} alt="Coloured Pencil Icon" />
        <div className="text-center mt-2">Coloured Pencil</div>
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <Icon
          path={mdiPaletteOutline}
          size={2}
          color="#f63131"
          aria-label="Paint Palette Icon"
        />
        <div className="text-center mt-2">Paint</div>
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <Icon path={mdiCamera} size={2} aria-label="Camera Icon" />
        <div className="text-center mt-2">Camera</div>
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <Icon path={mdiChefHat} size={2} color="#a7a7a7" aria-label="Camera Icon" />
        <div className="text-center mt-2">Cooking</div>
      </div>
    </section>
  );
}
