import React from "react";
import cooker from "../assets/cooker.png";
import ProductsInStorages from "../assets/ProductInStorage.png";
import cylinders from "../assets/cylinders.png";

function StoragePage() {
  return (
    <div>
      <div className="container max-w-screen flex p-2 flex-col items-center justify-center [&>div]:hover:cursor-pointer [&>div]:hover:scale-90  [&>div]:hover:shadow-lg  [&>div]:transition-all [&>div]:duration-300 [&>div]:ease-in-out">
        <div className="option mb-4 container bg-amber-100 rounded-2xl flex items-center p-3 justify-items-center">
          <img
            src={ProductsInStorages}
            alt="cooker"
            className="cooker-image size-30 mr-3"
          />
          <div className="description">
            <h2 className=" p-3 text-2xl font-semibold ">Products</h2>
            <p>
              View and manage all products currently in storage, including their
              quantities and details.
            </p>
          </div>
        </div>

        <div className="option container bg-amber-100 rounded-2xl flex items-center p-3 justify-items-center">
          <img
            src={cylinders}
            alt="cooker"
            className="cooker-image size-30 mr-3"
          />
          <div className="descriptions">
            <h2 className=" p-3 text-2xl font-semibold ">Cylinders</h2>
            <p>
              View and manage all gas cylinders in storage, including their
              status and details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoragePage;
