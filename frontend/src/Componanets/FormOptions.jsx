import React from "react";
import { Link } from "react-router-dom";
function FormOptions() {
  return (
    <div className=" w-[80%] h-[80vh]">
      <div
        className="form-container p-5 md:min-h-0 h-[80%] md:h-fit
       border-2 min-w-[90%] dark:border-gray-500  border-black rounded-2xl  "
      >
        <h1 className="text-2xl font-light font-mono p-2 md:text-4xl md:font-serif">
          Form Options
        </h1>
        <div className="buttons w-full h-full flex flex-col justify-around p-2 [&>button]:cursor-pointer md:[&>a]:text-3xl md:[&>a]:m-7  [&>a]:hover:scale-105 [&>a]:transition-all [&>a]:duration-300 [&>a]:hover:font-bold">
          <Link
            to="/forms/production"
            className="bg-blue-600 m-1 p-3 text-white border-0 font-light rounded-2xl hover:bg-blue-400 hover:text-black"
          >
            New Production Form
          </Link>

          <a
            href="/forms/delevery"
            className="bg-amber-600 m-1 p-3 text-white border-0 font-light rounded-2xl hover:bg-amber-400 hover:text-black"
          >
            New Delevery Form
          </a>
        </div>
      </div>
    </div>
  );
}

export default FormOptions;
