export const RECEIVE_RESTAURANTS = "ASYNC_RECEIVE_RESTAURANTS";

export const receiveRestaurants = restaurants => ({
  type: RECEIVE_RESTAURANTS,
  restaurants
});
