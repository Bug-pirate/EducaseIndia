import React from 'react';
import { useNavigate } from 'react-router-dom';

const AccountSettingsPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="account-settings-container">
      <div className="content">
        <h1>Account Settings</h1>
        
        <div className="profile-section">
          <div className="profile-info">
            <div className="avatar">
              <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face" alt="Profile" />
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
        
        <button onClick={handleLogout} className="btn-logout">
          Logout
        </button>
      </div>
    </div>
  );
};

export default AccountSettingsPage;
