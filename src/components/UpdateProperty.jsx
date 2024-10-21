import React, { useState } from "react";

const UpdateProperty = (props) => {
  const { updateProperty, onHandleUpdatePropertyData, setUpdatePropertyData } =
    props;
  const { id, image, title, price, location } = updateProperty;

  const [property, setProperty] = useState({
    title: "",
    price: "",
    image: "",
    location: "",
  });

  const handleChange = (event) => {
    setUpdatePropertyData((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  console.log("update property ", updateProperty);
  const [errors, setErrors] = useState({});

  const isValidateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Property title is required";
    if (title.length < 10)
      newErrors.title = "Property title should be at least 10 characters long";
    if (!price) newErrors.price = "Property price is required";
    if (!price || parseFloat(price) <= 0)
      newErrors.price = "Price must be a positive number and greater than zero";
    if (!image) newErrors.image = "Please upload a property image";
    if (!location.trim()) newErrors.location = "Property location is required";
    if (location.length < 10)
      newErrors.location =
        "Property location should be at least 10 characters long";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (isValidateForm()) {
      const updatedProperty = {
        id: id,
        image: image,
        title: title,
        location: location,
        price: price,
      };
      onHandleUpdatePropertyData(updatedProperty);
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
  };
  return (
    <>
      <h2>Update Property: </h2>
      <form className="updatePropert-form" onSubmit={submitHandler}>
        <div id="image-input">
          <label htmlFor="image">
            Image:
            <input
              type="text"
              name="image"
              id="image"
              onChange={handleChange}
              value={image}
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
              value={title}
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
              value={location}
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
              value={price}
              required
            ></input>
          </label>
          {errors.price && <p className="errors">{errors.price}</p>}
        </div>
        <button type="submit">Update Property</button>
      </form>
    </>
  );
};
export default UpdateProperty;
