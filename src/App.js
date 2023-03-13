import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  Login,
} from './pages';
import DashboardLayout from './components/DashboardLayout';
import ParkingInformation from './pages/ParkingInformation/ParkingInformation';
import Tickets from './pages/Ticket/Tickets';
import ParkingHistory from './pages/ParkingHistory/ParkingHistory';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/404';
import NotFound from './pages/404';

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
          <Route path="/" element={<DashboardLayout />}>
            <Route path="/" element={<Ecommerce />} />
            <Route path="/dashboard" element={<Dashboard />} />
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
