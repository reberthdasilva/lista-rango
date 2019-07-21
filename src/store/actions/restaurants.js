import { getRestaurants } from "../../utils/API/restaurants";

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";

export const receiveRestaurants = restaurants => ({
  type: RECEIVE_RESTAURANTS,
  restaurants
});

export const getAll = () => dispatch =>
  getRestaurants().then(response => dispatch(receiveRestaurants(response)));
