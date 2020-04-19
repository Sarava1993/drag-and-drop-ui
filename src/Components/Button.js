import React from 'react';
import '../App.css';

class Button extends React.Component {
  render() {
    return (
        <button className="btn btn-primary" onClick={() => this.props.title === "Submit" ?
                this.props.handleSubmit(this.props.title) : this.props.handleReset(this.props.title)}>
            {this.props.title}
        </button>
    );
  }
}

export default Button;
