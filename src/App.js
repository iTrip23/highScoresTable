import React, { useState } from 'react';
import './App.css';
import allCountryScores from './data/countries.js';
import HighScoreTable from './HighScoreTable.js';
console.log(allCountryScores);

function App() {
	const [sort, setSort] = useState(true);
	const SortHighScores = () => {
		sort ? allCountryScores.map(country => country.scores.sort((a, b) => a.s - b.s).reverse())
			: allCountryScores.map(country => country.scores.sort((a, b) => a.s - b.s))
		setSort(!sort)
	};
	return (
		<div className="App">
			<h1>Countries HighScore Table</h1>
			<button className='btn btn-primary' onClick={SortHighScores}>Sort HighScores</button>
			<HighScoreTable AllHighScores={allCountryScores} />
		</div>
	);
}

export default App;
