import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import uploadImageToCloudinary from "../utility/UploadImage";
import { PropertiesContext } from "../Contexts/PropertiesContext";

const UpdatePropertyForm = () => {
  const locationState = useLocation();
  const [updatePropertyData, setUpdatePropertyData] = useState(
    locationState.state
  );
  const [errors, setErrors] = useState({});
  const { properties, setProperties } = useContext(PropertiesContext);
  const navigate = useNavigate();
  const { id, image, title, price, location } = updatePropertyData;

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

  const handleUpdateDataProperty = (updateObject) => {
    const updatedProperty = properties.map((property) => {
      if (property.id === updateObject.id) {
        return {
          ...property,
          image: updateObject.image,
          location: updateObject.location,
          price: updateObject.price,
          title: updateObject.title,
        };
      }
      return property;
    });
    setProperties(updatedProperty);
  };

  const isValidateForm = () => {
    const newErrors = {};
    if (title.length < 5)
      newErrors.title = "Property title should be at least 5 characters long";
    if (!price) newErrors.price = "Property price is required";
    if (!price || parseFloat(price) <= 0)
      newErrors.price = "Price must be a positive number and greater than zero";
    if (location.length < 5)
      newErrors.location =
        "Property location should be at least 5 characters long";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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

  const submitHandler = async (event) => {
    event.preventDefault();

    if (isValidateForm()) {
      const imageUrl = await uploadImageToCloudinary(image);

      const updatedProperty = {
        id: id,
        image: imageUrl ?? image,
        title: title,
        location: location,
        price: price,
      };
      handleUpdateDataProperty(updatedProperty);
      restValues();
      navigate("/");
    }
  };

  return (
    <div className="updateProperty">
      <form className="updatePropert-form" onSubmit={submitHandler}>
        <div id="image-input">
          <label htmlFor="image"></label>
          <img src={image} alt={title} />
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleImageChange}
          ></input>
          {errors.image && <p className="errors">{errors.image}</p>}
        </div>
        <div id="title-input">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            value={title}
          ></input>
          {errors.title && <p className="errors">{errors.title}</p>}
        </div>
        <div id="location-input">
          <label htmlFor="location">Location:</label>

          <input
            type="text"
            name="location"
            id="location"
            onChange={handleChange}
            value={location}
          ></input>
          {errors.location && <p className="errors">{errors.location}</p>}
        </div>
        <div id="price-input">
          <label htmlFor="price"> Price:</label>

          <input
            type="number"
            name="price"
            id="price"
            onChange={handleChange}
            value={price}
          ></input>
          {errors.price && <p className="errors">{errors.price}</p>}
        </div>
        <button type="submit">Update Property</button>
      </form>
    </div>
  );
};

UpdatePropertyForm.propTypes = {
  updatePropertyData: PropTypes.object,
  onHandleUpdatePropertyData: PropTypes.func,
  setUpdatePropertyData: PropTypes.func,
};

export default UpdatePropertyForm;
