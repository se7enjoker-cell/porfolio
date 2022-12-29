import { Component } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from './components/Navbar'
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="text-2xl w-full h-screen bg-[#0a192f]">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
