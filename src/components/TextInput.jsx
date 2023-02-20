import React from 'react';

const TextInput = ({ fieldName, type }) => {
  return (
    <div class="flex flex-col my-4 w-full">
      <span class="mb-2">{fieldName}</span>
      <input type={type ? type : 'text'} class="p-3 bg-gray-100 rounded-md" />
    </div>
  );
};

export default TextInput;
