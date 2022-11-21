import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollBar from "./components/ScrollBar";
import { RemoveScrollBar } from "react-remove-scroll-bar";

export default function Home() {
  return (
    <div>
      <RemoveScrollBar />
      <ScrollBar />
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}