import React from 'react';
import { Header } from '../../components';
import ChangePassword from './components/ChangePassword';
import Email from './components/Email';
import Parking from './components/Parking';

function ParkingInformation() {
  return (
    <div className="p-6 mx-6 bg-white rounded-lg">
      {/* <Header category="App" title="Thông tin" /> */}
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
