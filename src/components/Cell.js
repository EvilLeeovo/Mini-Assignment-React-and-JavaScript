import React, { useState, useContext } from "react";
import { GridContext } from "./GridContext";
import "../styles/Ma.css";

const Cell = () => {
  const { onCells, setOnCells } = useContext(GridContext);
  const [isOn, setIsOn] = useState(false);

  const toggleCell = () => {
    setIsOn(!isOn);
    setOnCells(prev => (isOn ? prev - 1 : prev + 1));
  };

  return (
    <div 
      className="cell"
      style={{ backgroundColor: isOn ? "black" : "white" }}
      onClick={toggleCell}
    />
  );
};

export default Cell;
