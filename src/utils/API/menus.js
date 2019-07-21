import axios from "axios";

export const getMenus = id => {
  return new Promise((res, rej) => {
    axios
      .get(`https://challange.goomer.com.br/restaurants/${id}/menu`)
      .then(response => res(response.data))
      .catch(error => rej(error));
  });
};
