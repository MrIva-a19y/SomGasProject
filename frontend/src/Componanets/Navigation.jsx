import React from "react";
import home from "../assets/home.png";
import waiting from "../assets/waiting.png";
import add from "../assets/add.png";
import storage from "../assets/storage.png";
import avatar from "../assets/user.png";
import output from "../assets/output.png";
import outputHome from "../assets/outputHome.png";
import { Link, useLocation } from "react-router-dom";
import { findWhichPage } from "../Functions/findPage";

function Navigation() {
  const iconSize = "w-10";
  const currentPage = () => {
    let url = useLocation();
    return url.pathname;
  };
  return (
    <div className="container flex flex-row items-center  fixed bottom-0 left-0 [&>div]:cursor-pointer [&>div]:flex-1  top-auto  min-w-screen bg-white [&>div]:h-[-webkit-fill-available] [&>div]:flex  [&>div]:justify-center [&>div]:items-center   [&>div]:hover:bg-green-200 ">
      <div className={`home ${currentPage() === "/" ? "bg-green-400" : ""}`}>
        <Link to="/">
          <img
            src={currentPage() === "/" ? outputHome : home}
            alt="home icon"
            className={`${iconSize}`}
          />
        </Link>
      </div>
      <div
        className={`waiting ${
          currentPage() === "/incomplete" ? "bg-green-400" : ""
        }`}
      >
        <Link to="/incomplete">
          <img src={waiting} alt="waiting icon" className={`${iconSize}`} />
        </Link>
      </div>
      <div className={`add  m-0 `}>
        <div className="p-3 bg-green-400 rounded-full mt-1">
          <Link to="/add">
            <img
              src={currentPage() === "/add" ? add : output}
              alt="add icon"
              className={`${iconSize} scale-150`}
            />
          </Link>
        </div>
      </div>
      <div
        className={`storage ${
          currentPage() === "/storage" ? "bg-green-400" : ""
        }`}
      >
        <Link to="/storage">
          <img src={storage} alt="storage icon" className={`${iconSize}`} />
        </Link>
      </div>
      <div
        className={`user ${currentPage() === "/profile" ? "bg-green-400" : ""}`}
      >
        <Link to="/profile">
          <img src={avatar} alt="avatar icon" className={`${iconSize}`} />
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
