// src/components/LoginPage.js
import React, { useState } from 'react';
import { getUsers } from '../services/UserServices';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const Navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const users = await getUsers();
      const user = users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        setMessage('Login successful');
        Navigate("/todolist")
      } else {
        setMessage('Invalid username or password');
      }
    } catch (error) {
      setMessage('Error connecting to the server');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Login</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
