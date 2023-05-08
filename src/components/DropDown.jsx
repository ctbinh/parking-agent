import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

const DropDown = ({ currentMode, dropdownData, value, onChange }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: 'Time', value: 'Id' }}
      style={{ border: 'none', color: currentMode === 'Dark' && 'white' }}
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
      value={value}
      onChange={(e) => onChange(e.value)}
    />
  </div>
);

export default DropDown;
