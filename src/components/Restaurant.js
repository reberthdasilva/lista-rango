import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { jsx } from "@emotion/core";

/** @jsx jsx */
const style = {
  card: {
    alignItems: "stretch",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    display: "flex"
  },
  image: {
    width: "100px"
  },
  info: {
    margin: "30px 25px"
  },
  name: {
    display: "block",
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "20px",
    textAlign: "center"
  },
  address: {
    display: "block",
    fontSize: "12px",
    lineHeight: "15px",
    paddingTop: "3px",
    textAlign: "center"
  }
};

const Restaurant = ({ restaurant }) => {
  let { address, image, name } = restaurant;
  return (
    <li className="list__card" css={style.card}>
      <img
        src={image}
        alt={name}
        title={name}
        className="list__card-image"
        css={style.image}
      />
      <div className="list__card-info" css={style.info}>
        <span className="list__card-name" css={style.name}>
          {name}
        </span>
        <span className="list__card-address" css={style.address}>
          {address}
        </span>
      </div>
    </li>
  );
};

Restaurant.propTypes = {
  id: PropTypes.number.isRequired,
  restaurant: PropTypes.object.isRequired
};

const mapStateToProps = ({ restaurants }, { id }) => ({
  restaurant: restaurants[id]
});

export default withRouter(connect(mapStateToProps)(Restaurant));
