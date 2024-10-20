import React from "react";

import Property from "./Property";

const Properties = (props) => {
  const { properties, onHandleDeleteProperty, onHandleUpdateProperty } = props;

  return (
    <section>
      {properties.map((property) => {
        return (
          <Property
            onHandleDeleteProperty={onHandleDeleteProperty}
            onHandleUpdateProperty={onHandleUpdateProperty}
            property={property}
            key={property.id}
          />
        );
      })}
    </section>
  );
};
export default Properties;
