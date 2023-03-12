import { useState } from 'react';
import { EducationTab } from './TabItems/EducationTab';
import { ExperienceTab } from './TabItems/ExperienceTab';
import { Projects } from './TabItems/ProjectsTab';
import { AboutMe } from './TabItems/AboutMeTab';

const work_experience = [
	{
		company: 'LinQuest',
		position: 'Web Developer Intern',
		description: [ 'desc' ],
		from: 'June 2019',
		to: 'August 2019'
	},
	{
		company: 'Griley Air Freight',
		position: 'Python developer',
		description: [ 'I also worked here' ],
		from: 'April 2020',
		to: 'Current'
	}
];

const education = [
	{
		institute: 'California State University, Long Beach',
		location: 'Long Beach, CA',
		from_date: 'August 2017',
		to_date: 'May 2020',
		relevant_coursework: []
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
		subtitle: '',
		github_link: '',
		website_link: '',
		description: [],
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
			<div className="flex space-x-3 mx-0 flex container mx-auto">
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
			<div className="pt-4">
				<p>{tabsData[activeTabIndex].content}</p>
			</div>
		</>
	);
}
