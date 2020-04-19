import React from 'react';
import '../App.css';
import { navbarList } from '../utils/Cards';
import { CONSTANTS } from '../utils/Constants';

class Navbar extends React.Component {
  render() {
    return (
        <nav className="customNavbar">
          <div>{CONSTANTS.HOME}</div>
          <ul>
            {
              navbarList.map((navList, i) => {
                return <li key={i}>{navList}</li>
              })
            }
          </ul>
        </nav>
    );
  }
}

export default Navbar;
