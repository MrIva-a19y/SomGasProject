import React from "react";

function FormOptions() {
  return (
    <div className=" w-[80%] h-[80vh]">
      <div className="form-container p-5 h-[80%] border-2 min-w-[90%]  border-black rounded-2xl  ">
        <h1 className="text-2xl font-light font-mono p-2">Form Options</h1>
        <div className="buttons w-full h-full flex flex-col justify-around p-2 [&>button]:cursor-pointer [&>button]:hover:scale-105 [&>button]:transition-all [&>button]:duration-300 [&>button]:hover:font-bold">
          <button className="bg-blue-600 m-1 p-3 text-white border-0 font-light rounded-2xl hover:bg-blue-400 hover:text-black">
            New Production Form
          </button>
          <button className="bg-red-600 m-1 p-3 text-white border-0 font-light rounded-2xl hover:bg-red-400 hover:text-black">
            New Seles Form
          </button>
          <button className="bg-amber-600 m-1 p-3 text-white border-0 font-light rounded-2xl hover:bg-amber-400 hover:text-black">
            New Delevery Form
          </button>
          <button className="bg-cyan-600 m-1 p-3 text-white border-0 font-light rounded-2xl hover:bg-cyan-400 hover:text-black">
            New Storage Form
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormOptions;
