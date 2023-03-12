export function Projects(props) {
	const projects = props.projects;

	return (
		<div className="grid grid-cols-3 gap-4">
			{projects.map((pro, index) => (
				<div className="card" key={index}>
					<h3 className="text-2xl pb-2 font-bold">{pro.title}</h3>
					<h3 className="text-1xl pb-2 font-bold">{pro.subtitle}</h3>
					<ul>{pro.description.map((desc, index) => <li key={index}>{desc}</li>)}</ul>
				</div>
			))}
		</div>
	);
}
