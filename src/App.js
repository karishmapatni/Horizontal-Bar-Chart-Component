import './App.css';
import ProgressBar from './ProgressBar';
import React, { useState } from 'react'

function App() {
  const [barWidthTotalValue, setBarWidthTotalValue] = useState('');
  const [barWidthUsed, setbarWidthUsed] = useState('');
  const [barWidthPixels, setBarWidthPixels] = useState('');
  
  let showProgressBar = false;

  if (barWidthPixels && barWidthTotalValue && barWidthUsed) {
      showProgressBar = true;
  }

  return (
    <div className="App">
        <label for="barWidthPixel">Enter the total progress bar width in pixels: </label>
        <input type="text" placeholder="Enter width in pixels" name="barWidthPixel" onChange={event => setBarWidthPixels(event.target.value)} />
        <br />
        <label for="barWidthTotalValue">Enter total value: </label>
        <input type="text" placeholder="Enter total value" name="barWidthTotalValue" onChange={event => setBarWidthTotalValue(event.target.value)} />
        <br />
        <label for="barWidthUsed">Enter used value: </label>
        <input type="text" placeholder="Enter used value" name="barWidthUsed" onChange={event => setbarWidthUsed(event.target.value)} />
        <br />
        { showProgressBar &&
          <div>
            <p>Progress Bar: </p>
            <ProgressBar barWidthTotalValue={parseInt(barWidthTotalValue)} barWidthPixels={parseInt(barWidthPixels)} barWidthUsed={parseInt(barWidthUsed)} />
          </div>
        }
      </div>
  );
}

export default App;
