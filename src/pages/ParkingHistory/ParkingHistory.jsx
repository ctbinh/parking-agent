import React, { useState } from 'react';
import ListParked from './ListParked';
import ListParking from './ListParking';
import Popup from '../../components/Popup';
import UserInfo from './components/UserInfo';

const tabs = [
  {
    id: 0,
    title: 'Xe đã ra',
    value: 'parked',
  },
  {
    id: 1,
    title: 'Xe chưa ra',
    value: 'parking',
  },
];

const ParkingHistory = () => {
  const [targetTab, setTargetTab] = useState(tabs[0].value);

  return (
    <div className="p-6 mx-6 bg-white rounded-lg">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {tabs.map((item) => {
          return (
            <li key={item.id} className="mr-2">
              <div
                key={item.id}
                onClick={() => setTargetTab(item.value)}
                className={`inline-block p-4 rounded-t-lg cursor-pointer ${
                  targetTab === item.value ? 'active' : 'inactive'
                }`}
              >
                {item.title}
              </div>
            </li>
          );
        })}
      </ul>
      {targetTab === tabs[0].value ? <ListParked /> : <ListParking />}
      <Popup header={'Thông tin cá nhân'} width={'35%'}>
        <UserInfo />
      </Popup>
    </div>
  );
};

export default ParkingHistory;
