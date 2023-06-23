import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  onSelect: (selectedValue: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option);
    onSelect(option.value);
  };

  return (
    <div>
      <select
        value={selectedOption?.value || ''}
        onChange={(e) => {
          const selectedValue = e.target.value;
          const option = options.find((opt) => opt.value === selectedValue);
          if (option) {
            handleOptionSelect(option);
          }
        }}
      >
        <option value="">Selecciona una opcion</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
