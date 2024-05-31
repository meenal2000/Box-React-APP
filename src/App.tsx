// src/App.tsx
import  { useState, useEffect } from 'react';
import Box from './components/Box';
import './App.css';

function App() {
  const [coloredBoxes, setColoredBoxes] = useState<number[]>([]);

  const colorBox = (index: number) => {
    setColoredBoxes([...coloredBoxes, index]);
  };

  useEffect(() => {
    if (coloredBoxes.length === 7) {
      setTimeout(decolorBoxes, 1000); // Start decoloring after 1 second
    }
  }, [coloredBoxes]);

  const decolorBoxes = () => {
    const boxesToDecolor = coloredBoxes.slice().reverse();
    let delay = 0;
    boxesToDecolor.forEach((index) => {
      setTimeout(() => {
        const box = document.getElementById(`box-${index}`);
        if (box) {
          box.style.backgroundColor = 'white'; // Set background color to white
          box.click();
        }
      }, delay);
      delay += 1000; // Delay between decoloring each box
    });
  };

  return (
    <div className="App">
      <div className="box-container">
        {[0, 1, 2, 3, 4, 5, 6].map((index) => (
          <Box key={index} index={index} colorBox={colorBox} />
        ))}
      </div>
    </div>
  );
}

export default App;
