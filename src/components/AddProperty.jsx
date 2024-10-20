import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";
const AddProperty = (props) => {
  const { onHandleAddProperty } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const newProperty = {
      id: uuidv4(),
      image:  image ,
      title: title ,
      location:  location ,
      price:  price ,
    };
    onHandleAddProperty(newProperty);
    restValues();
  };
  const titleHandler = (event) => setTitle(event.target.value);
  const priceHandler = (event) => setPrice(event.target.value);
  const imageHandler = (event) => setImage(event.target.value);
  const locationHandler = (event) => setLocation(event.target.value);
  const restValues = () => {
    setTitle("");
    setImage("");
    setPrice(0);
    setLocation("");
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
              name=""
              id="image"
              onChange={imageHandler}
              value={image}
              required
            ></input>
          </label>
        </div>
        <div id="title-input">
          <label htmlFor="title">
            Title:
            <input
              type="text"
              name=""
              id="title"
              onChange={titleHandler}
              value={title}
              required
            ></input>
          </label>
        </div>
        <div id="location-input">
          <label htmlFor="location">
            Location:
            <input
              type="text"
              name=""
              id="location"
              onChange={locationHandler}
              value={location}
              required
            ></input>
          </label>
        </div>
        <div id="price-input">
          <label htmlFor="price">
            Price:
            <input
              type="number"
              name=""
              id="price"
              onChange={priceHandler}
              value={price}
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
