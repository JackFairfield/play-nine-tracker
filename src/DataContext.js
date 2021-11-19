import React from "react";

const context = React.createContext();
const DataProvider = context.Provider;

function DataContext(props) {
  const value = {
    test: "test",
  };
  return <DataProvider value={value}>{props.children}</DataProvider>;
}

export { DataProvider, DataContext };
