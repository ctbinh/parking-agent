import React, { useState } from 'react';
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
  Filter,
  Toolbar,
} from '@syncfusion/ej2-react-grids';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { Button } from '../../components';
import { parkingsData, parkingsGrid } from '../../utils/tableFormat';
import { useStateContext } from '../../contexts/ContextProvider';
import { useQuery } from '@tanstack/react-query';
import locationApi from '../../apis/location.api';
const ListParking = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filterDate, setFilterDate] = useState();
  const { currentColor } = useStateContext();
  const editing = { allowDeleting: false, allowEditing: false };
  const toolbarOptions = ['Search'];

  const {
    data: parkingVehicles,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['parkingVehicles', filterDate],
    queryFn: () => {
      return locationApi.getVehicles(filterDate);
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000,
    select: (data) => {
      const tmp = [...data?.data?.data];
      return tmp.map((item) => ({
        ...item,
        entryTime: new Date(item.entryTime),
      }));
    },
  });
  const onFilter = () => {
    setFilterDate({ from: startDate, to: endDate });
    refetch();
  };
  // if (!isLoading) console.log('parkingVehicles', parkingVehicles);

  return (
    <>
      <div className="flex flex-row justify-end items-center my-1">
        <label className="text-sm">Chọn khoảng giờ vào từ: </label>
        <div className="pt-2 mx-2 border-1 rounded-md">
          <DateTimePickerComponent
            width={'200'}
            style={{ textAlign: 'center' }}
            placeholder={'--/--/---- --:-- --'}
            value={startDate}
            onChange={(e) => {
              console.log('e.value', e.value);
              setStartDate(e.value);
            }}
          />
        </div>
        <label className="text-sm">đến: </label>
        <div className="pt-2 mx-2 border-1 rounded-md">
          <DateTimePickerComponent
            width={'200'}
            min={startDate}
            style={{ textAlign: 'center' }}
            placeholder={'--/--/---- --:-- --'}
            value={endDate}
            onChange={(e) => setEndDate(e.value)}
          />
        </div>
        <Button
          text={'Lọc'}
          onClick={onFilter}
          bgColor={currentColor}
          size="sm"
          borderRadius={'10px'}
        />
      </div>
      <GridComponent
        dataSource={parkingVehicles}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5, pageSize: 10 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {parkingsGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Search, Page, Filter, Toolbar]} />
      </GridComponent>
    </>
  );
};

export default ListParking;
