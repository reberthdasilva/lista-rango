import React from "react";

export default class Search extends React.Component {
  state = {
    text: ""
  };

  handleValue = event => {
    const text = event.target.value;
    this.setState({ text });

    // Do search
    let teste = ["a", "b", "abc", "alface", "qqcoisa", "algumacoisa"];
    let novo = teste.filter(item => item.includes(text));
    console.log(novo);
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
