// React Imports
import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

const RequireAuth = ({ allowedRoles }) => {
  // Local Storage
  const auth = JSON.parse(localStorage.getItem('currentUser'));

  console.log('auth', auth?.userDetails?.roles);

  const location = useLocation();

  console.log(allowedRoles);

  return auth?.userDetails?.roles.find((role) =>
    allowedRoles?.includes(role)
  ) ? (
    <Outlet />
  ) : auth?.userDetails ? (
    <Navigate to='/unauthorized' />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};

export default RequireAuth;
