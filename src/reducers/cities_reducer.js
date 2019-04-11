const cities_reducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD_CITIES":
      return action.payload;
    default:
      return state;
  }
};
export default cities_reducer;
