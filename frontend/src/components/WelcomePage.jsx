import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="steps-indicator">
        <div className="step active">1</div>
        <div className="step">2</div>
      </div>
      
      <div className="content">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        <div className="buttons">
          <button 
            className="btn-primary"
            onClick={() => navigate('/create-account')}
          >
            Create Account
          </button>
          <button 
            className="btn-secondary"
            onClick={() => navigate('/signin')}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
