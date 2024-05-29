import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import React from 'react';


const App = () => {
  return (
    <div>
      <h1>My React App</h1>
      <LoginForm /> {/* Render router */}
    </div>
  );
}

export default App;

