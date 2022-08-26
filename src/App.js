// React Imports
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// CSS Imports
import './App.css';
// Custom Imports
import Login from './components/Login';
import Home from './components/Home';
import Layout from './components/Layout';
import Editor from './components/Editor';
import Admin from './components/Admin';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import Lounge from './components/Lounge';
import LinkPage from './components/LinkPage';
// Private Route Imports
import RequireAuth from './components/RequireAuth';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* Public Route */}
        <Route path='login' element={<Login />} />
        <Route path='linkpage' element={<LinkPage />} />
        <Route path='unauthorized' element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route element={<RequireAuth />}>
          <Route path='/' element={<Home />} />
          <Route path='editor' element={<Editor />} />
          <Route path='admin' element={<Admin />} />
          <Route path='lounge' element={<Lounge />} />
        </Route>

        {/* catch all */}
        <Route path='*' element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default App;
