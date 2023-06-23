import React, { useState } from 'react';

interface TextInputProps {
  onInputChange: (inputValue: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onInputChange(value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <h2>Valor: {inputValue}</h2>
    </div>
  );
};

export default TextInput;