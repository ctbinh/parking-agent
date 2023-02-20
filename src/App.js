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
import ParkingHistory from './pages/ParkingHistory/ParkingHistory';
import ParkingInformation from './pages/ParkingInformation/ParkingInformation';
import Dashboard from './pages/Dashboard';

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

            {/* pages  */}
            <Route path="/orders" element={<Orders />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/customers" element={<Customers />} />

            {/* apps  */}
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/color-picker" element={<ColorPicker />} />
            <Route
              path="/parking-information"
              element={<ParkingInformation />}
            />

            {/* charts  */}
            <Route path="/line" element={<Line />} />
            <Route path="/area" element={<Area />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/color-mapping" element={<ColorMapping />} />
            <Route path="/pyramid" element={<Pyramid />} />
            <Route path="/stacked" element={<Stacked />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
