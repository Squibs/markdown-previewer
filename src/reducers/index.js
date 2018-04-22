import { combineReducers } from 'redux';

import MarkdownReducer from './reducer_markdown';

const rootReducer = combineReducers({
  markdown: MarkdownReducer,
});

export default rootReducer;
