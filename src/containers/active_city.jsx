import React from "react";
import { connect } from "react-redux";

class ActiveCityRaw extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.activeCity.name}</h3>
        <p>{this.props.activeCity.address}</p>
        <img
          width="100%"
          src={`https://kitt.lewagon.com/placeholder/cities/${
            this.props.activeCity.slug
          }`}
          alt="image"
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export const ActiveCity = connect(
  mapStateToProps,
  null
)(ActiveCityRaw);
