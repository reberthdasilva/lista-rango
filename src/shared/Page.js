import React from "react";
import { connect } from "react-redux";

import { Header, Footer, Search } from "../shared";
import ListRestaurants from "../components/ListRestaurants";

class Page extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Header title="teste" />

        <main className="main">
          <Search />
          <ListRestaurants />
        </main>

        <Footer />
      </div>
    );
  }
}

export default connect()(Page);
