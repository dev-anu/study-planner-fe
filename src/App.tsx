import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './PrivateRoute';
import './App.css';
import Analytics from './pages/Analytics';
import Projects from './pages/Projects';
import Issues from './pages/Issues';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Analytics /> 
            </PrivateRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <PrivateRoute>
              <Projects /> 
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Issues /> 
            </PrivateRoute>
          }
        />
        {/* Redirect to dashboard if someone tries to access the root */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
