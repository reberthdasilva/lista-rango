import { jsx } from "@emotion/core";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

/** @jsx jsx */
const style = {
  header: {
    backgroundColor: "#000000"
  },
  title: {
    color: "#FFFFFF",
    textAlign: "center"
  }
};

const Header = ({ title = "Lista Rango" }) => (
  <header css={style.header} className="header">
    <NavLink to="/">
      <h1 css={style.title}>{title}</h1>
    </NavLink>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
