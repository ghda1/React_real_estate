import PropTypes from "prop-types";

function Title({ title }) {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string,
};
export default Title;
