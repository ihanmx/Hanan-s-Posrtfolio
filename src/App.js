import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/About/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>
      <Home />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Qualification />
      <Contact />
      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
