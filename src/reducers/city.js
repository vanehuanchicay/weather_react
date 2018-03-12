import { SET_CITY } from './../actions/';

export const city = (state, action) => {
  switch(action.type){
    case SET_CITY: 
      return{...state, city: action.value} // en caso de que ese estado coincida con set_city y modifica por una nueva accion
    default:
      return state;
  }
}