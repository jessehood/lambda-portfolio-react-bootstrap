import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Welcome = () => {
  const styles = { backgroundColor: "#fff" };
  return (
    <div>
      <Jumbotron style={styles}>
        <h2>Welcome</h2>
        <p>Welcome to my page.</p>
      </Jumbotron>
    </div>
  );
};

export default Welcome;