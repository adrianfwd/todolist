import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import NoteList from './components/NoteList';

function App() {
  const [notes, set_notes] = useState([
  ]);

  const handle_add_notes = (new_note) => {
    set_notes(prev_notes => [...prev_notes, new_note]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/notelist" element={<NoteList notes={notes} handle_add_notes={handle_add_notes} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
