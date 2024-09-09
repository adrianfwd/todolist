import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'; // Importa HomePage desde la carpeta pages
import RegisterPage from '../pages/RegisterPage'; // Importa RegisterPage desde la carpeta pages
import LoginPage from '../pages/LoginPage'; // Importa LoginPage desde la carpeta pages
import Paquetes from '../pages/Servicios';
import Informacion from '../pages/Informacion';


function Routing() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/paquetes" element={<Paquetes />} />
        <Route path="/informacion" element={<Informacion />} />
      </Routes>
    </Router>
  );
}

export default Routing;
