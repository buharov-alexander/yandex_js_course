import { Map } from 'immutable';

import {
  LOAD_USERS,
  LOAD_USER_TASKS,
} from 'app/actions/actionTypes';

const initialState = {
  users: new Map(),
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS: {
      const users = new Map(action.payload.map(user => [user, null]));
      return Object.assign({}, state, { users });
    }
    case LOAD_USER_TASKS: {
      const users = state.users.set(action.payload.user, action.payload.tasks);
      return Object.assign({}, state, { users });
    }
    default:
      return state;
  }
}
