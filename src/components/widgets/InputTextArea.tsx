import React, { useState } from 'react';

interface TextAreaProps {
  onTextAreaChange: (text: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ onTextAreaChange }) => {
  const [textValue, setTextValue] = useState<string>('');

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setTextValue(value);
    onTextAreaChange(value);
  };

  return (
    <div>
      <textarea
        value={textValue}
        onChange={handleTextAreaChange}
      />
    </div>
  );
};

export default TextArea;
