
import { CHANGE_TAB } from 'app/actions/actionTypes';
import { ALL } from 'app/tabs/constants';

const initialState = {
  tab: ALL,
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TAB: {
      return Object.assign({}, state, action.payload);
    }
    default:
      return state;
  }
}
