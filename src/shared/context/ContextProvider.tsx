import React, { createContext, useState } from "react";
import WeatherData from "../../modules/HomePage/components/Weather/WeatherData";

export const Context = createContext(null) as any;

export default function ContextProvider({ children }: any) {
  const [data, setData] = useState([]);

  return (
    <Context.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </Context.Provider>
  );
}
