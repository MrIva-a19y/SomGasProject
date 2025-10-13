import React from "react";
import UpperBar from "../Componanets/UpperBar";
import Navigation from "../Componanets/Navigation";
import HomeContent from "../Componanets/HomeContent";

function HomePage() {
  return (
    <div className="homePageContent min-h-screen  bg-white  pb-[68px] text-3xl ">
      <HomeContent />
    </div>
  );
}

export default HomePage;
