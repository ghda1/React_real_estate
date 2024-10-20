import React, { useState } from "react";

import Properties from "./components/Properties";
import propertiesData from "./data";
import AddProperty from "./components/AddProperty";

const App = () => {
  const [allPropertiesData, setProperty] = useState(propertiesData);
  const handleAddProperty = (newProperty) => {
    setProperty((prevProperty) => {
      return [...prevProperty, newProperty];
    });
  };
  const handleDeleteProperty = (id) => {
    const filterProperties = allPropertiesData.filter(
      (property) => property.id !== id
    );
    setProperty(filterProperties);
  };
  return (
    <>
      <AddProperty onHandleAddProperty={handleAddProperty} />
      <h2>Properties: </h2>
      {propertiesData.length > 0 ? (
        <Properties
          properties={allPropertiesData}
          onHandleDeleteProperty={handleDeleteProperty}
        />
      ) : (
        <h2>There is no properties.</h2>
      )}
    </>
  );
};

export default App;
