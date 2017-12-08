import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <Jumbotron className="Header__content">
        <h1 className="Header__title">Jesse Hood</h1>
      </Jumbotron>
    </div>
  );
};
export default Header;