import React, { useState } from 'react';

interface ButtonGroupProps {
  options: string[];
  selectedOption: string;
  onOptionChange: (option: string) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  options,
  selectedOption,
  onOptionChange,
}) => {
  const handleOptionChange = (option: string) => {
    onOptionChange(option);
  };

  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          onClick={() => handleOptionChange(option)}
          className={option === selectedOption ? 'active' : ''}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
