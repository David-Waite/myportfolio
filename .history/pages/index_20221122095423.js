import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollBar from "./components/ScrollBar";

export default function Home(illustrations) {
  console.log(illustrations);
  return (
    <div>
      <ScrollBar />
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
