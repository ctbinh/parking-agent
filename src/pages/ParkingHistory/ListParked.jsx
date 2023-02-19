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

const ListParked = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const { currentColor } = useStateContext();
  const editing = { allowDeleting: false, allowEditing: false };
  const toolbarOptions = ['Search'];
  const onFilter = () => {};
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
            onChange={(e) => setStartDate(e.value)}
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
        dataSource={parkingsData}
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
