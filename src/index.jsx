// external modules
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// internal modules
import App from "./components/app";
import cities_reducer from "./reducers/cities_reducer";
import active_city_reducer from "./reducers/active_city_reducer";
import "../assets/stylesheets/application.scss";

// State and reducers
const reducers = combineReducers({
  cities: cities_reducer,
  activeCity: active_city_reducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, composeWithDevTools())}>
    <App />
  </Provider>,
  document.getElementById("root")
);
