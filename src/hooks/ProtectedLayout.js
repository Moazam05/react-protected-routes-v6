import { Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

export const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to='/login' />;
  }

  return <div>{outlet}</div>;
};
