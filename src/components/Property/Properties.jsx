import PropTypes from "prop-types";
import { useContext } from "react";

import Property from "./Property";
import { PropertiesContext } from "../../Contexts/PropertiesContext";
import { Col, Container, Row } from "react-bootstrap";

const Properties = () => {
  const { properties } = useContext(PropertiesContext);

  if (properties.length == 0) {
    return <h2>There is no properties</h2>;
  }

  return (
    <Container>
      <Row>
        {properties.map((property) => {
          return (
            <Col key={property.id} xs={12} md={6} lg={4}>
              <Property property={property} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

Properties.propTypes = {
  properties: PropTypes.array,
};

export default Properties;
