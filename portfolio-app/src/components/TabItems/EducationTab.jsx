export function EducationTab(props) {
	const education = props.education;

	return (
		<div className="grid grid-cols-1 gap-6 md:grid-cols-2 sm:grid-cols-1">
			{education.map((edu, index) => (
				<div className="card" key={index}>
					<h6 className="text-2xl font-bold">{edu.institute}</h6>
					<h6 className="font-bold">{edu.location}</h6>
					<h6 className="pb-3 font-bold">
						{edu.from_date} - {edu.to_date}
					</h6>
				</div>
			))}
		</div>
	);
}
