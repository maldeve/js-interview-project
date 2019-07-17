import { FETCH_USERS } from "../actions/types";

const initialState = {
  allusers: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        allusers: action.payload
      };
    default:
      return state;
  }
}
