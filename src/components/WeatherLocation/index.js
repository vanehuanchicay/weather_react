import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WheatherData/index';
import transformWeather from './../../services/transformWeather'
//import {CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY} from './../../constant/weathers';
import './styles.css';

const api_key = 'b67a754526effe96ab00f9d8d9647c6f';
//const city = 'Santiago,scl';
const url = 'http://api.openweathermap.org/data/2.5/weather'

/*
const data1 = {
  temperature: 32,
  weatherState: SUN,
  humidity: 2,
  wind: '10 m/s',
}
*/

/*
const WeatherLocation = () => ( 
    <div className = 'weatherLocation'>
      <Location city = {'Chuquicamata'}/>
      <WeatherData data = {data}/>
    </div>
) 
*/
class WeatherLocation extends Component {

  constructor ( {city} ) {
    super();
    this.state = { //estado inicial de mi componente
      city,
      data: null
    }
    console.log('Constructor');
  }

    /*this.setState ({ // setState setea el estado/valor del componentes
      data: data2
    })
    console.log('Actualizado');
    */
  

  componentWillMount() {
   // console.log('ComponentWillMount');
   const { city } = this.state;
   const api_weather = `${url}?q=${city}&appid=${api_key}&units=metric`;
      fetch(api_weather).then(data => {
        console.log(data);
        return data.json();
      }).then(weather_data => {
        const data = transformWeather(weather_data);
        this.setState({ data });
      })
      console.log('Actualizado');
    }
  /*
  componentDidMount(){
    console.log('ComponentDidMount');
  }
  componentWillUpdate(){
    console.log('ComponentWillUpdate');
  }
  componentDidUpdate(){
    console.log('ComponentDidUpdate');
  }
  */
  render = () => {
    console.log('Render');
    const { onWeatherLocationClick} = this.props;
    const { city, data } = this.state;
    return (
    <div className='weatherLocation' onClick= {onWeatherLocationClick}>
      <Location city = {city}/>
      { data != null ? <WeatherData data = {data}
        /> : <CircularProgress size={60} thickness={7} />

    }
    </div>
    )
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;