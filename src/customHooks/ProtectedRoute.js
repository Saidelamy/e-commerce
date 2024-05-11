import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  return currentUser ? children : navigate('/login');
};

export default ProtectedRoute;
