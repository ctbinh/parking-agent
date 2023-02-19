import React, { Fragment, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Login } from '../../pages';

const AuthGuard = ({ children }) => {
  // const { isAuthenticated } = useAuth();
  const isAuthenticated = true;
  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);
  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Login />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }
  return <Fragment>{children}</Fragment>;
};

export default AuthGuard;
