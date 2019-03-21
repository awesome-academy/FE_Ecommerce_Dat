import { LOGINING, REGISTERING, FETCHING_PRODUCTS } from './../constants/actionTypes';

const initalState = {
  fetchingProducts: false
}

export default function (state = initalState, action) {
  switch (action.type) {
    case LOGINING:
      return { ...state, logining: action.payload }
    case REGISTERING:
      return { ...state, registering: action.payload }
    case FETCHING_PRODUCTS:
      return { ...state, fetchingProducts: action.payload }
    default:
      return state;
  }
}
