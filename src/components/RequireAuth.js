// // React Imports
// import React from 'react';
// import { useLocation, Navigate, Outlet } from 'react-router-dom';
// // Context Provider
// import { useAuthContext } from '../context/AuthProvider';

// const RequireAuth = ({ allowedRoles }) => {
//   // Context
//   const { auth } = useAuthContext();

//   const location = useLocation();

//   return auth &&
//     auth?.userDetails?.roles.find((role) => allowedRoles?.includes(role)) ? (
//     <Outlet />
//   ) : auth?.userDetails ? (
//     <Navigate to='/unauthorized' />
//   ) : (
//     <Navigate to='/login' state={{ from: location }} replace />
//   );
// };

// export default RequireAuth;
