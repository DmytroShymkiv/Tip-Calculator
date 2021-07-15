import React from "react";
import InputForm from "../InputForm/InputForm";
import ResultBoard from "../ResultBoard/ResultBoard";

import CalculatorProvider from "../CalculatorContext";

export default function Board() {
  return (
    <CalculatorProvider>
      <div className="board">
        <InputForm />
        <ResultBoard />
      </div>
    </CalculatorProvider>
  );
}
