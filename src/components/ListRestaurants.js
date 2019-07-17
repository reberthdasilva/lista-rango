import React from "react";
import { connect } from "react-redux";
import { receiveRestaurants } from "../store/actions/restaurants";
import { getRestaurants } from "../utils/API/restaurants";
import { filterRestaurant } from "../utils/helpers/restaurants";

class ListRestaurants extends React.Component {
  componentDidMount() {
    getRestaurants().then(res => this.props.dispatch(receiveRestaurants(res)));
  }

  render() {
    const restaurants = filterRestaurant(this.props.restaurants, "mãe");

    return (
      <ul>
        {restaurants.length > 0 &&
          restaurants.map(restaurant => (
            <li key={restaurant.id}>{restaurant.name}</li>
          ))}
      </ul>
    );
  }
}

const mapStateToProps = ({ restaurants }) => {
  let keys = Object.keys(restaurants);
  restaurants = keys.map(key => restaurants[key]);
  return { restaurants };
};

export default connect(mapStateToProps)(ListRestaurants);
