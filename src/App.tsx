import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {} from "lucide-react";
import "./App.css";
import ProductCarousel from "./carousel";
import Header from "./header";
import HeroZone1 from "./HeroZone_one";
import Discover from "./Discover";
import PersonnalisationContent_rigth from "./Personnalisation_right";
import NewCollectionContent from "./NewCollection";
import Personnalisation_left from "./Personnalisation_left";
import Footer from "./Footer";

function App() {
  const [infoPlus, setInfoPlus] = useState(false);

  return (
    <>

    <Router>
      <Header />
      <HeroZone1 />


      <Discover />
      <PersonnalisationContent_rigth />
      <HeroZone1 />
      <NewCollectionContent />
      <Personnalisation_left />


      <Footer />
    </Router>
    </>
  );
}

export default App;
