import React from "react";
import PropTypes from "prop-types";
import "./MainContainer.style.scss";

const MainContainer = ({ children }) => {

  return (
    <div className="main-container">
      <div className="content">{children}</div>
    </div>
  );
};

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContainer;
