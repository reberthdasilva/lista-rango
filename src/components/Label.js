import React from "react";
import PropTypes from "prop-types";
import { isOpened } from "../utils/helpers/restaurants";
import { jsx } from "@emotion/core";

/** @jsx jsx */
const style = {
  label: {
    alignItems: "center",
    backgroundColor: "#2B0D61",
    borderRadius: "25px",
    color: "#FFFFFF",
    display: "flex",
    flexWrap: "wrap",
    fontSize: "9px",
    height: "50px",
    justifyContent: "space-around",
    lineHeight: "15px",
    position: "absolute",
    right: "-20px",
    textAlign: "center",
    top: "-25px",
    width: "50px"
  }
};

const Label = ({ hours }) => (
  <span className="list__card-label" css={style.label}>
    {isOpened(hours)}
  </span>
);

Label.propTypes = {
  hours: PropTypes.array.isRequired
};

export default Label;
