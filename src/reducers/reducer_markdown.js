import { UPDATE_PREVIEW } from '../actions';

export default function (state = '', action) {
  switch (action.type) {
    case UPDATE_PREVIEW:
      return action.payload;
    default:
      return state;
  }
}
