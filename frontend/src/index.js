import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styling/index.css';
import App from './App';
import NewApp from './NewApp';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const RootComponent = () => (
  <Routes>
    <Route path="/*" element={<App />} /> {/* App will be rendered for root and all other routes */}
    <Route path="/new/*" element={<NewApp />} /> {/* NewApp will be rendered for /new and its subroutes */}
  </Routes>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <RootComponent />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
