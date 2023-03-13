import { useState } from 'react';
import { EducationTab } from './TabItems/EducationTab';
import { ExperienceTab } from './TabItems/ExperienceTab';
import { Projects } from './TabItems/ProjectsTab';
import { AboutMe } from './TabItems/AboutMeTab';

const work_experience = [
	{
		company: 'LinQuest',
		position: 'Web Developer Intern',
		description: [ `Collaborated with my team on a professional level by attending daily standups and sprint meetings. These
		meetings helped us resolve issues efficiently and in a timely matter.`, `Developed a Sprint Burndown Chart by using the line chart renderer from the FusionCharts library. This new
		chart made my team’s Kanban page more UI friendly and replaced the outdated XSLT 1.0 chart.`,`Redesigned SharePoint webpart displaying urgent tasks by reverse engineering the XSLT 1.0 code and writing a
		new webpart using HTML and jQuery. The result was a cleaner UI that fetched data from a new API.` ],
		from_date: 'June 2019',
		to_date: 'August 2019'
	},
	{
		company: 'Griley Air Freight',
		position: 'Python developer',
		description: [ `Organized legacy invoice data with Python classes and padded missing data using NumPy. As a result, invoices
		were easier to read and new features could be implemented efficiently.` , `Upgraded company’s backend tech stack by writing Python code that replicates the business logic of the old
		server and persisting data to a MySQL server. This improvement helped improve efficiency, data integrity, and
		customer satisfaction.`, `Developed a customer invoice emailing system by using SendGrid, PDFKit, and the command design pattern.
		The result was an automatic batch process that could send over 1000 invoices in a few minutes.`],
		from_date: 'April 2020',
		to_date: 'Current'
	}
];

const education = [
	{
		institute: 'California State University, Long Beach',
		location: 'Long Beach, CA',
		from_date: 'August 2017',
		to_date: 'May 2020',
		relevant_coursework: [`Data Structures and Algorithms`,`Oriented Application Development (Java)`,`Database
		Fundamentals`,`Software Design and Architecture`,`Probability and Statistics with Applications to Computing`]
	},
	{
		institute: 'Cerritos College',
		location: 'Norwalk, CA',
		from_date: 'August 2013',
		to_date: 'May 2017',
		relevant_coursework: []
	}
];

const projects = [
	{
		title: 'TrackWatch',
		subtitle: 'Flask/Python Full Stack Project',
		github_link: 'https://github.com/ganbaKotori/owdb',
		website_link: 'https://trackwatch-prod.herokuapp.com/',
		description: [`Developed RESTful APIs to handle CRUD operations which enables users to submit and alter their Overwatch match details.`,
	`Designed scalable webpages using JavaScript, HTML, and CSS so users can view their match statistics on any
	device with ease.`, `Implemented a Friends system by using a symmetrical Many-to-Many relationship with the Users table in MySQL. Users can then tag their friends in any Overwatch match details they submit.`],
		from_date: 'August 2013',
		to_date: 'May 2017'
	}
];

const tabsData = [
	{
		label: 'About Me',
		content: <AboutMe />
	},
	{
		label: 'Experience',
		content: <ExperienceTab work_experience={work_experience} />
	},
	{
		label: 'Education',
		content: <EducationTab education={education} />
	},
	{
		label: 'Projects',
		content: <Projects projects={projects}/>
	}
];

export function Tabs() {
	const [ activeTabIndex, setActiveTabIndex ] = useState(0);

	return (
		<>
			<div className="flex space-x-3 mx-0 container mx-auto ">
				{tabsData.map((tab, idx) => {
					return (
						<button
							key={idx}
							className={`border-b-4 px-5 py-2 transition-colors duration-300 ${idx === activeTabIndex
								? 'border-teal-500'
								: 'border-transparent hover:border-gray-200'}`}
							onClick={() => setActiveTabIndex(idx)}
						>
							{tab.label}
						</button>
					);
				})}
			</div>
			<div className="pt-4 min-h-65">
				<p>{tabsData[activeTabIndex].content}</p>
			</div>
		</>
	);
}
