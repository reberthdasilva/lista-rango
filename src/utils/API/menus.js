import axios from "axios";

export const getMenus = id =>
  axios
    .get(`https://challange.goomer.com.br/restaurants/${id}/menu`)
    .then(response => response.data)
    .catch(error => error);
