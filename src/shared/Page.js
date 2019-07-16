import React from "react";

import { Header, Footer, Search } from "../shared";

export default class Page extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Header />

        <main className="main">
          <Search />
        </main>

        <Footer />
      </div>
    );
  }
}
