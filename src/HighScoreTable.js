const HighScoreTable = props => (
	<div className='tableContainer mx-auto p-3 m-3'>
		{props.AllHighScores.sort(
			(a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
		).map((country, index) => (
			<table className='table table-striped m-4 mx-auto' key={index}>
				<thead className='bg-dark text-white'>
					<tr>
						<th scope="col">{country.name}</th>
						<th scope="col">{country.totalScore}</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className='w-50'>Player</td>
						<td className='w-50'>HighScore</td>
					</tr>
					{country.scores.map((player, index) => (
						<tr key={index}>
							<td className='w-50'>{player.n}</td>
							<td className='w-50'>{player.s}</td>
						</tr>
					))}
				</tbody>
			</table>
		)
		)}
	</div>
)

export default HighScoreTable;