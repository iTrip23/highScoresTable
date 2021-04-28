import React, { useState } from 'react';

const CountryTable = (props) => {
	const [sort, setSort] = useState(true);
	const SortHighScores = () => {
		sort ? props.country.scores.sort((a, b) => a.s - b.s).reverse()
			: props.country.scores.sort((a, b) => a.s - b.s);
		setSort(!sort)
	};
	return (
		<table className='m-4 mx-auto col-10 col-md-5'>
			<thead className='bg-dark text-white'>
				<tr>
					<th scope="col">{props.country.name} HighScore : {props.country.totalScore}</th>
					<th scope="col"><button className='btn btn-info' onClick={SortHighScores}>Sort {props.country.name} HighScores</button></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className='w-50'>Player</td>
					<td className='w-50'>HighScore</td>
				</tr>
				{props.country.scores.map((player, index) => (
					<tr key={index}>
						<td className='w-50'>{player.n}</td>
						<td className='w-50'>{player.s}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default CountryTable;