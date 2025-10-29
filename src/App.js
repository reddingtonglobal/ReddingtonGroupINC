import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Redirect to the main website after a small delay
    const redirectUrl = 'https://www.reddingtonglobal.com';
    
    // Use a timeout to ensure the component renders before redirect
    const timer = setTimeout(() => {
      window.location.href = redirectUrl;
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <div className="loading-screen">
        <div className="logo-section">
          <h1>Reddington Group INC</h1>
          <p className="subtitle">Global Consulting Services</p>
        </div>
        <div className="spinner"></div>
        <p className="redirect-message">
          Redirecting to our main website...
        </p>
        <p className="manual-redirect">
          If you are not redirected automatically, 
          <a href="https://www.reddingtonglobal.com"> click here</a>
        </p>
      </div>
    </div>
  );
}

export default App;
