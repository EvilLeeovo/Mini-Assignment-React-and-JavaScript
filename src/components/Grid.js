import React, { useContext } from "react";
import Cell from "./Cell";
import { GridProvider, GridContext } from "./GridContext";
import "../styles/Ma.css";

const Grid = () => {
  return (
    <GridProvider>
      <div className="counter">Count: <Counter /></div>
      <div className="grid">
        <Cell /> <Cell />
        <Cell /> <Cell />
      </div>
    </GridProvider>
  );
};

const Counter = () => {
  const { onCells } = useContext(GridContext);
  return <span>{onCells}</span>;
};

export default Grid;
