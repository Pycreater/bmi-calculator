import React, { useMemo, useState } from "react";
import "./App.css";

const App = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(180);

  const handleWeight = (e) => {
    setWeight(e.target.value);
  };

  const handleHeight = (e) => {
    setHeight(e.target.value);
  };

  const output = useMemo(() => {
    const calculateHeight = height / 100;

    return (weight / (calculateHeight * calculateHeight)).toFixed(1);
  }, [weight, height]);

  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className="input-section">
        <p className="slider-output">Weight: {weight} kg</p>
        <input
          type="range"
          className="input-slider"
          step="1"
          min="40"
          max="200"
          defaultValue="70"
          onChange={handleWeight}
        />
        <p className="slider-output">Height: {height} cm</p>
        <input
          type="range"
          className="input-slider"
          step="1"
          min="140"
          max="210"
          defaultValue="180"
          onChange={handleHeight}
        />
      </div>
      <div className="output-section">
        <p>Your BMI is </p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
};

export default App;
