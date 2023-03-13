export function ExperienceTab(props) {
	const work_experience = props.work_experience;

	return (
		<div className="grid grid-cols-2 gap-4">
			{work_experience.map((exp, index) => (
				<div className="card" key={index}>
					<h6 className="text-2xl font-bold">{exp.company}</h6>
					<h6 className="font-bold">{exp.position}</h6>
					<h6 className="pb-2 font-bold">
						{exp.from_date} - {exp.to_date}
					</h6>
					<ul className="list-inside list-disc">
						{exp.description.map((desc, index) => <li key={index}>{desc}</li>)}
					</ul>
				</div>
			))}
		</div>
	);
}
