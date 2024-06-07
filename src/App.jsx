import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Art from "./components/Art";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/art" element={<Art />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}