import React from 'react';
import '../styles/home.css';

const Home = () => (
  <div className="container">
    <header>
      <h1>Welcome to My Website</h1>
    </header>
    <p>
      This is the home page content. Customize it as needed.
      <br />
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
    </p>
    <footer>
      &copy; 2024 Your Website
    </footer>
  </div>
);

export default Home;
