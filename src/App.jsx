import { useState } from "react";
import Navbar from "./Components/Navbar";
import { HashRouter } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Project from "./Components/Projects";
import Contact from "./Components/Contact";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Qualification from "./Components/Qualification";
import Projects from "./Components/Projects";
import Achievements from "./Components/Achievements";
import EventOrganized from "./Components/EventOrganized";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      <HashRouter>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/event" element={<EventOrganized />} />
        </Routes>
      <HashRouter>
    </div>
  );
};

export default App;
