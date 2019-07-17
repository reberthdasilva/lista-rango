import { RECEIVE_RESTAURANTS } from "../actions/restaurants";

const restaurants = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      return {
        ...state,
        ...action.restaurants
      };
    default:
      return state;
  }
};

export default restaurants;
