import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updatePreview } from '../actions';

class MarkdownInput extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.handleChange();
  }

  handleChange() {
    this.props.updatePreview();
  }

  render() {
    const startingText = (`# Markdown Previewer
      This is a **Markdown Previewer** I created while going through the *Front End Libraries* challenges
      at [beta freeCodeCamp](https://beta.freecodecamp.org).

      I decided to try and create an experience that I am familiar with at this point, the GitHub-flavored
      Markdown Spec. I've been using it for every previous project, so why not create something with a similar
      feeling.
    `).replace(/^ {6}/gm, '').trimRight();

    return (
      <div className="col-6">
        <h2>Markdown Input</h2>
        <textarea id="editor" onChange={this.handleChange} defaultValue={startingText} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updatePreview }, dispatch);
}

export default connect(null, mapDispatchToProps)(MarkdownInput);
