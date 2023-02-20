import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const GridParkingTotalTime = () => <div>12</div>;
const GridParkingUser = (props) => {
  const { displayPopup } = useStateContext();
  return (
    <TooltipComponent content="Xem thông tin người dùng">
      <div onClick={displayPopup} className="text-green-500 cursor-pointer">
        {props.user.fullname}
      </div>
    </TooltipComponent>
  );
};

export const parkingsGrid = [
  {
    field: 'license_plate',
    headerText: 'Biển số',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'user.fullname',
    headerText: 'Tên',
    width: '150',
    textAlign: 'Center',
    template: GridParkingUser,
  },
  {
    field: 'entry_time',
    headerText: 'Thời gian vào',
    width: '150',
    format: 'dd/MM/yyyy hh:mm',
    textAlign: 'Center',
  },
  {
    headerText: 'Tổng thời gian',
    width: '120',
    textAlign: 'Center',
    template: GridParkingTotalTime,
  },
  { field: 'fee', headerText: 'Phí', width: '120', textAlign: 'Center' },
];

export const parkedsGrid = [
  {
    field: 'license_plate',
    headerText: 'Biển số',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'user.fullname',
    headerText: 'Tên',
    width: '150',
    textAlign: 'Center',
    template: GridParkingUser,
  },
  {
    field: 'entry_time',
    headerText: 'Thời gian vào',
    width: '150',
    format: 'dd/MM/yyyy hh:mm',
    textAlign: 'Center',
  },
  {
    field: 'exit_time',
    headerText: 'Thời gian ra',
    width: '150',
    format: 'dd/MM/yyyy hh:mm',
    textAlign: 'Center',
  },
  {
    headerText: 'Tổng thời gian',
    width: '120',
    textAlign: 'Center',
    template: GridParkingTotalTime,
  },
  { field: 'fee', headerText: 'Phí', width: '120', textAlign: 'Center' },
];

export const parkingsData = [
  {
    parking_id: 1,
    license_plate: '60 - B6 75901',
    entry_time: new Date('02/01/2023'),
    exit_time: new Date('02/01/2023'),
    fee: 12000,
    user: {
      user_id: '1',
      fullname: 'Cao Thanh Binh',
      phone: '0372358493',
    },
  },
  {
    parking_id: 2,
    license_plate: '60 - B6 75901',
    entry_time: new Date('01/01/2023'),
    exit_time: new Date('01/01/2023'),
    fee: 4000,
    user: {
      user_id: '1',
      fullname: 'Cao Thanh Binh',
      phone: '0372358493',
    },
  },
  {
    parking_id: 3,
    license_plate: '60 - B6 75902',
    entry_time: new Date('01/01/2023'),
    exit_time: new Date('01/01/2023'),
    fee: 4000,
    user: {
      user_id: '2',
      fullname: 'Nguyen Xuan Hieu',
      phone: '0372358494',
    },
  },
];
