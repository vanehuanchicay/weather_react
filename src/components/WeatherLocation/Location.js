import React from 'react';
import PropTypes from 'prop-types';

/*
const Location = () => (
  <div>
    <h1>Santiago</h1>
  </div>
  )
  */

  /* Version antigua y más larga
  const Location = (props) =>{
    const city = props.city;
    return (
        <div>
          <h1>{city}</h1>
        </div>
      )
  }
  */
  /* Version moderna y más corta */
const Location = ({city}) =>(
  <div className ='locationCont'>
    <h1>{city}</h1>
  </div>
)

Location.propTypes = {
  city: PropTypes.string.isRequired,
}

  
export default Location;