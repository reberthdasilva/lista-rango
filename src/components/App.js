import React from "react";
import Page from "../shared/Page";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Page />
      </Router>
    </Provider>
  );
}

export default App;
