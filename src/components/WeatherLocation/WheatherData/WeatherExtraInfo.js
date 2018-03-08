import React from 'react';
import PropTypes from 'prop-types';



const WeatherExtraInfo = ({humidity, wind}) => (
    <div> 
    <span>{`Humedad: ${humidity} % - `}</span>
    <span>{` Vientos:${wind} wind`}</span>
    </div>
)

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;