import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

const DropDown = ({ currentMode, dropdownData, value, onChange }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={
        typeof dropdownData[0] !== 'string' && { text: 'title', value: 'key' }
      }
      style={{ border: 'none', color: currentMode === 'Dark' && 'white' }}
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
      value={value}
      onChange={(e) => onChange(e.target.itemData)}
    />
  </div>
);

export default DropDown;
