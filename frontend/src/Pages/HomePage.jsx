import React from "react";
import UpperBar from "../Componanets/UpperBar";
import Navigation from "../Componanets/Navigation";
import HomeContent from "../Componanets/HomeContent";

function HomePage() {
  return (
    <div className="homePageContent max-h-[-webkit-fill-available] h-screen dark:bg-[#030712] ml-2 p-4  overflow-y-auto md:order-2  md:min-h-0  bg-white  md:pb-[0px] text-3xl ">
      <HomeContent />
    </div>
  );
}

export default HomePage;
