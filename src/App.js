import { ToastContainer } from "react-toastify";
import AnimatedCursor from "react-animated-cursor";

import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import SideBar from "./components/SideBar/SideBar";
import Skill from "./pages/Skill/Skill";
import Experience from "./pages/Experience/Experience";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Home />
      <About />
      <Skill />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
      <ToastContainer />
      <AnimatedCursor
        innerSize={5}
        innerStyle={{ backgroundColor: "var(--white-color)" }}
        outerSize={50}
        outerStyle={{
          background: "transparent",
          border: "1px solid var(--white-color)",
        }}
        outerScale={0.5}
        innerScale={1.2}
        trailingSpeed={5}
      />
    </div>
  );
}

export default App;
