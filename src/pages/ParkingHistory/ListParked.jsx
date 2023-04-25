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
import { parkedsGrid, parkingsData } from '../../utils/tableFormat';
import { useStateContext } from '../../contexts/ContextProvider';
import locationApi from '../../apis/location.api';
import { useQuery } from '@tanstack/react-query';

const ListParked = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filterDate, setFilterDate] = useState();
  const { currentColor } = useStateContext();
  const editing = { allowDeleting: false, allowEditing: false };
  const toolbarOptions = ['Search'];
  const {
    data: parkedVehicles,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['parkedVehicles', filterDate],
    queryFn: () => {
      return locationApi.getParkedVehicles(filterDate);
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000,
    select: (data) => {
      const tmp = [...data?.data?.data];
      return tmp.map((item) => ({
        ...item,
        entryTime: new Date(item.entryTime),
        exitTime: new Date(item.exitTime),
      }));
    },
  });
  const onFilter = () => {
    setFilterDate({ from: startDate, to: endDate });
    refetch();
  };
  return (
    <>
      <div className="flex flex-row justify-end items-center my-1">
        <label className="text-sm">Chọn khoảng giờ ra từ: </label>
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
        dataSource={parkedVehicles}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5, pageSize: 10 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {parkedsGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Search, Page, Filter, Toolbar]} />
      </GridComponent>
    </>
  );
};

export default ListParked;
