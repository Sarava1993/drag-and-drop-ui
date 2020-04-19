import React from 'react';
import '../App.css';
import { footerList } from '../utils/Cards';

class Footer extends React.Component {
  render() {
    return (
        <footer className="customFooter">
          <ul>
              {
                footerList.map((fList, i) => {
                  return <li key={i}>{fList}</li>
                })
              }
          </ul>
        </footer>
    );
  }
}

export default Footer;
