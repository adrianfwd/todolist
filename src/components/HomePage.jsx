// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/todolist">todolist</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
