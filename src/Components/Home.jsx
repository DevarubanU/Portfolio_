import React from "react";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center px-5 py-28"
      >
        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I'm<span className="text-blue-500"> Devaruban U</span>
        </h1>
        <h2 className="text-2xl md:text-3xl mt-4 font-semibold">IT Fresher</h2>
        <p className="max-w-4xl mt-6 text-lg text-gray-500">
          Seeking an entry-level Software Developer, Front-End Developer, React
          Developer, or IT Associate role to contribute technical expertise and
          grow within a dynamic organization.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <a href="/Deva_Resume.pdf" download="Devaruban_Resume.pdf">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
              Download Resume
            </button>
          </a>

          <a
            href="https://linkedin.com/in/devaruban-u-bb775b365"
            target="_blank"
            rel="noreferrer"
          >
            <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg font-semibold">
              LinkedIn
            </button>
          </a>
        </div>
      </section>
      <About />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
