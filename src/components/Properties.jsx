import React from "react";

import Property from "./Property";

const Properties = (props) => {
  const { properties } = props;

  return (
    <section>
      {properties.map((property) => {
        return <Property property={property} key={property.id} />;
      })}
    </section>
  );
};
export default Properties;
