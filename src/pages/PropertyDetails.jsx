import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { PropertiesContext } from "../Contexts/PropertiesContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Image from "../components/Image";
import Title from "../components/Title";
import Location from "../components/Location";
import Price from "../components/Price";
import { Container } from "react-bootstrap";

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
    <Container className="details-card">
      <Card className="card">
        <Image image={image} title={title} />
        <Card.Body>
          <Title title={title} />
          <Location location={location} />
          <Price price={price} />
          <Button
            variant="secondary"
            className="delete-btn"
            onClick={() => handleDeleteProperty(id)}
          >
            Delete
          </Button>
          <Button
            variant="secondary"
            className="update-btn"
            onClick={() => navigate("/updateProperty", { state: findProperty })}
          >
            Update
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PropertyDetails;
