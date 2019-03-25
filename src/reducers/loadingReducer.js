import * as types from './../constants/actionTypes';

const initalState = {}

export default function (state = initalState, action) {
  switch (action.type) {
    case types.LOGINING:
      return { ...state, logining: action.payload }
    case types.REGISTERING:
      return { ...state, registering: action.payload }
    default:
      return state;
  }
}
