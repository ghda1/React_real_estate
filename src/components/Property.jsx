import React from "react";
import Card from "./Card";

const Property = (props) => {
  const { property, onHandleDeleteProperty } = props;
  const { id, image, title, price, location } = property;

  const handleDeleteProperty = (id) => {
    onHandleDeleteProperty(id);
  };
  return (
    <Card>
      <article>
        <img src={image} alt={title} />
        <h2>Title: {title}</h2>
        <h3>Location: {location}</h3>
        <h3 id="price">Price: {price}</h3>
        <button onClick={() => handleDeleteProperty(id)}>Delete</button>
      </article>
    </Card>
  );
};

export default Property;
