export const filterRestaurant = (restaurants = [], searchValue = false) => {
  if (!searchValue) return restaurants;

  return restaurants.filter(restaurant =>
    restaurant.name.includes(searchValue)
  );
};
