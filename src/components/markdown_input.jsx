import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updatePreview } from '../actions';
import StartingText from './starting_text';

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
    return (
      <div className="col-6">
        <h2>Markdown Input</h2>
        <textarea id="editor" onChange={this.handleChange} defaultValue={StartingText()} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updatePreview }, dispatch);
}

export default connect(null, mapDispatchToProps)(MarkdownInput);
