import { List } from 'immutable';

import {
  LOAD_TASKS,
} from 'app/actions/actionTypes';

const initialState = {
  weeks: new List(),
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TASKS: {
      const weeks = action.payload.map((tasks, index) => ({ name: `Week ${index + 1}`, tasks }));
      return Object.assign({}, state, { weeks: new List(weeks) });
    }
    default:
      return state;
  }
}
