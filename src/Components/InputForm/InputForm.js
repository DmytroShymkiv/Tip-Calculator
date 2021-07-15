import React, { useRef } from "react";
import { useTipCalculator, types } from "../CalculatorContext";
import dollarIcon from "../../images/icon-dollar.svg";
import personIcon from "../../images/icon-person.svg";

export default function InputForm() {

  const { updateValue, tip } = useTipCalculator();
  const inputRef = useRef("");

  const handleTipClick = (e) => {
    const tip = Number(e.currentTarget.innerText.slice(0, -1));
    updateValue(types.TIP, tip);
    inputRef.current.value = "";
  };
  
  return (
    <div className="input-form">
      <div>
        <label>
          Bill
        </label>
        <div className="input-wrapper">
          <img src={dollarIcon} alt="dollar"/>
          <input
            type="number"
            id="billInput"
            onChange={(e) => updateValue(types.BILL, e.target.value)}
            className="input"
            name="bill"
            placeholder="0"
          />
        </div>
      </div>
      <div>
        <label>Select Tip %</label>
        <div className="tip-select-section">
          {[5, 10, 15, 25, 50].map((e) => (
            <div
              key={e}
              style={{ background: e === tip && "hsl(172, 67%, 45%)" }}
              onClick={handleTipClick}
            >
              {e}%
            </div>
          ))}
          <input
            type="number"
            id="tipInput"
            ref={inputRef}
            onChange={(e) => {
              updateValue(types.TIP, e.target.value);
            }}
            placeholder="Custom"
            className="custom-tip-btn"
          />
        </div>
      </div>
      <div>
        <label>Number of People</label>
        <div className="input-wrapper">
          <img src={personIcon} alt="person"/>
          <input
            type="number"
            id="NumberInput"
            onChange={(e) => updateValue(types.PEOPLE_NUM, e.target.value)}
            className="input"
            name="people"
            placeholder="0"
          />
        </div>
      </div>
    </div>
  );
}
