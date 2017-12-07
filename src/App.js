import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact.js';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header>
            <NavigationBar />
          </header>
          <main>
            <Header />
            <Welcome />
            <About />
            <Projects />
          </main>
        </div>
        <footer>
          <Contact />
        </footer>
      </div>
    );
  }
}

export default App;
