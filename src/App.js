import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';
import { Login } from './pages';
import DashboardLayout from './components/DashboardLayout';
import ParkingInformation from './pages/ParkingInformation/ParkingInformation';
import Tickets from './pages/Ticket/Tickets';
import ParkingHistory from './pages/ParkingHistory/ParkingHistory';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/404';
import { authentication } from './utils/authentication';

const PrivateRoute = ({ path, element, children }) => {
  const isAuthenticated = authentication.getLoginLocalStorage();
  if (!isAuthenticated) {
    // user is not authenticated
    return <Navigate to="/login" replace />;
  }
  return children;
};

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, [setCurrentColor, setCurrentMode]);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <div className="flex relative dark:bg-main-dark-bg">
        <Routes>
          <Route
            element={
              <PrivateRoute>
                <DashboardLayout />
              </PrivateRoute>
            }
          >
            <Route path="/" element={<Dashboard />} />
            <Route path="/parking" element={<ParkingHistory />} />
            <Route
              path="/parking-information"
              element={<ParkingInformation />}
            />
            <Route path="/tickets" element={<Tickets />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
