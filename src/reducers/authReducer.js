import isEmpty from '../validation/is-empty';
import { SET_CURRENT_USER } from './../constants/actionTypes';

const initalState = {
  isAuthenticated: false,
  user: {
    email: '',
    name: '',
    phone: '',
    roles: [],
    uid: ''
  }
}

export default function (state = initalState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
    default:
      return state;
  }
}
