import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { CONSTANTS } from './utils/Constants';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <div className="appIntro" style={{ position: "relative", textAlign: "center" }}>
            {CONSTANTS.CONTENT}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;


