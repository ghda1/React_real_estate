import { createContext, useState } from "react";
import PropTypes from "prop-types";

import propertiesData from "../data";

export const PropertiesContext = createContext();

export const PropertiesProvider = ({ children }) => {
  const [properties, setProperties] = useState(propertiesData);

  return (
    <PropertiesContext.Provider value={{ properties, setProperties }}>
      {children}
    </PropertiesContext.Provider>
  );
};

PropertiesProvider.propTypes = {
  children: PropTypes.node,
};
