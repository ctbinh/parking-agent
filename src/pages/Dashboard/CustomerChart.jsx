import React, { useState } from 'react';
import DropDown from '../../components/DropDown';
import { useStateContext } from '../../contexts/ContextProvider';
import { DROP_DOWN_CUSTOMER_CHART } from '../../constants/dashboard';
import { LineChart } from '../../components';
import { XAxisRevenueChart, YAxisRevenueChart } from '../../constants/charts';
import { lineChartData } from '../../data/dummy';
import { filterDateTimeData } from '../../utils/helpingFunction';

const CustomerChart = () => {
  const { currentMode } = useStateContext();
  const [filterType, setFilterType] = useState(DROP_DOWN_CUSTOMER_CHART[0]);
  const [data, setData] = useState(lineChartData[0]);
  const [filteredData, setFilteredData] = useState(lineChartData[0]);
  const changeFilterType = (value) => {
    setFilterType(value);
    setFilteredData(filterDateTimeData(data, value));
  };

  return (
    <>
      <div className="flex justify-between items-center gap-2 mb-4">
        <p className="text-xl font-semibold">Lượng khách ra vào</p>
        <DropDown
          currentMode={currentMode}
          dropdownData={DROP_DOWN_CUSTOMER_CHART}
          value={filterType}
          onChange={changeFilterType}
        />
      </div>
      <LineChart
        id="customers"
        LinePrimaryXAxis={XAxisRevenueChart}
        LinePrimaryYAxis={YAxisRevenueChart}
        data={filteredData}
      />
    </>
  );
};

export default CustomerChart;
