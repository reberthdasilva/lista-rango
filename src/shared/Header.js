import { jsx } from "@emotion/core";
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
    <h1 css={style.title}>{title}</h1>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
