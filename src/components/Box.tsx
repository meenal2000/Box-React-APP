// src/Box.tsx
import React, { useState } from 'react';
import '../styles.css';

interface BoxProps {
  index: number;
  colorBox: (index: number) => void;
}

const Box: React.FC<BoxProps> = ({ index, colorBox }) => {
  const [isColored, setIsColored] = useState(false);

  const handleClick = () => {
    if (!isColored) {
      setIsColored(true);
      colorBox(index);
    }
  };

  return (
    <div
      id={`box-${index}`}
      className={`box box-${index} ${isColored ? 'colored' : ''}`}
      onClick={handleClick}
    >
      Click me!
    </div>
  );
};

export default Box;
