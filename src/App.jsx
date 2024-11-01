import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import About from "./components/About";
import Art from "./components/Art";
import Contact from "./components/Contact";
import { ProjectFull } from "./components/Projects";
import Footer from "./components/Footer";
import "@fontsource-variable/anybody";
import "@fontsource-variable/lora";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/resume" element={<Projects />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectFull />} />
          <Route path="/art" element={<Art />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}
