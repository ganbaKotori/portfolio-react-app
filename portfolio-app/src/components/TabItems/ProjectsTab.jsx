export function Projects(props) {
	const projects = props.projects;

	return (
		<div className="grid grid-cols-2 gap-4">
			{projects.map((pro, index) => (
				<div className="card" key={index}>
					<h3 className="text-2xl font-bold">{pro.title}</h3>
					<h3 className="text-1xl pb-2 font-bold">{pro.subtitle}</h3>
					<h6 className="pb-2 font-bold">
						{pro.from_date} - {pro.to_date}
					</h6>
					<ul className="list-inside list-disc">
						{pro.description.map((desc, index) => (
							<li className="mb-3" key={index}>
								{desc}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}
