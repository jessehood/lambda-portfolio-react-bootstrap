import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Projects = () => {
  const styles = {background: "#fff"};
  return (
    <div className="Projects">
      <Jumbotron style={styles}>
        <h2>Projects</h2>
      </Jumbotron>
    </div>
  );
};
export default Projects;