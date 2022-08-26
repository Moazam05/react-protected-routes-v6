import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';
import Layout from './components/Layout';
import Editor from './components/Editor';
import Admin from './components/Admin';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import Lounge from './components/Lounge';
import LinkPage from './components/LinkPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* Public Route */}
        <Route path='login' element={<Login />} />
        <Route path='linkpage' element={<LinkPage />} />
        <Route path='unauthorized' element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route path='/' element={<Home />} />
        <Route path='editor' element={<Editor />} />
        <Route path='admin' element={<Admin />} />
        <Route path='lounge' element={<Lounge />} />

        {/* catch all */}
        <Route path='*' element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default App;
