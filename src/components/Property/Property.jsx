import Card from "../Card";
import PropTypes from "prop-types";

const Property = (props) => {
  const { property, onHandleDeleteProperty, onHandleUpdateProperty } = props;
  const { id, image, title, price, location } = property;

  const handleDeleteProperty = (id) => {
    onHandleDeleteProperty(id);
  };
  const handleUpdateProperty = (updateProperty) => {
    onHandleUpdateProperty(updateProperty);
  };
  
  return (
    <Card>
      <article>
        <img src={image} alt={title} />
        <h2>Title: {title}</h2>
        <h3>Location: {location}</h3>
        <h3 id="price">Price: {price}</h3>
        <button
          className="details-btn"
        >
          Show Details
        </button>
        <button className="delete-btn" onClick={() => handleDeleteProperty(id)}>
          Delete
        </button>
        <button
          className="update-btn"
          onClick={() => handleUpdateProperty(property)}
        >
          Update
        </button>
      </article>
    </Card>
  );
};

Property.propTypes = {
  property: PropTypes.object,
  onHandleDeleteProperty: PropTypes.func,
  onHandleUpdateProperty: PropTypes.func,
};

export default Property;
