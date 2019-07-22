import axios from "axios";

export const getRestaurants = () =>
  axios
    .get("https://challange.goomer.com.br/restaurants")
    .then(response => response.data)
    .catch(error => error);
