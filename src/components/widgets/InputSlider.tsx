import React, { useState } from 'react';

interface SliderProps {
  min: number;
  max: number;
}

const Slider: React.FC<SliderProps> = ({ min, max }) => {
  const [value, setValue] = useState<number>(min);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = parseInt(e.target.value);
    setValue(selectedValue);
  };

  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleSliderChange}
      />
      <h2>Valor: {value}</h2>
    </div>
  );
};

export default Slider;