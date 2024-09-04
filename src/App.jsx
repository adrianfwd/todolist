// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import TodoList from './components/TodoList';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/todolist" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
