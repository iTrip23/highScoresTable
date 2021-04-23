const HighScoreTable = props => (
	<>
		{props.AllHighScores.sort(
			(a, b) => {
				if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1 }
				if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1 }
				return 0;
			}
		).map(country => {
			let sum = 0;
			for (let score of country.scores) {
				sum += score.s
			}
			return (
				<div className='tableContainer mx-auto m-3'>
					<table className='table table-striped'>
						<thead className='bg-dark text-white'>
							<tr>
								<th scope="col">{country.name}</th>
								<th scope="col">{sum}</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='w-50'>Player</td>
								<td className='w-50'>HighScore</td>
							</tr>
							{country.scores.sort((a, b) => a.s - b.s).reverse().map(player => (
								<tr>
									<td className='w-50'>{player.n}</td>
									<td className='w-50'>{player.s}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)
		})}
	</>
)

export default HighScoreTable;