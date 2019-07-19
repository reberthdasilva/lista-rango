import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addSearch } from "../store/actions/searchs";

class Search extends React.Component {
  state = {
    text: ""
  };

  handleValue = event => {
    const text = event.target.value;
    this.setState({ text });

    this.props.dispatch(addSearch(text));
  };

  render() {
    const { placeholder = "Digite o texto" } = this.props;
    const { text } = this.state;

    return (
      <input
        type="text"
        value={text}
        onChange={this.handleValue}
        placeholder={placeholder}
        className="search"
      />
    );
  }
}

Search.propTypes = {
  dispatch: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default connect()(Search);
