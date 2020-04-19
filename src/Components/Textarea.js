import React from 'react';
import '../App.css';

class Textarea extends React.Component {
  render() {
    return (
        <div className="form-group">
          <label className="customLabel">{this.props.label}</label>
          <textarea rows="4" cols="50" className="customTextarea" placeholder={this.props.placeholder}
            onChange={(e) => {this.props.handleInput("desc", e.target.value)}}></textarea>
        </div>
    );
  }
}

export default Textarea;
