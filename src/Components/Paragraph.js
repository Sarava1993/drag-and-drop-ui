import React from 'react';
import '../App.css';

class Paragraph extends React.Component {
  render() {
    return (
        <div className="customParagraph">{this.props.content}</div>
    );
  }
}

export default Paragraph;
