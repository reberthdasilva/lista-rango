export const filterRestaurant = (restaurants = [], searchValue = false) =>
  !searchValue
    ? restaurants
    : restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchValue.toLowerCase())
      );

export const isOpened = (hours = []) => {
  // TODO: Verify exact hours
  const today = new Date().getDay() + 1;
  return hours.filter(hour => hour.days.includes(today)).length > 0
    ? "Aberto agora"
    : "Fechado";
};

export const dayOfWeek = () => {};

export const jsonToArray = json => {
  return Object.values(json).length
    ? [json].map(el => Object.values(el))[0]
    : [];
};
