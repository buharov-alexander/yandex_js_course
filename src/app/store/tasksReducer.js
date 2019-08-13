import {
  LOAD_TASKS,
} from 'app/actions/actionTypes';

const initialState = {
  tasks: [],
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TASKS: {
      return Object.assign({}, state, { tasks: action.payload });
    }
    default:
      return state;
  }
}
