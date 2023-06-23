import React, { useState } from 'react';

interface RadioButtonProps {
  options: string[];
  onOptionSelect: (selectedOption: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ options, onOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    onOptionSelect(selectedValue);
  };

  return (
    <div>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={handleOptionChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default RadioButton;