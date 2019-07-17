import { RECEIVE_MENUS } from "../actions/menus";

export default function menus(state = {}, action) {
  switch (action.type) {
    case RECEIVE_MENUS:
      return {
        ...state,
        ...action.menus
      };
    default:
      return state;
  }
}
