import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Contact = () => {
  const styles = {background: "#f6f6f6"};
  return (
    <div className="Contact">
      <div style={styles}>
        <h2>Contact me</h2>
        <p>
          <a href="https://github.com/jessehood/">
            <img height="32" width="32" src="images/github-256.png" /> jessehood
          </a>
        </p>
        <p style={{marginBottom: '0'}}>
          <a href="mailto:jessewchs@gmail.com">
            <img height="32" width="32" src="images/gmail.ico" /> jessewchs@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};
export default Contact;