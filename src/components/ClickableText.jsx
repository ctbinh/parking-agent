import React from 'react';

const ClickableText = ({
  textAlign,
  width,
  color,
  text,
  onClick,
  styleCustom,
}) => {
  return (
    <button
      onClick={onClick}
      class={`text-${textAlign} w-${width} text-[${color}] ${styleCustom}`}
    >
      {text}
    </button>
  );
};

export default ClickableText;
