import React from 'react';
import './App.css';
import allCountryScores from './data/countries.js';
import HighScoreTable from './HighScoreTable.js';

function App() {
  return (
    <div className="App">
      <h1>Countries HighScore Table</h1>
      <HighScoreTable AllHighScores={allCountryScores} />
    </div>
  );
}

export default App;
