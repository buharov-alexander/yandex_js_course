import {
  LOAD_USERS,
} from 'app/actions/actionTypes';

const initialState = {
  users: [],
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS: {
      return Object.assign({}, state, { users: action.payload });
    }
    default:
      return state;
  }
}
