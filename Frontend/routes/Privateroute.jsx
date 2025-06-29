import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Frontend/src/auth/Authcontext';

const PrivateRoute = ({ role, children }) => {
  const { user } = useContext(AuthContext);
  console.log(user,role)
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/" />;

  return children;
};

export default PrivateRoute;
