import React from 'react';
import '../App.css';

class Textfield extends React.Component {
  render() {
    return (
        <div className="form-group">
          <label className="customLabel">{this.props.label}</label>
          <input type={this.props.type} placeholder={this.props.placeholder} className="customTextfield"
          onChange={(e) => {this.props.handleInput(this.props.keyVal, e.target.value)}}/>
        </div>
    );
  }
}

export default Textfield;
