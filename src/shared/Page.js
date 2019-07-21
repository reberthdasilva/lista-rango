import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Header, Footer, Search } from "../shared";
import ListRestaurants from "../components/ListRestaurants";
import RestaurantPage from "../components/RestaurantPage";
import Page404 from "../shared/Page404";

class Page extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className="container">
          <Header title="Lista Rango" />

          <main className="main">
            <Switch>
              <Route
                path="/"
                exact
                render={() => (
                  <>
                    <Search placeholder="Buscar estabelecimento" />
                    <ListRestaurants />
                  </>
                )}
              />
              <Route
                path="/restaurant/:id"
                exact
                render={routeProps => (
                  <>
                    <Search placeholder="Buscar no cardápio" />
                    <RestaurantPage {...routeProps} />
                  </>
                )}
              />
              <Route component={Page404} />
            </Switch>
          </main>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default Page;
