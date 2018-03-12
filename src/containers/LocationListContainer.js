import React, { Component } from 'react';
import { connect } from 'react-redux'; // conectar con los estados 
import { setCity } from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {// componentes de clase
    handleSelectionLocation = (city) => {
    this.props.setCity(city);
  }
  render(){
    return( // return siempre dentro de div's
      <div>
        <LocationList cities = {this.props.cities} 
          onSelectedLocation = {this.handleSelectionLocation}>
        </LocationList>
      </div>
    )
  }
}
// esta funcion nos deja trabajar con las acciones
const mapDispacthToPropsActions = (dispatch) => ({
  setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispacthToPropsActions)(LocationListContainer);
