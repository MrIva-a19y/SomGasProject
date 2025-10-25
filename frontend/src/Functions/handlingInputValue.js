export const handelTextChange = (index, field, value) => {
  const updatedRows = [...productionDate];

  // setting found list
  if (field === "unit") {
    const result = productionOptions.filter((ele) => ele.label.includes(value));
    const exactValue = productionOptions.find((item) => item.label === value);

    if (exactValue) {
      setFound([]);
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
