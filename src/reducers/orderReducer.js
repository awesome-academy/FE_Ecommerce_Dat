import _ from 'lodash';
import { RESET_ORDER } from './../constants/actionTypes';
const initalState = {}
export default function (state = initalState, action) {
  switch (action.type) {
    case RESET_ORDER:
      return { ...initalState };
    default:
      return state;
  }
}
