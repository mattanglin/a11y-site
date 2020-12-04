import React from 'react';
import { Router, Link } from '@reach/router';
import logo from './logo.svg';
import './App.css';

const Home = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
    <Link to="/a11y">a11y</Link>
  </header>
);

const A11y = () => (
  <iframe
    src="https://dev-portal.audioeye.com/accessibility-statement.html?domain=http://a11y.matthewanglin.com/"
    title="Accessibility Statement"
    style={{ width: '100%', height: '4700px' }}
    frameBorder="0"
  />
);

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <A11y path="/a11y" />
      </Router>
    </div>
  );
}

export default App;
