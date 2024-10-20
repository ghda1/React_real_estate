import React from "react";
import Card from "./Card";

const Property = (props) => {
  const { image, title, price, location } = props.property;
  return (
    <Card>
      <article>
        <img src={image} alt={title} />
        <h2>Title: {title}</h2>
        <h3>Location: {location}</h3>
        <h3 id="price">Price: {price}</h3>
        {/* <button>Delete</button> */}
      </article>
    </Card>
  );
};

export default Property;
