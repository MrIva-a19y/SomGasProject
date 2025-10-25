import React from "react";
import home from "../assets/home.png";
import waiting from "../assets/waiting.png";
import add from "../assets/add.png";
import storage from "../assets/storage.png";
import avatar from "../assets/user.png";
import output from "../assets/output.png";
import outputHome from "../assets/outputHome.png";
import { Link, useLocation } from "react-router-dom";
import whiteIncomplateIcon from "../assets/whiteIncomplateIcon.png";
import whiteStorageIcon from "../assets/whiteStorageIcon.png";
import whiteUserIcon from "../assets/whiteUserIcon.png";

function Navigation() {
  const iconSize = "w-10";
  const currentPage = () => {
    let url = useLocation();
    return url.pathname;
  };
  return (
    <div
      className=" dark:bg-gray-900 fixed bottom-0 left-0 dark:text-white flex flex-row md:flex-col md:right-auto  md:left-0 md:w-[10vw] md:min-w-0 md:h-screen   [&>div]:cursor-pointer [&>div]:flex-1  top-auto  min-w-screen bg-white [&>div]:h-[-webkit-fill-available]  [&>div]:flex z-50 [&>div]:justify-center md:z-5 md:top-[50px] md:max-h-[90dvh] 
    md:[&>*]:max-h-[100px]
      
    md:flex md:[&>*]:min-w-[100%] md:justify-start md:rounded-2xl
    md:pt-1
    md:static
    [&>div]:hover:bg-green-200 md:[&>div]:hover:bg-gray-600 md:[&>div]:hover:rounded-2xl md:items-center "
    >
      <div>
        <Link
          to="/"
          className={`w-[-webkit-fill-available] min-w-full min-h-full  h-[-webkit-fill-available] flex justify-around items-center home ${
            currentPage() === "/"
              ? "bg-green-400 rounded-2xl dark:bg-blue-950 md:scale-[110%]"
              : ""
          }`}
        >
          <div>
            <img
              src={currentPage() === "/" ? outputHome : home}
              alt="home icon"
              className={`${iconSize}`}
            />
          </div>
        </Link>
      </div>
      <div>
        <Link
          to="/incomplete"
          className={`waiting w-[-webkit-fill-available] min-w-full min-h-full h-[-webkit-fill-available] flex justify-around items-center ${
            currentPage() === "/incomplete"
              ? "bg-green-400   dark:bg-blue-950 md:scale-[110%] md:rounded-2xl"
              : ""
          }`}
        >
          <div>
            <img
              src={
                currentPage() === "/incomplete" ? whiteIncomplateIcon : waiting
              }
              alt="waiting icon"
              className={`${iconSize}`}
            />
          </div>
        </Link>
      </div>
      <div className={`add  m-0 `}>
        <div
          className={`p-3 bg-green-400 md:bg-green-50 dark:bg-transparent rounded-full mt-1 md:rounded-xl ${
            currentPage() === "/forms"
              ? "md:bg-green-400  dark:bg-blue-950 md:scale-[110%] md:rounded-2xl"
              : ""
          }`}
        >
          <Link
            to="/forms"
            className={`flex justify-around items-center min-w-full min-h-full w-[-webkit-fill-available] h-[-webkit-fill-available] `}
          >
            <img
              src={currentPage() === "/forms" || "/forms/" ? output : add}
              alt="add icon"
              className={`${iconSize} scale-150 md:scale-100`}
            />
          </Link>
        </div>
      </div>
      <div>
        <Link
          to="/storage"
          className={`storage flex w-[-webkit-fill-available] min-w-full min-h-full h-[-webkit-fill-available] justify-around items-center ${
            currentPage() === "/storage"
              ? "bg-green-400  dark:bg-blue-950 md:scale-[110%] md:rounded-2xl"
              : ""
          }`}
        >
          <img
            src={currentPage() === "/storage" ? whiteStorageIcon : storage}
            alt="storage icon"
            className={`${iconSize}`}
          />
        </Link>
      </div>
      <div>
        <Link
          to="/profile"
          className={`user flex w-[-webkit-fill-available] min-w-full min-h-full h-[-webkit-fill-available] justify-around items-center ${
            currentPage() === "/profile"
              ? "bg-green-400  dark:bg-blue-950 md:scale-[110%] md:rounded-2xl"
              : ""
          }`}
        >
          <img
            src={currentPage() === "/profile" ? whiteUserIcon : avatar}
            alt="avatar icon"
            className={`${iconSize}`}
          />
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
