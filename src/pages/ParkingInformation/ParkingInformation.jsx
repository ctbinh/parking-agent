import React from 'react';
import { Header } from '../../components';
import ChangePassword from './components/ChangePassword';
import Email from './components/Email';
import Parking from './components/Parking';

function ParkingInformation() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Thông tin" />
      <div>
        <div className="flex flex-col gap-20">
          <Parking />
          <Email />
          <ChangePassword />
        </div>
      </div>
    </div>
  );
}

export default ParkingInformation;
