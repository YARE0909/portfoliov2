import "./App.css";
import Hero from "./components/pages/Hero";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";
import Navbar from "./components/pageComponents/Navbar";

function App() {
  return (
    <div className="w-full h-fit bg-blue-400">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
