
import { CHANGE_TAB, CHANGE_SORTING } from 'app/actions/actionTypes';
import { ALL } from 'app/tabs/constants';
import { COLUMN, DIRECTION } from 'app/table/constants';

const initialState = {
  tab: ALL,
  sortBy: COLUMN.SUM,
  direction: DIRECTION.DESC,
};

// eslint-disable-next-line arrow-body-style
const revert = (direction) => {
  return direction === DIRECTION.DESC ? DIRECTION.ASC : DIRECTION.DESC;
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TAB: {
      return Object.assign({}, state, action.payload);
    }
    case CHANGE_SORTING: {
      const sortBy = action.payload.column;
      const direction = state.sortBy === sortBy ? revert(state.direction) : DIRECTION.DESC;
      return Object.assign({}, state, { sortBy, direction });
    }
    default:
      return state;
  }
}
