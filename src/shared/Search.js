import React from "react";
import { connect } from "react-redux";

class Search extends React.Component {
  state = {
    text: ""
  };

  handleValue = event => {
    const text = event.target.value;
    this.setState({ text });

    // Do filter
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

export default connect()(Search);
