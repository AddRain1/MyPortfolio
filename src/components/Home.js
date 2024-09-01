import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => (
  <div className="home-container">
    <div className="intro">
      <h1>Adrian Vo</h1>
      <p>B.S. in Mathematics - Computer Science | Web Developer</p>
    </div>
    <div className="nav-buttons">
      <Link to="/about" className="btn">About Me</Link>
      <Link to="/projects" className="btn">Projects</Link>
      <Link to="/contact" className="btn">Contact Me</Link>
    </div>
  </div>
);

export default Home;
