import React from 'react';
import './App.css';

class CardDetails extends React.Component {
  render() {
    return (
        <div>
            <div className="cardDetailsTitle">Posted Queries</div>
            <div className="cardDetailsConfirm row"><span className="col-sm-4 label">Full Name</span><div className="col-sm-7">{localStorage.getItem("fullName")}</div></div>
            <div className="cardDetailsConfirm row"><span className="col-sm-4 label">Email Address</span><div className="col-sm-7">{localStorage.getItem("email")}</div></div>
            <div className="cardDetailsConfirm row"><span className="col-sm-4 label">Problem Description</span><div className="col-sm-7">{localStorage.getItem("desc")}</div></div>
            <div className="text-right"><button className="btn btn-primary" onClick={() => this.props.handleBack()}>Back</button></div>
        </div>
    );
  }
}

export default CardDetails;
