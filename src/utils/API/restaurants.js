import axios from "axios";

export const getRestaurants = () => {
  return new Promise((res, rej) => {
    axios
      .get("https://challange.goomer.com.br/restaurants")
      .then(response => res(response.data))
      .catch(error => rej(error));
  });
};
