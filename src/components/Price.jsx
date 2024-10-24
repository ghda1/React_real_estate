import PropTypes from "prop-types";

function Price({ price }) {
  return (
    <div>
      <h3 id="price">Price: {price}</h3>
    </div>
  );
}

Price.propTypes = {
  price: PropTypes.number,
};
export default Price;
