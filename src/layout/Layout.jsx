import React from "react";
import PropTypes from "prop-types";

import Navbar from "../components/Navbar";

function Layout(props) {
  return (
    <div className="layout">
      <Navbar />
      <main>{props.children}</main>
      <footer />
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
