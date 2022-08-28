// React Imports
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// CSS Imports
import './App.css';
// Custom Imports
import Login from './components/Login';
import Home from './components/Home';
import Editor from './components/Editor';
import Admin from './components/Admin';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import Lounge from './components/Lounge';
import LinkPage from './components/LinkPage';
// React Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Protected Routes
import { ProtectedLayout } from './hooks/ProtectedLayout';
import { HomeLayout } from './hooks/HomeLayout';

const App = () => {
  return (
    <React.Fragment>
      <ToastContainer autoClose={2000} />
      <Routes>
        {/* Public Routes */}
        <Route element={<HomeLayout />}>
          <Route path='/login' element={<Login />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='admin' element={<Admin />} />
          <Route path='editor' element={<Editor />} />
          <Route path='lounge' element={<Lounge />} />
        </Route>

        {/* 404 Page */}
        <Route path='*' element={<Missing />} />
        <Route path='linkpage' element={<LinkPage />} />
        <Route path='unauthorized' element={<Unauthorized />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
