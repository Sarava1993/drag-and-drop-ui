import React, { Component } from 'react';
import trimbleLogo from './utils/trimbleLogo.png';
import './App.css';
import { footerList } from './utils/Cards';
import { CONSTANTS } from './utils/Constants';

class App extends Component {
  render() {
    return (
      <div>
        <header className="customHeader" style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          <img src={trimbleLogo} className="appLogo" alt="trimbleLogo"/>
          <div className="appTitle"><span>{CONSTANTS.CAPTION_ONE}</span>{CONSTANTS.CAPTION_TWO}</div>
        </header>
        <div className="appIntro" style={{ position: "relative" }}>
            {CONSTANTS.CONTENT}
        </div>
        <footer className="customFooter">
          <ul>
              {
                footerList.map((fList) => {
                  return <li>{fList}</li>
                })
              }
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;


