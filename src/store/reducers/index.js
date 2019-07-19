import { combineReducers } from "redux";
import menus from "./menus";
import restaurants from "./restaurants";
import search from "./search";

export default combineReducers({ menus, restaurants, search });
