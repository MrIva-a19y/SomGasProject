export const productionOptions = [
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

export const currentDate = () => {
  const date = new Date();
  const ctDate = date.toLocaleDateString("en-CA"); // Format: YYYY-MM-DD
  return ctDate;
};

export const totalRowKg = (index) => {
  const unit = document.querySelector(`input[name="unit-${index}"]`).value;
  const quantity = document.querySelector(`input[name="quantity-${index}"]`);
  const actual = document.querySelector(`input[name="actual-${index}"]`);
  const amount = document.querySelector(`input[name="Amount-${index}"]`);

  const unitNum =
    productionOptions.filter((item) => item.label === unit)[0]?.value || 0;

  if (actual.value > 0) {
    return (amount.value = unitNum * Number(actual.value));
  }
  return (amount.value = unitNum * Number(quantity.value));
};
