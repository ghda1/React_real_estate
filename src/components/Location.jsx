import PropTypes from "prop-types";

function Location({ location }) {
  return (
    <div>
      <h3>Location: {location}</h3>
    </div>
  );
}

Location.propTypes = {
  location: PropTypes.string,
};
export default Location;
