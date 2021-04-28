import React, { useState } from 'react';
import './App.css';
import { allCountryScores, allPlayersNamesAndScores } from './data/countries.js';
import HighScoreTable from './HighScoreTable.js';
import WorldWideTable from './WorldWidetable.js'

function App() {
	const [sort, setSort] = useState(true);
	const SortHighScores = () => {
		sort ? allCountryScores.map(country => country.scores.sort((a, b) => a.s - b.s).reverse())
			: allCountryScores.map(country => country.scores.sort((a, b) => a.s - b.s))
		setSort(!sort)
	};
	console.table(allPlayersNamesAndScores)
	return (
		<div className="App">
			<h1>Countries HighScore Table</h1>
			<WorldWideTable players={allPlayersNamesAndScores} />
			<button className='btn btn-primary' onClick={SortHighScores}>Sort HighScores for all Countries</button>
			<HighScoreTable AllHighScores={allCountryScores} />
		</div>
	);
}

export default App;
