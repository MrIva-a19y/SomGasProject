import React from "react";
import { HomeProductionLayout, HomeSelesLayput } from "./HomePageFormsLayouts";

function HomeContent() {
  return (
    <div className="max-w-screen max-h-[100%]    md:max-h-full md:[&>*]:m-0 md:grid md:gap-4 [&>*]:hover:scale-[95%] [&>*]:hover:transition-all [&>*]:hover:duration-200 [&>*]:hover:ease-in-out [&>*]:cursor-pointer  max-sm:[&>div]:pb-2">
      <HomeProductionLayout />
      <HomeSelesLayput />
      <HomeSelesLayput />
      <HomeSelesLayput />
      <HomeSelesLayput />
      <HomeProductionLayout />
      <HomeProductionLayout />
      <HomeProductionLayout />
      <HomeProductionLayout />
      <HomeSelesLayput />
      <HomeSelesLayput />
      <HomeSelesLayput />
      <HomeSelesLayput />
      <HomeSelesLayput />
      <HomeSelesLayput />
    </div>
  );
}

export default HomeContent;
