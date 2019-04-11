import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setActiveCity } from "../actions";

class CityRaw extends React.Component {
  handleClick = () => {
    this.props.setActiveCity(this.props.city);
  };

  render() {
    return (
      <div
        className={
          this.props.city === this.props.activeCity
            ? "list-group-item selected-item"
            : "list-group-item"
        }
        onClick={this.handleClick}
      >
        <p>{this.props.city.name}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setActiveCity: setActiveCity }, dispatch);
}

const City = connect(
  mapStateToProps,
  mapDispatchToProps
)(CityRaw);
export default City;
