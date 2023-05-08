import React from 'react';
import { earningData } from '../../data/dummy';
import {
} from '../../constants/charts';
import CustomerChart from './CustomerChart';
import RevenueChart from './RevenueChart';
import TimeChart from './TimeChart';

const Dashboard = () => {
  return (
    <div className="p-4 mx-6 bg-white rounded-lg h-full dark:bg-secondary-dark-bg dark:text-gray-200">
      <div className="flex flex-wrap justify-between gap-4 items-center m-2">
        {earningData.map((item) => (
          <div
            key={item.title}
            className="bg-white border-1 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-2 rounded-xl "
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
            >
              {item.icon}
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">{item.amount}</span>
              <span className={`text-sm text-${item.pcColor} ml-2`}>
                {item.percentage}
              </span>
            </p>
            <p className="text-sm text-gray-400  mt-1">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-row">
        <div className="w-1/2 m-2 p-2 border-1 rounded-md">
          <RevenueChart />
        </div>
        <div className="flex-1 m-2 p-2 border-1 rounded-md">
          <CustomerChart />
        </div>
      </div>

      <div className="flex-1 m-2 p-2 border-1 rounded-md">
        <TimeChart />
      </div>
    </div>
  );
};

export default Dashboard;
