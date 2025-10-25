import React from "react";
import logo from "../assets/image.png";

function UpperBar() {
  return (
    <div className="flex min-w-screen md:w-[80%] md:m-auto dark:text-white dark:bg-gray-950 justify-between z-10 p-1.5 pr-2  bg-amber-50 items-center fixed left-0 top-0">
      <div className="app_logo cursor-pointer">
        <img src={logo} className="h-[44px]" alt="somgas logo" />
      </div>
      <div className="welcome-message dark:text-white text-gray-600">
        <span>Welcome Back Yahya..</span>
      </div>
    </div>
  );
}

export default UpperBar;
