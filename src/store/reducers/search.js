import { ADD_SEARCH } from "../actions/searchs";

const addSearch = (state = {}, action) => {
  switch (action.type) {
    case ADD_SEARCH:
      return {
        ...state,
        ...action.search
      };
    default:
      return state;
  }
};

export default addSearch;
