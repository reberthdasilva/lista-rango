import { getMenus } from "../../utils/API/menus";

export const RECEIVE_MENUS = "RECEIVE_MENUS";

export const receiveMenus = menus => ({
  type: RECEIVE_MENUS,
  menus
});

export const getMenu = id => dispatch =>
  getMenus(id).then(menu => dispatch(receiveMenus(menu)));

// export function* incrementAsync(id) {
//   const json = yield getMenus(id).then(menu => dispatch(receiveMenus(menu)));

//   yield put({ type: "NEWS_RECEIVED", json: json.articles });
// }
