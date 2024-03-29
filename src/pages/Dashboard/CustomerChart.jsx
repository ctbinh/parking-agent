import React, { useMemo, useState } from 'react';
import DropDown from '../../components/DropDown';
import { useStateContext } from '../../contexts/ContextProvider';
import { LineChart } from '../../components';
import {
  XAxisLineChartSetting,
  YAxisCustomerChart,
} from '../../constants/charts';
import { lineChartData } from '../../data/dummy';
import { filterDateTimeData } from '../../utils/helpingFunction';

const CustomerChart = () => {
  const { currentMode } = useStateContext();
  const [filterType, setFilterType] = useState(
    JSON.parse(localStorage.getItem('filterTypeCustomerChart')) ??
      XAxisLineChartSetting[0]
  );
  const data = lineChartData[1];
  const changeFilterType = (value) => {
    localStorage.setItem('filterTypeCustomerChart', JSON.stringify(value));
    setFilterType(value);
  };
  const filteredData = useMemo(
    () => filterDateTimeData(data, filterType.key),
    [data, filterType]
  );

  return (
    <>
      <div className="flex justify-between items-center gap-2 mb-4">
        <p className="text-xl font-semibold">Lượng khách ra vào</p>
        <DropDown
          currentMode={currentMode}
          dropdownData={XAxisLineChartSetting}
          value={filterType.key}
          onChange={changeFilterType}
        />
      </div>
      <LineChart
        id="customers"
        LinePrimaryXAxis={filterType.setting}
        LinePrimaryYAxis={YAxisCustomerChart}
        data={filteredData}
      />
    </>
  );
};

export default CustomerChart;
