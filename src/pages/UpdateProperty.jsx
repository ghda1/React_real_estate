import { useState } from "react";
import PropTypes from "prop-types";

import uploadImageToCloudinary from "../utility/UploadImage";

const UpdateProperty = (props) => {
  const { updateProperty, onHandleUpdatePropertyData, setUpdatePropertyData } =
    props;
    
  const { id, image, title, price, location } = updateProperty;
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUpdatePropertyData((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const handleImageChange = (event) => {
    setUpdatePropertyData((prevState) => {
      return { ...prevState, [event.target.name]: event.target.files[0] };
    });
  };

  const isValidateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Property title is required";
    if (title.length < 5)
      newErrors.title = "Property title should be at least 5 characters long";
    if (!price) newErrors.price = "Property price is required";
    if (!price || parseFloat(price) <= 0)
      newErrors.price = "Price must be a positive number and greater than zero";
    if (!image) newErrors.image = "Please upload a property image";
    if (!location.trim()) newErrors.location = "Property location is required";
    if (location.length < 5)
      newErrors.location =
        "Property location should be at least 5 characters long";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (isValidateForm()) {
      let imageUrl = await uploadImageToCloudinary(image);
      const updatedProperty = {
        id: id,
        image: imageUrl,
        title: title,
        location: location,
        price: price,
      };
      onHandleUpdatePropertyData(updatedProperty);
      restValues();
    }
  };
  const restValues = () => {
    setUpdatePropertyData({
      title: "",
      price: 0,
      image: "",
      location: "",
    });
    setErrors({});
  };

  return (
    <div className="updateProperty">
      <form className="updatePropert-form" onSubmit={submitHandler}>
        <div id="image-input">
          <label htmlFor="image">
            Image:
            <input
              type="file"
              name="image"
              id="image"
              onChange={handleImageChange}
              // value={image}
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
    </div>
  );
};

UpdateProperty.propTypes = {
  updateProperty: PropTypes.object,
  onHandleUpdatePropertyData: PropTypes.func,
  setUpdatePropertyData: PropTypes.func,
};

export default UpdateProperty;