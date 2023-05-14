import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const GridParkingUser = (props) => {
  const { displayPopup } = useStateContext();
  return (
    <TooltipComponent content="Xem thông tin người dùng">
      <div onClick={displayPopup} className="text-green-500 cursor-pointer">
        {props.user.fullName}
      </div>
    </TooltipComponent>
  );
};

export const parkingsGrid = [
  {
    field: 'license_plates',
    headerText: 'Biển số',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'user.fullName',
    headerText: 'Tên',
    width: '150',
    textAlign: 'Center',
    template: GridParkingUser,
  },
  {
    field: 'entryTime',
    headerText: 'Thời gian vào',
    width: '150',
    format: 'dd/MM/yyyy hh:mm',
    textAlign: 'Center',
  },
  {
    field: 'totalTime',
    headerText: 'Tổng thời gian',
    width: '120',
    textAlign: 'Center',
  },
  { field: 'fee', headerText: 'Phí', width: '120', textAlign: 'Center' },
];

export const parkedsGrid = [
  {
    field: 'license_plates',
    headerText: 'Biển số',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'user.fullName',
    headerText: 'Tên',
    width: '150',
    textAlign: 'Center',
    template: GridParkingUser,
  },
  {
    field: 'entryTime',
    headerText: 'Thời gian vào',
    width: '150',
    format: 'dd/MM/yyyy hh:mm',
    textAlign: 'Center',
  },
  {
    field: 'exitTime',
    headerText: 'Thời gian ra',
    width: '150',
    format: 'dd/MM/yyyy hh:mm',
    textAlign: 'Center',
  },
  {
    field: 'totalTime',
    headerText: 'Tổng thời gian',
    width: '120',
    textAlign: 'Center',
  },
  { field: 'fee', headerText: 'Phí', width: '120', textAlign: 'Center' },
];

export const parkingsData = [
  {
    parking_id: 1,
    license_plates: '60 - B6 75901',
    entryTime: new Date('2023-04-18T10:30:00.000Z'),
    exitTime: new Date('2023-04-18T12:30:00.000Z'),
    totalTime: '02:00',
    fee: 12000,
    user: {
      user_id: '1',
      fullName: 'Cao Thanh Binh',
      phone: '0372358493',
    },
  },
  {
    parking_id: 2,
    license_plates: '60 - B6 75902',
    entryTime: new Date('2023-04-18T10:30:00.000Z'),
    exitTime: new Date('2023-04-18T11:00:00.000Z'),
    totalTime: '00:30',
    fee: 4000,
    user: {
      user_id: '2',
      fullName: 'Đặng Hoài Bão',
      phone: '0969799584',
    },
  },
  {
    parking_id: 3,
    license_plates: '60 - B6 75903',
    entryTime: new Date('2023-04-18T10:30:00.000Z'),
    exitTime: new Date('2023-04-18T11:00:00.000Z'),
    totalTime: '00:30',
    fee: 4000,
    user: {
      user_id: '3',
      fullName: 'Nguyễn Xuân Hiếu',
      phone: '0969999999',
    },
  },
];
