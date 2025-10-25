import React, { useEffect, useState } from "react";
import { currentDate } from "../Functions/findPage";
import { totalRowKg } from "../Functions/findPage";
import { productionOptions } from "../Functions/findPage";
import { useActionData, useLocation } from "react-router-dom";
import { handelTextChange } from "../Functions/handlingInputValue";

function ProductionForm() {
  const location = useLocation();
  const date = currentDate();
  const [row, setRow] = useState(0);
  const [found, setFound] = useState([]);
  const [textvalue, setTextValue] = useState("");
  const [totalKg, setTotalKg] = useState([]);
  const [errMessage, setErrMessage] = useState("");
  const [productionDate, setProductionDate] = useState([
    {
      unit: 0,
      quantity: 0,
      actual: 0,
      amount: 0,
      unitLabel: "",
    },
  ]);
  console.log("location", location.pathname.substring(7));
  const handleForm = (e) => {};

  const addRow = () =>
    setProductionDate([
      ...productionDate,
      {
        unit: 0,
        quantity: 0,
        actual: 0,
        amount: 0,
        unitLabel: String,
      },
    ]);
  return (
    <div className="container mx-auto p-4 bg-gray-100 dark:text-white dark:bg-gray-900 ml-2 rounded-2xl text-black rounded shadow">
      <div className="production-container">
        <div className="production-header">
          <h2 className="font-semibold">
            {location.pathname.substring(7).toUpperCase()} Form
          </h2>
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
            <div className="from-info flex justify-center  items-center w-[calc(_100%_/_2)]">
              <label className="font-semibold">From :</label>
              <input
                type="text"
                name="from"
                required={true}
                className="border w-[60%] border-black rounded p-1 font-mono ml-2"
                id="from"
              />
            </div>
            <div className="to-info flex items-center justify-center  w-[calc(_100%_/_2)]">
              <label className="font-semibold">To :</label>
              <input
                type="text"
                name="to"
                required={true}
                className="border w-[60%] border-black rounded p-1 font-mono ml-2"
                id="to"
                defaultValue={"Hodon Store"}
              />
            </div>
          </div>
        </div>
        <div className="production-body">
          <form action="submit w-full h-fit" onChange={(e) => handleForm(e)}>
            <table className="w-full border-collapse mt-4">
              <thead className="bg-gray-300 dark:bg-gray-800">
                <tr>
                  <th className="border border-black p-2">Unit</th>
                  <th className="border border-black p-2">Quantity</th>
                  <th className="border border-black p-2">Actaully</th>
                  <th className="border border-black p-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {productionDate?.map((row, index) => (
                  <tr key={index}>
                    <td className="border border-black p-2">
                      <input
                        type="search"
                        name={`productionOptions`}
                        list="productionOptions"
                        required={true}
                        className="w-full border dark:bg-gray-700 border-black rounded p-1 font-mono"
                        onChange={(e) =>
                          handelTextChange(index, "unit", e.target.value)
                        }
                      />
                      <datalist id="productionOptions">
                        {found.map((item, idx) => (
                          <option key={idx} value={item.label}>
                            {item.label}
                          </option>
                        ))}
                      </datalist>
                    </td>
                    <td className="border border-black p-2">
                      <input
                        type="number"
                        onChange={(e) =>
                          handelTextChange(index, "quantity", e.target.value)
                        }
                        name={`quantity-${row}`}
                        required={true}
                        className="w-full text-center border dark:bg-gray-700 border-black rounded p-1 font-mono"
                        min={0}
                      />
                    </td>
                    <td className="border border-black p-2">
                      <input
                        type="text"
                        name={`actual-${row}`}
                        min={0}
                        required={true}
                        className="w-full text-center border dark:bg-gray-700 border-black rounded p-1 font-mono"
                        onChange={(e) =>
                          handelTextChange(index, "actual", e.target.value)
                        }
                      />
                    </td>
                    <td className="border border-black p-2">
                      <input
                        type="text"
                        name={`Amount-${row}`}
                        value={
                          productionDate[index]["amount"]
                            ? productionDate[index]["amount"]
                            : 0
                        }
                        readOnly={true}
                        aria-readonly={true}
                        className="w-full text-center border dark:bg-gray-700 border-black rounded p-1 font-mono"
                      />
                    </td>
                    <td>
                      <button className="bg-red-500 text-white p-[8px] self-center rounded-xl">
                        Concel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
        </div>
        <span
          className="add-row text-green-400 flex self-start p-2 cursor-pointer w-fit dark:text-white dark:hover:bg-gray-700 dark:hover:text-green-950 m-2 hover:text-green-600 hover:bg-green-50"
          onClick={() => addRow()}
        >
          Add --
        </span>
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
