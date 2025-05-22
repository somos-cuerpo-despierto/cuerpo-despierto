import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Router from './config/Router';
import { AuthProvider } from './config/AuthContext';



ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </AuthProvider>
);
