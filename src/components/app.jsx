import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

/* eslint-disable react/prefer-stateless-function */

class App extends Component {
  render() {
    return (
      <div>
        Markdown Previewer
      </div>
    );
  }
}

export default hot(module)(App);
