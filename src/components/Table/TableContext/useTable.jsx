import { useContext } from "react";
import { TableContext } from ".";

function useTable() {
  const context = useContext(TableContext);

  if (context === undefined)
    throw new Error('Using context outside of provide !');

  return context;
}

export { useTable };
