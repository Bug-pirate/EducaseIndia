import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import profileImage from './assets/profile.jpg';

// Welcome Component
const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
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

// SignIn Component
const SignInPage = () => {
  const navigate = useNavigate();

  return (
    <div className="signin-container">
      <div className="content">
        <h1>Signin to your PopX account</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        <form onSubmit={(e) => { e.preventDefault(); navigate('/account-settings'); }}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              required
            />
          </div>
          
          <button type="submit" className="btn-login">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

// Create Account Component
const CreateAccountPage = () => {
  const navigate = useNavigate();

  return (
    <div className="create-account-container">
      <div className="content">
        <h1>Create your PopX account</h1>
        
        <form onSubmit={(e) => { e.preventDefault(); navigate('/account-settings'); }}>
          <div className="form-group">
            <label>Full Name*</label>
            <input type="text" placeholder="Marry Doe" required />
          </div>
          
          <div className="form-group">
            <label>Phone number*</label>
            <input type="tel" placeholder="Marry Doe" required />
          </div>
          
          <div className="form-group">
            <label>Email address*</label>
            <input type="email" placeholder="Marry Doe" required />
          </div>
          
          <div className="form-group">
            <label>Password*</label>
            <input type="password" placeholder="Marry Doe" required />
          </div>
          
          <div className="form-group">
            <label>Company name</label>
            <input type="text" placeholder="Marry Doe" />
          </div>
          
          <div className="form-group radio-group">
            <label>Are you an Agency?*</label>
            <div className="radio-options">
              <label className="radio-label">
                <input type="radio" name="isAgency" value="yes" defaultChecked />
                <span className="radio-custom"></span>
                Yes
              </label>
              <label className="radio-label">
                <input type="radio" name="isAgency" value="no" />
                <span className="radio-custom"></span>
                No
              </label>
            </div>
          </div>
          
          <button type="submit" className="btn-create-account">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

// Account Settings Component
const AccountSettingsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="account-settings-container">
      <div className="content">
        <h1>Account Settings</h1>
        
        <div className="profile-section">
          <div className="profile-info">
            <div className="avatar">
              <img src={profileImage} alt="Profile" />
              <div className="status-indicator"></div>
            </div>
            <div className="user-details">
              <h3>Marry Doe</h3>
              <p>Marry@Gmail.Com</p>
            </div>
          </div>
          
          <div className="description">
            <p>Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
          </div>
        </div>
        
        <button onClick={() => navigate('/')} className="btn-logout">
          Logout
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <div className="mobile-container">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="/account-settings" element={<AccountSettingsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
