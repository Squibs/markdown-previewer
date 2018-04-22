import marked from 'marked';

import { UPDATE_PREVIEW } from '../actions';

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}" title="${title}">${text}</a>`;
};

export default function (state = '', action) {
  switch (action.type) {
    case UPDATE_PREVIEW:
      marked.setOptions({
        breaks: true,
      });
      return marked(action.payload, { renderer });
    default:
      return state;
  }
}
