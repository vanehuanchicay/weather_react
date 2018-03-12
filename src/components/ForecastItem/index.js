import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WheatherData';


const ForecastItem = ({ weekDay, hour, data}) =>(
  <div>
    <div>{weekDay}- hora:{hour}hr</div>
    <WeatherData data = {data}></WeatherData>
  </div>  
)
ForecastItem.propTypes ={
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  data: PropTypes.shape({ // para validar objetos
    temperature: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    wind: PropTypes.string.isRequired,
  })
}
export default ForecastItem;