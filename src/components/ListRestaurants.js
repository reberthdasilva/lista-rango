import React from "react";
import PropTypes from "prop-types";
import { jsx } from "@emotion/core";
import { connect } from "react-redux";
import { receiveRestaurants } from "../store/actions/restaurants";
import { getRestaurants } from "../utils/API/restaurants";
import { filterRestaurant } from "../utils/helpers/restaurants";
import Restaurant from "./Restaurant";

/** @jsx jsx */
const style = {
  list: {
    backgroundColor: "#ffffff",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    margin: 0,
    padding: 0
  }
};

class ListRestaurants extends React.Component {
  componentDidMount() {
    getRestaurants().then(response =>
      this.props.dispatch(receiveRestaurants(response))
    );
  }

  render() {
    const restaurants = filterRestaurant(
      this.props.restaurants,
      this.props.search
    );

    return (
      <ul className="list" css={style.list}>
        {restaurants.length > 0 &&
          restaurants.map((restaurant, index) => (
            <Restaurant id={index} key={restaurant.id} />
          ))}
      </ul>
    );
  }
}

ListRestaurants.propTypes = {
  dispatch: PropTypes.func.isRequired,
  restaurants: PropTypes.array.isRequired,
  search: PropTypes.string
};

const mapStateToProps = ({ restaurants, search }) => {
  let keys = Object.keys(restaurants);
  return {
    restaurants: keys.map(key => restaurants[key]),
    search: Object.values(search)[0]
  };
};

export default connect(mapStateToProps)(ListRestaurants);
