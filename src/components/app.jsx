import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import MarkdownInput from './markdown_input';
import MarkdownOutput from './markdown_output';

/* eslint-disable react/prefer-stateless-function */

class App extends Component {
  render() {
    return (
      <div>
        <h1>Markdown Previewer</h1>
        <div className="row">
          <MarkdownInput />
          <MarkdownOutput />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
