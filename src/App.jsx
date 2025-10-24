import "./App.css";
import Balatro from "./components/Balatro";
import LogoLoop from "./components/LogoLoop";
import {
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiFlutter,
  SiExpress,
  SiGithub,
} from "react-icons/si";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";

export const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
  { node: <SiFlutter />, title: "Flutter", href: "https://www.flutter.dev" },
  { node: <SiGithub />, title: "Github", href: "https://github.com" },
];

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Balatro isRotate={false} mouseInteraction={true} pixelFilter={700} />
      </div>

      <Navbar />
      <Home />
      <div className="h-auto w-lvw relative overflow-hidden my-5 text-white">
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={40}
          gap={40}
          pauseOnHover
          scaleOnHover
          ariaLabel="Technology partners"
        />
      </div>
      <Projects />
      <AboutMe />
      <Contact />

      <footer className="w-full flex justify-center items-center px-3 py-5 mt-8 border-t border-white/10 bg-white/5 backdrop-blur-md">
        <span className="text-[10px] sm:text-xs md:text-sm text-center bg-gradient-to-tl from-red-500 to-orange-300 bg-clip-text text-transparent leading-relaxed">
          © 2025 <strong>Mark Joseph Abaño</strong>. Built with{" "}
          <strong>React</strong> & <strong>Tailwind CSS</strong>.
        </span>
      </footer>
    </div>
  );
}

export default App;
