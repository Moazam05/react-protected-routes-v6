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
// React Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <React.Fragment>
      <ToastContainer autoClose={2000} />
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* Public Route */}

          <Route path='login' element={<Login />} />
          <Route path='linkpage' element={<LinkPage />} />
          <Route path='unauthorized' element={<Unauthorized />} />

          {/* Protected Routes */}

          {/* Admin */}
          <Route element={<RequireAuth allowedRoles={[1996]} />}>
            <Route path='/' element={<Home />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[1996]} />}>
            <Route path='admin' element={<Admin />} />
          </Route>

          {/* User */}
          <Route element={<RequireAuth allowedRoles={[2022]} />}>
            <Route path='editor' element={<Editor />} />
          </Route>

          {/* Admin and User */}
          <Route element={<RequireAuth allowedRoles={[1996, 2022]} />}>
            <Route path='lounge' element={<Lounge />} />
          </Route>

          {/* catch all */}
          <Route path='*' element={<Missing />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
