import React, { useState } from "react";
import { currentDate } from "../Functions/findPage";

function ProductionForm() {
  const date = currentDate();
  const [row, setRow] = useState(1);
  const [found, setFound] = useState([]);
  const [textvalue, setTextValue] = useState("");

  const productionOptions = [
    { label: "13kg", value: 13 },
    { label: "13kg Pl", value: 13 },
    { label: "20kg", value: 20 },
    { label: "20kg Pl", value: 20 },
    { label: "50kg", value: 50 },
    { label: "25kg", value: 25 },
    { label: "6kg", value: 6 },
    { label: "17kg", value: 17 },
    { label: "17kg Pl", value: 17 },
    { label: "40kg", value: 40 },
    { label: "3kg", value: 3 },
  ];
  const handelTextChange = (e) => {
    const inputValue = e.target.value;
    const resulte = productionOptions.filter((option) =>
      option.label.includes(inputValue)
    );
    setFound(resulte);
    if (inputValue === "") {
      setFound([]);
    }
  };
  console.log(textvalue);
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
          <div className="disterbution-info max-w-full flex w-full justify-around items-center ">
            <div className="from-info flex justify-center  items-center flex-1">
              <label className="font-semibold">From:</label>
              <input
                type="text"
                name="from"
                className="border border-black rounded p-1 font-mono ml-2"
                id="from"
              />
            </div>
            <div className="to-info flex items-center justify-center  flex-1">
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
            <thead className="bg-gray-300">
              <tr>
                <th className="border border-black p-2">Unit</th>
                <th className="border border-black p-2">Quantity</th>
                <th className="border border-black p-2">Actaully</th>
                <th className="border border-black p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(row)].map((_, index) => (
                <tr key={index}>
                  <td className="border border-black p-2">
                    <input
                      type="text"
                      onChange={handelTextChange}
                      value={textvalue.label}
                      name={`item-${index}`}
                      className="w-full border border-black rounded p-1 font-mono"
                    />
                    <span className="absolute flex flex-col w-fit h-fit z-1">
                      {found.map((item, idx) => (
                        <div
                          onClick={() => {
                            setTextValue(item);
                            setFound([]);
                          }}
                          key={idx}
                          className="bg-white border border-gray-300 min-w-7 p-3 min-h-fit cursor-pointer hover:bg-gray-200"
                        >
                          {item.label}
                        </div>
                      ))}
                    </span>
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
                      // value={()=> }
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
