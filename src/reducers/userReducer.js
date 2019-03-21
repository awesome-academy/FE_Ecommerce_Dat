import { GET_USERS, UPDATE_USER, DELETE_USER } from './../constants/actionTypes';

const initalState = {}

export default function (state = initalState, action) {
  let users = { ...state };
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    case UPDATE_USER:
      users = { ...state };
      users[action.payload.id] = action.payload;
      return { ...users }
    case DELETE_USER:
      users = { ...state };
      users[action.payload].status = false;
      return { ...users }
    default:
      return state;
  }
}
