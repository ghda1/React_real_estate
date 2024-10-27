import { createContext, useState } from "react";
import PropTypes from "prop-types";

import propertiesData from "../Data/propertiesData";
import usersData from "../Data/usersData";

export const PropertiesContext = createContext();

export const PropertiesProvider = ({ children }) => {
  const [properties, setProperties] = useState(propertiesData);
  const [users, setUsers] = useState(usersData);

  return (
    <PropertiesContext.Provider
      value={{ properties, setProperties, users, setUsers }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

PropertiesProvider.propTypes = {
  children: PropTypes.node,
};
