import React from 'react';
import '../App.css';
import trimbleLogo from '../utils/trimbleLogo.png';
import { CONSTANTS } from '../utils/Constants';

class Header extends React.Component {
  render() {
    return (
        <header className="customHeader" style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          <img src={trimbleLogo} className="appLogo" alt="trimbleLogo"/>
          <div className="appTitle"><span>{CONSTANTS.CAPTION_ONE}</span>{CONSTANTS.CAPTION_TWO}</div>
        </header>
    );
  }
}

export default Header;
