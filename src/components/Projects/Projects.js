import React from "react";
import { Jumbotron } from "react-bootstrap";
import './Projects.css';
const Projects = () => {
  const styles = { background: "#fff" };
  return (
    <div className="Projects">
      <Jumbotron style={styles}>
        <h2>Projects</h2>
        <div className="cards">
          <div className="card">
            <div className="card-header">Project 1</div>
            <div className="card-main">
              <div className="main-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <div>
                  <a href="#">Link</a>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">Project 2</div>
            <div className="card-main">
              <div className="main-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <div>
                  <a href="#">Link</a>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">Project 3</div>
            <div className="card-main">
              <div className="main-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <div>
                  <a href="#">Link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
};
export default Projects;
