import React from 'react';

const TextInput = ({ fieldName, type, value, handleChange }) => {
  return (
    <div class="flex flex-col my-4 w-full">
      <span class="mb-2">{fieldName}</span>
      <input
        type={type ? type : 'text'}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        class="p-3 bg-gray-100 rounded-md"
      />
    </div>
  );
};

export default TextInput;
