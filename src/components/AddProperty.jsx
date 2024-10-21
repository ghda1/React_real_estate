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

  const [errors, setErrors] = useState({});

  const isValidateForm = () => {
    const newErrors = {};
    if (!property.title.trim()) newErrors.title = "Property title is required";
    if (property.title.length < 10)
      newErrors.title = "Property title should be at least 10 characters long";
    if (!property.price) newErrors.price = "Property price is required";
    if (!property.price || parseFloat(property.price) <= 0)
      newErrors.price = "Price must be a positive number and greater than zero";
    if (!property.image) newErrors.image = "Please upload a property image";
    if (!property.location.trim())
      newErrors.location = "Property location is required";
    if (property.location.length < 10)
      newErrors.location =
        "Property location should be at least 10 characters long";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (isValidateForm()) {
      const newProperty = {
        id: uuidv4(),
        image: property.image,
        title: property.title,
        location: property.location,
        price: property.price,
      };
      onHandleAddProperty(newProperty);
      restValues();
    }
  };

  const restValues = () => {
    setProperty({
      title: "",
      price: 0,
      image: "",
      location: "",
    });
    setErrors({});
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
          {errors.image && <p className="errors">{errors.image}</p>}
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
          {errors.title && <p className="errors">{errors.title}</p>}
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
          {errors.location && <p className="errors">{errors.location}</p>}
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
          {errors.price && <p className="errors">{errors.price}</p>}
        </div>
        <button type="submit">Add Property</button>
      </form>
    </>
  );
};
export default AddProperty;
