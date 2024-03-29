import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import React, { useEffect } from 'react';
import { FiSettings } from 'react-icons/fi';
import { Outlet } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ThemeSettings from './ThemeSettings';

const DashboardLayout = ({ children }) => {
  const { activeMenu, currentColor, themeSettings, setThemeSettings } =
    useStateContext();
  useEffect(() => {
    console.log(children);
  }, [children]);
  return (
    <>
      <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
        <TooltipComponent content="Settings" position="Top">
          <button
            type="button"
            onClick={() => setThemeSettings(true)}
            style={{ background: currentColor, borderRadius: '50%' }}
            className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>
      {activeMenu ? (
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">
          <Sidebar />
        </div>
      )}
      <div
        className={
          activeMenu
            ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
            : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
        }
      >
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
          <Navbar />
        </div>
        <div>
          {themeSettings && <ThemeSettings />}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
