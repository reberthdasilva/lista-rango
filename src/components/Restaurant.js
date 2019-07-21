import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { jsx } from "@emotion/core";
import Label from "./Label";

/** @jsx jsx */
const style = {
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "4px",
    boxShadow: "0px 2px 4px 0px #000000",
    display: "flex",
    minWidth: "30%",
    position: "relative"
  },
  image: {
    maxHeight: "100px",
    maxWidth: "100px"
  },
  info: {
    margin: "30px 25px",
    width: "100%"
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
  let { address, image, name, hours = [] } = restaurant;
  return (
    <NavLink to={`/restaurant/${restaurant.id}`}>
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
          <Label hours={hours} />
        </div>
      </li>
    </NavLink>
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
