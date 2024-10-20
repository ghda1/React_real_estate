import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";
const AddProperty = (props) => {
  const { onHandleAddProperty } = props;
  const [property, setProperty] = useState({
    title: "",
    price: 0,
    image: "",
    location: "",
  });

  const handleChange = (event) => {
    setProperty((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const newProperty = {
      id: uuidv4(),
      image: property.image,
      title: property.title,
      location: property.location,
      price: property.price,
    };
    onHandleAddProperty(newProperty);
    restValues();
  };

  const restValues = () => {
    setProperty({
      title: "",
      price: 0,
      image: "",
      location: "",
    });
  };
  return (
    <>
      <h2>Add New Property: </h2>
      <form className="addPropert-form" onSubmit={submitHandler}>
        <div id="image-input">
          <label htmlFor="image">
            Image:
            <input
              type="text"
              name="image"
              id="image"
              onChange={handleChange}
              value={property.image}
              required
            ></input>
          </label>
        </div>
        <div id="title-input">
          <label htmlFor="title">
            Title:
            <input
              type="text"
              name="title"
              id="title"
              onChange={handleChange}
              value={property.title}
              required
            ></input>
          </label>
        </div>
        <div id="location-input">
          <label htmlFor="location">
            Location:
            <input
              type="text"
              name="location"
              id="location"
              onChange={handleChange}
              value={property.location}
              required
            ></input>
          </label>
        </div>
        <div id="price-input">
          <label htmlFor="price">
            Price:
            <input
              type="number"
              name="price"
              id="price"
              onChange={handleChange}
              value={property.price}
              required
            ></input>
          </label>
        </div>
        <button type="submit">Add Property</button>
      </form>
    </>
  );
};
export default AddProperty;
