import React from "react"; 

import Brands from "./components/brands/Brands";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Join from "./components/join/Join";
import Navbar from "./components/navbar/Navbar";
import Newcomer from "./components/newcomer/Newcomer";
import Popular from "./components/popular/Popular";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <div> 
     <div className="container"> 
     
     {/* NAVBAR */}
     <Navbar/>
    
      {/* HEADER */}
     <Header/> 

      {/* POPULAR */}
      <Popular/>

      {/* BRANDS */}
      <Brands/>

      {/* NEWCOMER*/}
      <Newcomer/>

      {/* SLIDER */}
      <Slider/>

      {/* JOIN */}
      <Join/>
      
      </div>

      {/* FOOTER */}
      <Footer/>

    </div>
  );
}

export default App;
