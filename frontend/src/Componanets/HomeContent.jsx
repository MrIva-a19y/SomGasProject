import React from "react";
import { HomeProductionLayout, HomeSelesLayput } from "./HomePageFormsLayouts";

function HomeContent() {
  return (
    <div className="max-w-screen [&>*]:hover:scale-[90%] [&>*]:hover:transition-all [&>*]:hover:duration-200 [&>*]:hover:ease-in-out [&>*]:cursor-pointer ">
      <HomeProductionLayout />
      <HomeSelesLayput />
      <HomeProductionLayout />
      <HomeProductionLayout />
      <HomeProductionLayout />
      <HomeProductionLayout />
    </div>
  );
}

export default HomeContent;
