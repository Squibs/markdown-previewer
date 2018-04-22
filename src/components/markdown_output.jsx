import React, { Component } from 'react';
import { connect } from 'react-redux';

class MarkdownOutput extends Component {
  constructor(props) {
    super(props);

    this.insertMarkdown = this.insertMarkdown.bind(this);
  }

  insertMarkdown() {
    return this.props.markdown;
  }

  render() {
    return (
      <div className="col-6">
        <h2>Markdown Output</h2>
        <textarea id="preview" placeholder={this.insertMarkdown()} disabled />
      </div>
    );
  }
}

function mapStateToProps({ markdown }) {
  return { markdown };
}

export default connect(mapStateToProps)(MarkdownOutput);
