import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {} from "lucide-react";
import "./App.css";
import Header from "./header";
import Footer from "./Footer";
import BoutiquePage from "./Boutique";
import DashboardPage from "./Dasboard";

function App() {
  const [infoPlus, setInfoPlus] = useState(false);

  return (
    <>

    <Router>
      <Header />
      

      <Routes>
        <Route path="/" element={<DashboardPage/>} />
        <Route path="/Notre-Boutique" element={<BoutiquePage />}/>
      </Routes>


      <Footer />
    </Router>
    </>
  );
}

export default App;
