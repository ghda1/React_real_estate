import PropTypes from "prop-types";

import Property from "./Property";
import { useContext } from "react";
import { PropertiesContext } from "../../Contexts/PropertiesContext";

const Properties = () => {
  const { properties } = useContext(PropertiesContext);

  if (properties.length == 0) {
    return <h2>There is no properties</h2>;
  }

  return (
    <>
      <section>
        {properties.map((property) => {
          return (
            <Property
              property={property}
              key={property.id}
            />
          );
        })}
      </section>
    </>
  );
};

Properties.propTypes = {
  properties: PropTypes.array,
};

export default Properties;
