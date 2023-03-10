export function ExperienceTab(props) {
	const work_experience = props.work_experience;

	return (
		<div className="grid grid-cols-3 gap-4">
			{work_experience.map((exp, index) => (
				<div className="card" key={index}>
					<h3 className="text-2xl pb-2 font-bold">{exp.company}</h3>
					<p>{exp.description}</p>
				</div>
			))}
		</div>
	);
}
