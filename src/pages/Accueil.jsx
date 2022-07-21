import Home from "../components/Home";
import About from "../components/About";
import { ScrollContainer } from "react-scroll-motion";
import Contact from "../components/Contact";
import "../assets/styles/App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Accueil = () => {
  return (
    <>
      <Header />
      <ScrollContainer>
        <Home />
        <About />
        <Contact />
      </ScrollContainer>
      <Footer />
    </>
  );
};

export default Accueil;
