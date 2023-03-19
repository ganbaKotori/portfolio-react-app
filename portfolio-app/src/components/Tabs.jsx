import { useState } from 'react';
import { EducationTab } from './TabItems/EducationTab';
import { ExperienceTab } from './TabItems/ExperienceTab';
import { Projects } from './TabItems/ProjectsTab';
import { AboutMe } from './TabItems/AboutMeTab';

const work_experience = [
	{
		company: 'LinQuest',
		position: 'Software Developer Intern',
		description: [ `Attended daily standups and sprint meetings as a member of a development team, gaining valuable experience in Agile methodologies and principles such as Scrum and Kanban.`,
		`Developed a Sprint Burndown Chart using a JavaScript chart-rendering library. This new chart made the team’s Kanban page more UI friendly and replaced the outdated XSLT 1.0 chart.`,
		`Redesigned SharePoint webpart displaying urgent tasks by reverse engineering the XSLT 1.0 source code and writing a new webpart using HTML and jQuery. The result was a cleaner UI that fetched data from a new API.
		` ],
		from_date: 'June 2019',
		to_date: 'August 2019'
	},
	{
		company: 'Griley Air Freight',
		position: 'Software Developer',
		description: [ `Worked closely with business stakeholders to understand requirements and translate them into technical specifications for 
		web pages and workflows. As a result, daily processes were streamlined.`,`Migrated the company's Pick Basic system to Flask and MySQL, resulting in improved performance and scalability.`,
		`Wrote unit tests and set up a GitHub Action to run Pytest as part of the codebase's continuous integration (CI) pipeline.
   `],
		from_date: 'April 2021',
		to_date: 'Current'
	}
];

const education = [
	{
		institute: 'California State University, Long Beach',
		location: 'Long Beach, CA',
		degree: '',
		from_date: 'August 2017',
		to_date: 'May 2020',
		relevant_coursework: [`Data Structures and Algorithms`,`Oriented Application Development (Java)`,`Database
		Fundamentals`,`Software Design and Architecture`,`Probability and Statistics with Applications to Computing`]
	},
	{
		institute: 'Cerritos College',
		location: 'Norwalk, CA',
		degree: '',
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
		description: [`Developed a Flask application that enables users to track wins and losses in the video game Overwatch 2, using a modern web stack including Python, MySQL, HTML, Jinja2, CSS, and JavaScript.`,
		`Implemented database schema migrations using Flask-Migrate to manage database changes and updates.`,`Designed and implemented a friends system that leveraged a many-to-many relationship model to enable users to connect with and communicate with each other. As a result, users can befriend other users and tag them in matches.
		`],
		from_date: 'February 2022',
		to_date: 'Current'
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
			<div className="flex space-x-3 mx-0 container mx-auto mb-8">
				{tabsData.map((tab, idx) => {
					return (
						<button
							key={idx}
							className={`border-b-4 px-5 py-2 transition-colors duration-300 ${idx === activeTabIndex
								? 'border-white-500'
								: 'border-transparent hover:border-gray-400'}`}
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
