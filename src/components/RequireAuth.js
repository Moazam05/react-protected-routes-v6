// React Imports
import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

const RequireAuth = () => {
  // Local Storage
  const auth = JSON.parse(localStorage.getItem('currentUser'));

  const location = useLocation();

  return auth?.userDetails ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};

export default RequireAuth;
