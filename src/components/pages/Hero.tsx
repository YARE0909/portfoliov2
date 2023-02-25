import React from "react";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";

const Hero = () => {
  return (
    <div>
      <div className="w-full h-screen bg-[#282c34] overflow-auto overflow-x-hidden pt-40 p-4">
        <About />
        {/* <Skills />
        <Contact /> */}
      </div>
    </div>
  );
};

export default Hero;
