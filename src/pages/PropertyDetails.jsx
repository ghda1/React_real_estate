import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { PropertiesContext } from "../Contexts/PropertiesContext";
import Card from "../components/Card";
import Image from "../components/Image";
import Title from "../components/Title";
import Location from "../components/Location";
import Price from "../components/Price";

function PropertyDetails() {
  const { id } = useParams();
  const { properties, setProperties } = useContext(PropertiesContext);
  const navigate = useNavigate();

  const findProperty = properties.find((property) => property.id == id);
  const { image, title, location, price } = findProperty;

  const handleDeleteProperty = (id) => {
    const filterProperties = properties.filter(
      (property) => property.id !== id
    );
    setProperties(filterProperties);
    navigate("/");
  };

  return (
    <Card>
      <article>
        <Image image={image} title={title} />
        <Title title={title} />
        <Location location={location} />
        <Price price={price} />
        <button className="delete-btn" onClick={() => handleDeleteProperty(id)}>
          Delete
        </button>
        <button
          className="update-btn"
          onClick={() => navigate("/updateProperty", { state: findProperty })}
        >
          Update
        </button>
      </article>
    </Card>
  );
}

export default PropertyDetails;
