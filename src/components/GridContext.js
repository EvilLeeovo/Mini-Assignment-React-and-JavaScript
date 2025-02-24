import { createContext, useState } from "react";

export const GridContext = createContext();

export const GridProvider = ({ children }) => {
  const [onCells, setOnCells] = useState(0);
  return (
    <GridContext.Provider value={{ onCells, setOnCells }}>
      {children}
    </GridContext.Provider>
  );
};
