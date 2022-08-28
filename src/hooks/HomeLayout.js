import { Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

export const HomeLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to='/' replace />;
  }

  return <div>{outlet}</div>;
};
