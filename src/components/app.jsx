import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import MarkdownInput from './markdown_input';
import MarkdownOutput from './markdown_output';

/* eslint-disable react/prefer-stateless-function */

class App extends Component {
  render() {
    return (
      <div>
        <h1 id="markdown-title">Markdown Previewer</h1>
        <div className="row">
          <MarkdownInput />
          <MarkdownOutput />
        </div>
        <footer className="footer text-muted">
          <div className="footer-block">
            Created and Designed by <a href="https://github.com/Squibs" target="_blank" rel="noopener noreferrer">Zachary Holman</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default hot(module)(App);
