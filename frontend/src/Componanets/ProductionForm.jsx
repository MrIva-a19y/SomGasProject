import React, { useEffect, useState } from "react";
import { currentDate } from "../Functions/findPage";
import { totalRowKg } from "../Functions/findPage";
import { productionOptions } from "../Functions/findPage";
import { useActionData } from "react-router-dom";

function ProductionForm() {
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

  const handleForm = () => {
    let total = 0;
    // const inputs = document.querySelectorAll('input[name^="unit-"]');
    // const index = inputs.length;
    // console.log("index", index);
    // setTotalKg(totalRowKg(index - 1));
    // console.log(totalKg);
  };

  const handelTextChange = (index, field, value) => {
    const updatedRows = [...productionDate];

    console.log("search-value", value);
    console.log("index-value", value);
    // setting found list
    if (field === "unit") {
      const result = productionOptions.filter((ele) =>
        ele.label.includes(value)
      );
      console.log("result", result);
      const exactValue = productionOptions.find((item) => item.label === value);

      if (exactValue) {
        updatedRows[index][field] = exactValue.label;
        updatedRows[index]["unitLabel"] = exactValue.value;
      } else {
      }
      setFound(result);
    }

    // Auto-calculate the amount for that row
    if (field === "actual") {
      const unitValue = updatedRows[index]["unitLabel"];
      if (value >= 0) {
        updatedRows[index]["actual"] = value;
        updatedRows[index]["amount"] = value * unitValue;
      }
    } else {
      if (field === "quantity") {
        const unitValue = updatedRows[index]["unitLabel"];

        if (unitValue) {
          updatedRows[index][field] = value;
          updatedRows[index]["amount"] = value * unitValue;
          setTotalKg((totalKg[index] = { T: value * unitValue }));
        }
      }
    }

    setProductionDate(updatedRows);
  };
  console.log(totalKg);

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
  console.log(productionDate);
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
                required
                className="border border-black rounded p-1 font-mono ml-2"
                id="from"
              />
            </div>
            <div className="to-info flex items-center justify-center  flex-1">
              <label className="font-semibold">To:</label>
              <input
                type="text"
                name="to"
                required
                className="border border-black rounded p-1 font-mono ml-2"
                id="to"
                defaultValue={"Hodon Store"}
              />
            </div>
          </div>
        </div>
        <div className="production-body">
          <form action="submit w-full h-fit" onChange={handleForm}>
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
                {productionDate?.map((row, index) => (
                  <tr key={index}>
                    <td className="border border-black p-2">
                      <input
                        type="search"
                        name={`productionOptions`}
                        list="productionOptions"
                        className="w-full border border-black rounded p-1 font-mono"
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
                        className="w-full text-center border border-black rounded p-1 font-mono"
                        min={0}
                      />
                    </td>
                    <td className="border border-black p-2">
                      <input
                        type="text"
                        name={`actual-${row}`}
                        min={0}
                        className="w-full text-center border border-black rounded p-1 font-mono"
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
                        defaultValue={0}
                        className="w-full text-center border border-black rounded p-1 font-mono"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
        </div>
        <span
          className="add-row text-green-400 flex self-start p-2 cursor-pointer hover:text-green-600 hover:bg-green-50"
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
