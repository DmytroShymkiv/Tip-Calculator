import React from "react";
import { useTipCalculator } from "../CalculatorContext";

export default function ResultBoard() {
  const { tipForPerson, totalForPerson, reset } = useTipCalculator();

  return (
    <div className="result-board">
      <div className="result-value">
        <div>
          <h2>Tip Amount</h2>
          <p>/person</p>
        </div>
        <div className="result-amount">${tipForPerson}</div>
      </div>
      <div className="result-value">
        <div>
          <h2>Total</h2>
          <p>/person</p>
        </div>
        <div className="result-amount">${totalForPerson}</div>
      </div>
      <button onClick={reset}>RESET</button>
    </div>
  );
}
