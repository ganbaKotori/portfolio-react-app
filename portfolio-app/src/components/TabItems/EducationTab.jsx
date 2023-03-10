export function EducationTab(props) {
	const education = props.education;

	return (
		<div className="grid grid-cols-1 gap-6 md:grid-cols-2 sm:grid-cols-1">
			{education.map((edu, index) => (
				<div className="card" key={index}>
					<h3 className="text-1xl pb-2 font-bold">{edu.institute}</h3>
					<p>{edu.location}</p>
				</div>
			))}
		</div>
	);
}
