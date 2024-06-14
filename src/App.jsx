import "./App.css";
import Profile from "./assets/Picture1.png";
import l_icon from "./assets/linkedin_icon.png";
import d1 from "./assets/d1.png";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="px-7">
      <header>
        <div className="conatiner m-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">PORTFOLIO</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a
                    href="#project"
                    className="text-gray-200 hover:text-white cursor-pointer"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    className="text-gray-200 hover:text-white cursor-pointer"
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="#aboutme"
                    className="text-gray-200 hover:text-white cursor-pointer"
                  >
                    About Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container m-auto px-4 py-10 flex gap-9 justify-between">
            <div>
              <h2 className="font-bold text-4xl">Hello, I am Mahek,</h2>
              <h2 className="font-bold text-4xl mt-1 gradient-text">
                Software Engineer
              </h2>
              <p className="mt-4 text-gray-400 min-w-10">
                UI Developer with over 3.9 years of experience at TCS,
                specializing in React.js, Node.js, and MongoDB. Proven track
                record in developing interactive, compliant websites for the
                pharmaceutical industry, integrating CI/CD pipelines, and
                implementing robust authentication systems.<br></br>Former
                Software Engineer Intern at JP Morgan Chase & Co.
              </p>
              <button className="px-6 py-3 mt-5 border bg-blue-600 rounded-full hover:bg-blue-300">
                <a
                  href="https://drive.google.com/file/d/1386HZtARQ-Gz-3e0vDtdV6Rh_MjYRBbh/view?usp=sharing"
                  target="_blank"
                >
                  {" "}
                  View Resume
                </a>
              </button>
            </div>
            <div>
              <img src={Profile} width={220}></img>
            </div>
          </div>
        </section>
        <section>
          <div className="container m-auto px-4">
            <h2 className="text-3xl font-semibold" id="project">
              Projects
            </h2>
            <div className="flex gap-10 mt-11 flex-wrap">
              <div className="border border-gray-500 rounded-md p-5">
                <img className=" ml-7 mt-2" src={d1} width={220}></img>
                <h3 className="text-2xl font-semibold mt-8 text-center">
                  Mini CMS
                </h3>
                <p className="text-gray-400 text-sm mt-2 max-w-[300px] text-center">
                  Dynamic web app with user-friendly features like article
                  posting and commenting. Technologies Used: MERN stack,
                  Firebase, AWS{" "}
                </p>
                <div className="flex justify-evenly mt-14 gap-2">
                  <button className="px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-300">
                    Live Preview
                  </button>
                  <button className="px-6 py-3 border rounded-full hover:bg-blue-300">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5">
                <img className=" ml-7 mt-2" src={d1} width={220}></img>
                <h3 className="text-2xl font-semibold mt-6 text-center">
                  User Authentication system
                </h3>
                <p className="text-gray-400 text-sm mt-2 max-w-[300px] text-center">
                  A robust user authentication and authorization system,
                  incorporating email verification, password resets, OAuth
                  setup, diverse prebuilt options, and adherence to best
                  practices.<br></br>Technologies Used: MERN, JWT, OAuth{" "}
                </p>
                <div className="flex justify-evenly mt-6 gap-2">
                  <button className="px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-300">
                    Live Preview
                  </button>
                  <button className="px-6 py-3 border rounded-full hover:bg-blue-300">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5">
                <img className=" ml-7 mt-2" src={d1} width={220}></img>
                <h3 className="text-2xl font-semibold mt-9 text-center">
                  Portfolio (first)
                </h3>
                <p className="text-gray-400 text-sm mt-2 max-w-[300px] text-center">
                  A portfolio decribing about myself, my projects,
                  certifications, skills and a basic contact form to contact me
                  implemented in frontend.
                  <br></br>Technologies Used: HTML, CSS, JavaScript
                </p>
                <div className="flex justify-evenly mt-8 gap-2">
                  <button className="px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-300">
                    Live Preview
                  </button>
                  <button className="px-6 py-3 border rounded-full hover:bg-blue-300">
                    <a
                      href="https://github.com/mahekbhambhani11/mahekbhambhani11.github.io"
                      target="_blank"
                    >
                      {" "}
                      Checkout github
                    </a>
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5">
                <img className=" ml-7 mt-2" src={d1} width={220}></img>
                <h3 className="text-2xl font-semibold mt-8 text-center">
                  Weather app
                </h3>
                <p className="text-gray-400 text-sm mt-2 max-w-[300px] text-center">
                  A Weather App that dynamically fetches and displays real-time
                  weather data from the OpenWeatherMap API.<br></br>Technologies
                  Used: HTML, CSS, JavaScript{" "}
                </p>
                <div className="flex justify-evenly mt-8 gap-2">
                  <button className="px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-300">
                    Live Preview
                  </button>
                  <button className="px-6 py-3 border rounded-full hover:bg-blue-300">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5">
                <img className=" ml-7 mt-2" src={d1} width={220}></img>
                <h3 className="text-2xl font-semibold mt-8 text-center">
                  Text to voice converter
                </h3>
                <p className="text-gray-400 text-sm mt-2 mt-2 max-w-[300px] text-center">
                  Developed a Text to speech converter or Text to voice
                  generator app using HTML CSS and JavaScript.
                  <br></br>Technologies Used: HTML, CSS, JavaScript{" "}
                </p>
                <div className="flex justify-evenly mt-8 gap-2">
                  <button className="px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-300">
                    <a
                      href="https://mahekbhambhani11.github.io/Text-to-voice-converter/"
                      target="_blank"
                    >
                      {" "}
                      Live Preview
                    </a>
                  </button>
                  <button className="px-6 py-3 border rounded-full hover:bg-blue-300">
                    <a
                      href="https://github.com/mahekbhambhani11/Text-to-voice-converter"
                      target="_blank"
                    >
                      Checkout github
                    </a>
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5">
                <img className=" ml-7 mt-2" src={d1} width={220}></img>
                <h3 className="text-2xl font-semibold mt-8 text-center">
                  QR code generator
                </h3>
                <p className="text-gray-400 text-sm mt-2 mt-2 max-w-[300px] text-center">
                  Dveloped a QR Code Generator with QR Code Generator API. This
                  QR Code Generator can make QR Code of any Text or Link.
                  <br></br>Technologies Used: HTML, CSS, JavaScript
                </p>
                <div className="flex justify-evenly mt-8 gap-2">
                  <button className="px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-300">
                    <a
                      href="https://mahekbhambhani11.github.io/QR-code-generator/"
                      target="_blank"
                    >
                      Live Preview
                    </a>
                  </button>
                  <button className="px-6 py-3 border rounded-full hover:bg-blue-300">
                    <a
                      href="https://github.com/mahekbhambhani11/QR-code-generator"
                      target="_blank"
                    >
                      Checkout github
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-12">
          <div className="container m-auto px-4">
            <h2 className="text-3xl font-semibold" id="technologies">
              Technologies
            </h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-400">HTML</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[80%] h-2 mt-2 bg-blue-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-400">
                    CSS, SASS & Tailwind
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[75%] h-2 mt-2 bg-blue-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-400">
                    JavaScript
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[65%] h-2 mt-2 bg-blue-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-400">React</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[65%] h-2 mt-2 bg-blue-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-400">
                    Databases (SQL, MongoDB)
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[60%] h-2 mt-2 bg-blue-500 block rounded-md"></span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-3xl font-semibold mt-10">
              Additional technologies and skills
            </h2>
            <div className="flex justify-between">
              <div>
                <p className="text-gray-400 before:w-3 before:h-3 before:bg-blue-500 before:block before:mt-2 before:rounded-full before:mr-2 before:left-[-15px] before:absolute relative left-4">
                  Git
                </p>
              </div>
              <div>
                <p className=" text-gray-400 before:w-3 before:h-3 before:bg-blue-500 before:block before:mt-2 before:rounded-full before:mr-2 before:left-[-15px] before:absolute relative left-4">
                  {" "}
                  AEM
                </p>
              </div>
              <div>
                <p className="text-gray-400 before:w-3 before:h-3 before:bg-blue-500 before:block before:mt-2 before:rounded-full before:mr-2 before:left-[-15px] before:absolute relative left-4">
                  {" "}
                  JIRA
                </p>
              </div>
              <div>
                <p className="text-gray-400 before:w-3 before:h-3 before:bg-blue-500 before:block before:mt-2 before:rounded-full before:mr-2 before:left-[-15px] before:absolute relative left-4">
                  Teamwork
                </p>
              </div>
              <div>
                <p className="text-gray-400 before:w-3 before:h-3 before:bg-blue-500 before:block before:mt-2 before:rounded-full before:mr-2 before:left-[-15px] before:absolute relative left-4">
                  Leadership
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container m-auto px-4">
            <h2 className="text-3xl font-semibold" id="aboutme">
              About Me
            </h2>

            <div className="relative before:absolute before:top-0 before:left-[50px] before:bottom-0 before:bg-2 before:bg-white before:w-1 mt-12 left-9">
              <div className="ml-10 relative before:w-4 before:h-4 before:bg-blue-500 before:block before:rounded-full before:absolute before:left-[4px] before:top-[5px]">
                <h3 className="text-gray-400 absolute -left-20 text-lg font-semibold">
                  Oct, 2020
                </h3>
                <p className="text-gray-400 absolute left-[30px]">
                  Joined TCS as Software Engineer (Current job)
                </p>
              </div>
              <div className="ml-10 relative before:w-4 before:h-4 before:bg-blue-500 before:block before:rounded-full before:absolute before:left-[4px] before:top-[50px] pt-10 ">
                <h3 className="absolute -left-20 text-lg font-semibold text-gray-400">
                  May, 2020
                </h3>
                <p className=" absolute left-[30px] text-gray-400">
                  JP Morgan Chase & Co. (Software Engineer Intern)
                </p>
              </div>
              <div className="ml-10 relative before:w-4 before:h-4 before:bg-blue-500 before:block before:rounded-full before:absolute before:left-[4px] before:top-[50px] pt-10 ">
                <h3 className="absolute -left-20 text-lg font-semibold text-gray-400">
                  Sept, 2020
                </h3>
                <p className=" absolute left-[30px] text-gray-400">
                  Graduated from OIST, Bhopal
                </p>
              </div>
              <div className="ml-10 relative before:w-4 before:h-4 before:bg-blue-500 before:block before:rounded-full before:absolute before:left-[4px] before:top-[50px] pt-10 ">
                <h3 className="absolute -left-20 text-lg font-semibold text-gray-400">
                  Mar,2018
                </h3>
                <p className=" absolute left-[30px] text-gray-400">
                  Digital Marketing Intern, Bhopal (3mos)
                </p>
              </div>
              <div className="ml-10  pt-8 "></div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 pt-10 pb-5">
          <div>
            <p className="text-gray-300 text-sm">Developed by Mahek B</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/mahek-bhambhani-b4b52a13b/"
                  target="_blank"
                >
                  <img src={l_icon} className="w-6"></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
