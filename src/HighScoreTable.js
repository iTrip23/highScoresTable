import React from 'react';
import CountryTable from './CountryTable.js';

const HighScoreTable = props => {

	return (
		<div className='tableContainer mx-auto p-3 m-3'>
			{props.AllHighScores.sort(
				(a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
			).map((country, index) => <CountryTable country={country} index={index}/>)}
		</div>
	)
}

export default HighScoreTable;