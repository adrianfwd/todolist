// src/services/userService.js
const API_URL = 'http://localhost:5000/users';

// Obtener todos los usuarios
export const getUsers = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const users = await response.json();
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Registrar un nuevo usuario
export const registerUser = async (username, password) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};
