import React, { useState, useContext } from "react";

const CalculatorContext = React.createContext();

export function useTipCalculator() {
  return useContext(CalculatorContext);
}
export const types = {
  BILL: "bill",
  TIP: "tip",
  PEOPLE_NUM: "peopleNum",
};
export default function CalculatorProvider({ children }) {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [peopleNum, setPeopleNum] = useState(1);

  const updateValue = (type, value) => {
    value = Number(value);
    switch (type) {
      case types.BILL:
        setBill(value);
        break;
      case types.TIP:
        setTip(value);
        break;
      case types.PEOPLE_NUM:
        if (value !== 0) setPeopleNum(value);
        break;

      default:
        break;
    }
  };
  const reset = () => {
    setBill(0);
    setTip(0);
    setPeopleNum(1);
    const tipInput = document.getElementById("tipInput");
    const billInput = document.getElementById("billInput");
    const NumberInput = document.getElementById("NumberInput");
    tipInput.value = "";
    billInput.value = "";
    NumberInput.value = "";
  };
  const tipForPerson = Math.round((bill * tip) / 100 / peopleNum);
  const totalForPerson = Math.round(bill / peopleNum + tipForPerson);
  const value = {
    bill,
    tip,
    peopleNum,
    tipForPerson,
    totalForPerson,
    updateValue,
    reset,
  };
  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
}
