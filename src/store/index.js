import{ createStore } from 'redux';
import { city } from './../reducers/city'

const initialState = {
  city: 'Santiago,scl'
}

//Vincular plugin redux devtools con nuestra aplicación
export const store = createStore(city, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());

