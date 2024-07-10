import React from 'react';
import { useNavigate } from "react-router-dom";


const SuccessPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem('user');
    console.log('Logged out successfully');
    navigate('/');
  };

  return (
    <div>
      <h1>Login Successful!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default SuccessPage;
