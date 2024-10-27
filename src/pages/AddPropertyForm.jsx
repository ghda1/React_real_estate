import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

import uploadImageToCloudinary from "../utility/UploadImage";
import { PropertiesContext } from "../Contexts/PropertiesContext";

const AddPropertyForm = () => {
  const initialValue = {
    title: "",
    price: 0,
    image: "",
    location: "",
  };

  const [property, setProperty] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const { setProperties } = useContext(PropertiesContext);
  const navigate = useNavigate();

  const handleAddProperty = (newProperty) => {
    setProperties((prevProperty) => {
      return [...prevProperty, newProperty];
    });
  };

  const handleChange = (event) => {
    setProperty((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const handleImageChange = (event) => {
    setProperty((prevState) => {
      return { ...prevState, [event.target.name]: event.target.files[0] };
    });
  };

  const isValidateForm = () => {
    const newErrors = {};
    if (!property.title.trim()) newErrors.title = "Property title is required";
    if (property.title.length < 5)
      newErrors.title = "Property title should be at least 5 characters long";
    if (!property.price) newErrors.price = "Property price is required";
    if (!property.price || parseFloat(property.price) <= 0)
      newErrors.price = "Price must be a positive number and greater than zero";
    if (!property.image) newErrors.image = "Please upload a property image";
    if (!property.location.trim())
      newErrors.location = "Property location is required";
    if (property.location.length < 5)
      newErrors.location =
        "Property location should be at least 5 characters long";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const restValues = () => {
    setProperty(initialValue);
    setErrors({});
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (isValidateForm()) {
      let imageUrl = await uploadImageToCloudinary(property.image);
      const newProperty = {
        id: uuidv4(),
        image: imageUrl,
        title: property.title,
        location: property.location,
        price: property.price,
      };
      handleAddProperty(newProperty);
      restValues();
      navigate("/");
    }
  };

  return (
    <div className="addProperty">
      <form className="addPropert-form" onSubmit={submitHandler}>
        <div id="image-input">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleImageChange}
            accept="image/*"
            required
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
            value={property.title}
            required
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
            value={property.location}
            required
          ></input>
          {errors.location && <p className="errors">{errors.location}</p>}
        </div>
        <div id="price-input">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            name="price"
            id="price"
            onChange={handleChange}
            value={property.price}
            required
          ></input>
          {errors.price && <p className="errors">{errors.price}</p>}
        </div>
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default AddPropertyForm;
