// Import library React dan komponen React Router
import React from 'react';
import { BrowserRouter as Routes, Route, BrowserRouter } from 'react-router-dom';

// Import komponen halaman
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

// Komponen router
const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" Components={LoginForm} /> {/* Halaman login */}
        <Route path="/RegistrationForm" Components={RegistrationForm} /> {/* Halaman registrasi */}
    </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;