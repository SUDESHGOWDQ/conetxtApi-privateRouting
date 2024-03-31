import { useContext } from 'react';
import { Authcontext } from '../Context/AuthContextProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const authContext = useContext(Authcontext);

  if (!authContext.isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;