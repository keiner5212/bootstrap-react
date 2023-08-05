/** @format */

function SideTable(props) {
	let counts = {};
	props.posts.forEach((obj) => {
		const location = obj.location;
		counts[location] = counts[location] ? counts[location] + 1 : 1;
	});

	return (
		<table className="table my-3">
			<thead>
				<tr>
					<th scope="col">Location</th>
					<th scope="col">Posts</th>
				</tr>
			</thead>
			<tbody>
				{props.posts.map((element) => {
					return (
						<tr key={element.id}>
							<td>
								<p className="text-decoration-none text-dark m-0">
									{element.location}
								</p>
							</td>
							<td>
								<span className="badge bg-secondary badge-pill">
									{counts[element.location]}
								</span>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default SideTable;
