import React, { useState } from 'react';

const WorldWideTable = (props) => {
	const [sortPlay, setSortPlay] = useState(true);
	const [sortScores, setSortScores] = useState(true);
	const sortAllPlayers = () => {
		sortPlay ? props.players.sort((a, b) => a.n.toLowerCase() < b.n.toLowerCase() ? -1 : 1)
			: props.players.sort((a, b) => a.n.toLowerCase() < b.n.toLowerCase() ? 1 : -1);
		setSortPlay(!sortPlay)
	}
	const SortAllPlayersHighScores = () => {
		sortScores ? props.players.sort((a, b) => a.s - b.s).reverse()
			: props.players.sort((a, b) => a.s - b.s)
		setSortScores(!sortScores)
	}
	return (
		<table className='table'>
			<thead className='bg-warning'>
				<tr>
					<th><button className='btn btn-success' onClick={sortAllPlayers}>Sort Players</button></th>
					<th><button className='btn btn-success' onClick={SortAllPlayersHighScores}>Sort HighScores</button></th>
				</tr>
			</thead>
			<tbody>
				{props.players.map((player, index) => (
					<tr key={index}>
						<td>{player.n}</td>
						<td>{player.s}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default WorldWideTable;