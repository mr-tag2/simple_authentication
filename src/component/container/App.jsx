import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Dashboard />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
