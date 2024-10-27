import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

import Image from "../Image";
import Title from "../Title";
import Price from "../Price";
import Button from "react-bootstrap/Button";

const Property = (props) => {
  const { property } = props;
  const { id, image, title, price } = property;
  const navigate = useNavigate();

  return (
    <Card  className="card">
      <Image image={image} title={title} />
      <Card.Body>
        <Title title={title} />
        <Price price={price} />
        <Button
          variant="secondary"
          onClick={() => navigate(`/propertyDetails/${id}`)}
        >
          Show Details
        </Button>
      </Card.Body>
    </Card>
  );
};

Property.propTypes = {
  property: PropTypes.object,
};

export default Property;
