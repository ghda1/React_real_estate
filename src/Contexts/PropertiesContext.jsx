import React, { createContext, useState } from "react";
import propertiesData from "../data";

export const PropertiesContext = createContext({});

export const PropertiesProvider = ({ children }) => {
  const [properties, setProperties] = useState(propertiesData);

  return (
    <PropertiesContext.Provider value={{ properties, setProperties }}>
      {children}
    </PropertiesContext.Provider>
  );
};
