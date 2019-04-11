import cities from "../../assets/cities";

export function loadCities() {
  return {
    type: "LOAD_CITIES",
    payload: cities
  };
}

export function setActiveCity(city) {
  return {
    type: "SET_ACTIVE_CITY",
    payload: city
  };
}
