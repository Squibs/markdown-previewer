import React, { Component } from 'react';
import { connect } from 'react-redux';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

// import '../../assets/stylesheets/GitHub.scss';
import 'github-markdown-css/github-markdown.css';

class MarkdownOutput extends Component {
  constructor(props) {
    super(props);

    this.insertMarkdown = this.insertMarkdown.bind(this);
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  insertMarkdown() {
    return this.props.markdown;
  }

  render() {
    return (
      <div className="col-12 col-md-6">
        <div className="markdown-body" id="preview" dangerouslySetInnerHTML={{ __html: this.insertMarkdown() }} />
      </div>
    );
  }
}

function mapStateToProps({ markdown }) {
  return { markdown };
}

export default connect(mapStateToProps)(MarkdownOutput);
