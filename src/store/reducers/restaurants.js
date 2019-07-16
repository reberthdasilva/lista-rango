import { RECEIVE_RESTAURANTS } from "../actions/restaurants";

export default function restaurants(state, action) {
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      return {
        ...state,
        ...action.restaurants
      };
    default:
      return state;
  }
}
