import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import City from "./city";
import { loadCities } from "../actions";

class CityListRaw extends React.Component {
  componentWillMount() {
    this.props.loadCities();
  }

  render() {
    const citiesMap = this.props.cities.map(city => (
      <City city={city} key={city.slug} />
    ));
    return <div>{citiesMap}</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadCities: loadCities }, dispatch);
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export const CityList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CityListRaw);
