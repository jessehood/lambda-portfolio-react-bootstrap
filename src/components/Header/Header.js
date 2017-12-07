import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  const styles = {background: "#f6f6f6"};
  return (
    <div className="Header">
      <Jumbotron style={styles}>
        <h1>Jesse Hood</h1>
      </Jumbotron>
    </div>
  );
};
export default Header;