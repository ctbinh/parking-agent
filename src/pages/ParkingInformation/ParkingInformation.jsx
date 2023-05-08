import React from 'react';
import ChangePassword from './components/ChangePassword';
import Email from './components/Email';
import Parking from './components/Parking';
import locationApi from '../../apis/location.api';
import { useQuery } from '@tanstack/react-query';

function ParkingInformation() {
  const { data: locationInformation, isLoading } = useQuery({
    queryKey: ['location'],
    queryFn: () => {
      return locationApi.getLocation();
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000,
    select: (data) => {
      return data?.data?.data[0];
    },
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-6 mx-6 bg-white rounded-lg">
      <div>
        <div className="flex flex-col gap-5">
          <Parking locationInformation={locationInformation} />
          <Email locationInformation={locationInformation} />
          <ChangePassword />
        </div>
      </div>
    </div>
  );
}

export default ParkingInformation;
