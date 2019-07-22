import React from "react";
import PropTypes from "prop-types";
import { jsx } from "@emotion/core";
import { connect } from "react-redux";
import { receiveRestaurants } from "../store/actions/restaurants";
import { filterRestaurant, jsonToArray } from "../utils/helpers/restaurants";
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
    this.props.getAll();
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
  restaurants: PropTypes.array.isRequired,
  search: PropTypes.string
};

const mapStateToProps = ({ restaurants, search }) => ({
  restaurants: jsonToArray(restaurants),
  search: Object.values(search)[0]
});

const mapDispatchToProps = dispatch => ({
  getAll: () => dispatch(receiveRestaurants())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRestaurants);
