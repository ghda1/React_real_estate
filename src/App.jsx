import React, { useState } from "react";

import Properties from "./components/Properties";
import propertiesData from "./data";
import AddProperty from "./components/AddProperty";
import UpdateProperty from "./components/UpdateProperty";

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

  const [updatePropertyData, setUpdatePropertyData] = useState(null);

  const handleUpdateProperty = (updatePropertyData) => {
    setUpdatePropertyData(updatePropertyData);
  };
  const handleUpdateDataProperty = (updateObject) => {
    console.log("handleUpdateDataProperty in app ", updateObject);
    const findProperty = allPropertiesData.find(
      (property) => property.id === updateObject.id
    );
    // if (findProperty) {
    //   findProperty.image = updatePropertyData.image;
    //   findProperty.location = updatePropertyData.location;
    //   findProperty.price = updatePropertyData.price;
    //   findProperty.title = updatePropertyData.title;
    // }

    // setProperty((prevProperty) => {
    //   return [...prevProperty, findProperty];
    // });

    if (findProperty) {
      updatePropertyData.image = updateObject.image;
      updatePropertyData.location = updateObject.location;
      updatePropertyData.price = updateObject.price;
      updatePropertyData.title = updateObject.title;
    }
  };

  return (
    <>
      <AddProperty onHandleAddProperty={handleAddProperty} />
      {updatePropertyData && (
        <UpdateProperty
          updateProperty={updatePropertyData}
          setUpdatePropertyData={setUpdatePropertyData}
          onHandleUpdatePropertyData={handleUpdateDataProperty}
        />
      )}
      <h2>Properties: </h2>
      {propertiesData.length > 0 ? (
        <Properties
          properties={allPropertiesData}
          onHandleDeleteProperty={handleDeleteProperty}
          onHandleUpdateProperty={handleUpdateProperty}
        />
      ) : (
        <h2>There is no properties.</h2>
      )}
    </>
  );
};

export default App;
