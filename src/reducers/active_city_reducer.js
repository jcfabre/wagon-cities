const active_city_reducer = (
  state = {
    name: "Paris",
    address: "16 Villa Gaudelet, 75011 Paris",
    slug: "paris"
  },
  action
) => {
  switch (action.type) {
    case "SET_ACTIVE_CITY":
      return action.payload;
    default:
      return state;
  }
};
export default active_city_reducer;
