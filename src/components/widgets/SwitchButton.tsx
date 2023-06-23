import React, { useState } from 'react';

interface SwitchButtonProps {
  onToggle: (checked: boolean) => void;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ onToggle }) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleToggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onToggle(newChecked);
  };

  return (
    <div className={`switch ${checked ? 'switch-on' : ''}`} onClick={handleToggle}>
      <div className={`slider ${checked ? 'slider-on' : ''}`}></div>
    </div>
  );
};

export default SwitchButton;