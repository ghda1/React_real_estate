import { useState } from "react";

import Properties from "../components/Property/Properties";
import AddProperty from "../pages/AddProperty";
import UpdateProperty from "../pages/UpdateProperty";
import propertiesData from "../data";

function Home() {
  const [properties, setProperties] = useState(propertiesData);
  const [updatePropertyData, setUpdatePropertyData] = useState(null);

  const handleAddProperty = (newProperty) => {
    setProperties((prevProperty) => {
      return [...prevProperty, newProperty];
    });
  };

  const handleDeleteProperty = (id) => {
    const filterProperties = properties.filter(
      (property) => property.id !== id
    );
    setProperties(filterProperties);
  };

  const handleUpdateProperty = (updatePropertyData) => {
    setUpdatePropertyData(updatePropertyData);
  };

  const handleUpdateDataProperty = (updateObject) => {
    const updatedProperty = properties.map((property) => {
      if (property.id === updateObject.id) {
        return {
          ...property,
          image: updateObject.image,
          location: updateObject.location,
          price: updateObject.price,
          title: updateObject.title,
        };
      }
      return property;
    });
    setProperties(updatedProperty);
  };
  return (
    <div>
      <AddProperty onHandleAddProperty={handleAddProperty} />
      {updatePropertyData && (
        <UpdateProperty
          updateProperty={updatePropertyData}
          setUpdatePropertyData={setUpdatePropertyData}
          onHandleUpdatePropertyData={handleUpdateDataProperty}
        />
      )}

      {properties.length > 0 ? (
        <Properties
          properties={properties}
          onHandleDeleteProperty={handleDeleteProperty}
          onHandleUpdateProperty={handleUpdateProperty}
        />
      ) : (
        <h2>There is no properties.</h2>
      )}
    </div>
  );
}

export default Home;
