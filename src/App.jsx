import React, { useState } from "react";

import Properties from "./components/Properties";
import propertiesData from "./data";
import AddProperty from "./components/AddProperty";

const App = () => {
  const [allPropertiesData, setNewProperty] = useState(propertiesData);
  const handleAddProperty = (newProperty) => {
    setNewProperty((prevProperty) => {
      return [...prevProperty, newProperty];
    });
  };
  return (
    <>
      <AddProperty onHandleAddProperty={handleAddProperty} />
      <h2>Properties: </h2>
      {propertiesData.length > 0 ? (
        <Properties properties={allPropertiesData} />
      ) : (
        <h2>There is no properties.</h2>
      )}
    </>
  );
};

export default App;
