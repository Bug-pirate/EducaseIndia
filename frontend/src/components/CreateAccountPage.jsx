import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccountPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle account creation logic here
    navigate('/account-settings');
  };

  return (
    <div className="create-account-container">
      <div className="content">
        <h1>Create your PopX account</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name*</label>
            <input
              type="text"
              name="fullName"
              placeholder="Marry Doe"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Phone number*</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Marry Doe"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Email address*</label>
            <input
              type="email"
              name="email"
              placeholder="Marry Doe"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Password*</label>
            <input
              type="password"
              name="password"
              placeholder="Marry Doe"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Company name</label>
            <input
              type="text"
              name="companyName"
              placeholder="Marry Doe"
              value={formData.companyName}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="form-group radio-group">
            <label>Are you an Agency?*</label>
            <div className="radio-options">
              <label className="radio-label">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === 'yes'}
                  onChange={handleInputChange}
                />
                <span className="radio-custom"></span>
                Yes
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === 'no'}
                  onChange={handleInputChange}
                />
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

export default CreateAccountPage;
