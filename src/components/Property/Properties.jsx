import PropTypes from "prop-types";

import Property from "./Property";


const Properties = (props) => {
  const { properties, onHandleDeleteProperty, onHandleUpdateProperty } = props;

  return (
    <>
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
    </>
  );
};

Properties.propTypes = {
  properties: PropTypes.object,
  onHandleDeleteProperty: PropTypes.func,
  onHandleUpdateProperty: PropTypes.func,
};

export default Properties;
