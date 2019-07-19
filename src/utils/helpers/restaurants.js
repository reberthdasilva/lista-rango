export const filterRestaurant = (restaurants = [], searchValue = false) =>
  !searchValue
    ? restaurants
    : restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchValue.toLowerCase())
      );
