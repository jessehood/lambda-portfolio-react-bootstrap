import React from "react";
import { Jumbotron } from "react-bootstrap";

const Welcome = () => {
  const styles = { backgroundColor: "#f6f6f6" };
  return <div>
      <Jumbotron style={styles}>
        <h2>About Me</h2>
        <p>
          My name is Jesse Hood and I am 24 years old. I am currently
          attending Lambda School and have a degree in computer programming
          (Associate in Applied Science) from Caldwell Community College &amp;
          Technical Institute. I like to spend my free time lifting weights,
          playing video games, and learning more about programming. My current
          long term goals are to start a career in software engineering and
          win a powerlifting competition.
        </p>
      </Jumbotron>
    </div>;
};

export default Welcome;
