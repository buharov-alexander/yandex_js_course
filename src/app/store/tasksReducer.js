import { List } from 'immutable';

import {
  LOAD_TASKS,
} from 'app/actions/actionTypes';

const initialState = {
  weeks: new List(),
  tasks: new List(),
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TASKS: {
      return Object.assign({}, state, action.payload);
    }
    default:
      return state;
  }
}
