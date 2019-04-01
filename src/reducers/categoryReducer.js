import { GET_CATEGORIES, CREATE_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from './../constants/actionTypes';
const initalState = {}

export default function (state = initalState, action) {
  let categories;
  switch (action.type) {
    case GET_CATEGORIES:
      return action.payload;
    case CREATE_CATEGORY:
      return {...state, [action.payload.id]: {name: action.payload.name}};
    case UPDATE_CATEGORY:
      categories = {...state};
      categories[action.payload.id].name = action.payload.name;
      return {...categories};
    case DELETE_CATEGORY:
      categories = {...state};
      delete categories[action.payload];
      return {...categories};
    default:
      return state;
  }
}
