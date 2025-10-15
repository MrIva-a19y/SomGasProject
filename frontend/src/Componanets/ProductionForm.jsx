import React from "react";
import { currentDate } from "../Functions/findPage";

function ProductionForm() {
  const date = currentDate();
  console.log(date);
  return (
    <div className="container mx-auto p-4 bg-gray-100 text-black rounded shadow">
      <div className="production-container">
        <div className="production-header">
          <h2 className="font-semibold">Production Form</h2>
          <div className="date flex justify-between items-center p-4">
            <div>
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" defaultValue={date} name="date" />
            </div>
            <div className="current-branch-info">
              <p>Branch: Hodan Store</p>
            </div>
          </div>
          <div className="disterbution-info max-w-full flex w-full justify-between items-center ">
            <div className="from-info flex items-center mr-2 flex-1">
              <label className="font-semibold">From:</label>
              <input
                type="text"
                name="from"
                className="border border-black rounded p-1 font-mono ml-2"
                id="from"
              />
            </div>
            <div className="to-info flex items-center  flex-1">
              <label className="font-semibold">To:</label>
              <input
                type="text"
                name="to"
                className="border border-black rounded p-1 font-mono ml-2"
                id="to"
                defaultValue={"Hodon Store"}
              />
            </div>
          </div>
        </div>
        <div className="production-body">
          <table className="w-full border-collapse mt-4">
            <thead>
              <tr>
                <th className="border border-black p-2">Item</th>
                <th className="border border-black p-2">Quantity</th>
                <th className="border border-black p-2">Unit</th>
                <th className="border border-black p-2">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(10)].map((_, index) => (
                <tr key={index}>
                  <td className="border border-black p-2">
                    <input
                      type="text"
                      name={`item-${index}`}
                      className="w-full border border-black rounded p-1 font-mono"
                    />
                  </td>
                  <td className="border border-black p-2">
                    <input
                      type="number"
                      name={`quantity-${index}`}
                      className="w-full border border-black rounded p-1 font-mono"
                      min="0"
                    />
                  </td>
                  <td className="border border-black p-2">
                    <input
                      type="text"
                      name={`unit-${index}`}
                      className="w-full border border-black rounded p-1 font-mono"
                    />
                  </td>
                  <td className="border border-black p-2">
                    <input
                      type="text"
                      name={`remarks-${index}`}
                      className="w-full border border-black rounded p-1 font-mono"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="production-footer mt-4 flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductionForm;
