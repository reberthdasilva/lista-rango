import { ADD_SEARCH } from "../actions/searchs";

const search = (state = {}, action) => {
  switch (action.type) {
    case ADD_SEARCH:
      return {
        ...state,
        search: action.search
      };
    default:
      return state;
  }
};

export default search;
