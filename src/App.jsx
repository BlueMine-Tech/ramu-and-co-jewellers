import React from "react";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";  // Changed here
import Footer from "./components/Footer.jsx";
import SilverPage from "./pages/SilverPage.jsx";
import GoldPage from "./pages/GoldPage.jsx";
import CustomizePage from "./pages/CustomizePage.jsx";
import About from "./pages/About.jsx";
import ContactPage from "./pages/Contact.jsx";
import AwardsPage from "./pages/Awards.jsx";
import CollectionsPage from "./pages/Our collections.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/silver' element={<SilverPage/>}/>
        <Route path='/gold' element={<GoldPage/>}/>
        <Route path='/customized' element={<CustomizePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/awards' element={<AwardsPage/>}/>
        <Route path='/collections' element={<CollectionsPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
