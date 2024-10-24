import { useContext } from "react";
import Card from "../Card";
import PropTypes from "prop-types";
import { PropertiesContext } from "../../Contexts/PropertiesContext";
import { useNavigate } from "react-router-dom";
import Image from "../Image";
import Title from "../Title";
import Price from "../Price";

const Property = (props) => {
  const { property } = props;
  const { id, image, title, price } = property;
  const { properties, setProperties } = useContext(PropertiesContext);
  const navigate = useNavigate();

  const handleDeleteProperty = (id) => {
    const filterProperties = properties.filter(
      (property) => property.id !== id
    );
    setProperties(filterProperties);
  };

  return (
    <Card>
      <article>
        <Image image={image} title={title} />
        <Title title={title} />
        <Price price={price} />
        <button
          className="details-btn"
          onClick={() => navigate(`/propertyDetails/${id}`)}
        >
          Show Details
        </button>
        <button className="delete-btn" onClick={() => handleDeleteProperty(id)}>
          Delete
        </button>
        <button
          className="update-btn"
          onClick={() => navigate("/updateProperty", { state: property })}
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
};

export default Property;
