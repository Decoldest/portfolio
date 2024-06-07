import Duck from "../assets/Ducky.svg";
import Portrait from "../assets/Portrait.jpeg";
import Posty from "../assets/Posty.svg";
import Sketch from "../assets/Sketch.png";
import Valentine from "../assets/Valentine.png";
import Unfinished from "../assets/Unfinished.jpg";

export default function Art() {
  return (
    <main>
      <h1>Selected Pieces</h1>
      <ImageGrid />
      <h1>Art Stack</h1>
    </main>
  );
}

function ImageGrid() {
  return (
    <section
      id=""
      className="relative flex min-h-screen flex-col justify-center py-6 sm:py-12"
    >
      <div className="columns-2 2xl:columns-3 gap-10 [column-fill:_balance] box-border mx-auto before:box-inherit after:box-inherit">
        <img
          className="break-inside-avoid mb-6"
          src={Duck}
          alt="Duck With Inflatable Digital Photo"
        />
        <img
          className="break-inside-avoid mb-6"
          src={Portrait}
          alt="Portrait Drawing of a Woman in Graphite"
        />
        <img
          className="break-inside-avoid mb-6"
          src={Posty}
          alt="Post Malone Digital Portrait"
        />
        <img
          className="break-inside-avoid mb-6"
          src={Sketch}
          alt="Sketch of Woman in Graphite"
        />
        <img
          className="break-inside-avoid mb-6"
          src={Valentine}
          alt="Couple Portrait Photo"
        />
        <img
          className="break-inside-avoid mb-6"
          src={Unfinished}
          alt="Unfinished Portrait"
        />
      </div>
    </section>
  );
}
