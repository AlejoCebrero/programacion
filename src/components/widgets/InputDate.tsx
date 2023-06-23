import React, { useState } from 'react';

interface DateInputProps {
  onDateSelect: (selectedDate: string) => void;
}

const InputDate: React.FC<DateInputProps> = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState<string>('');

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = e.target.value;
    setSelectedDate(selectedValue);
    onDateSelect(selectedValue);
  };

  return (
    <div>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default InputDate;