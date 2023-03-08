import { useState } from 'react';
import { Education } from './Education';
import { Experience } from './Experience';
import { Projects } from './Projects';

const tabsData = [
	{
		label: 'Experience',
		content: <Experience />
	},
	{
		label: 'Education',
		content: <Education />
	},
	{
		label: 'Projects',
		content: <Projects />
	}
];

export function Tabs() {
	const [ activeTabIndex, setActiveTabIndex ] = useState(0);

	return (
		<div>
			<div className="flex space-x-3 mx-0 flex items-center">
				{/* Loop through tab data and render button for each. */}
				{tabsData.map((tab, idx) => {
					return (
						<button
							key={idx}
							className={`border-b-4 transition-colors duration-300 ${idx === activeTabIndex
								? 'border-teal-500'
								: 'border-transparent hover:border-gray-200'}`}
							// Change the active tab on click.
							onClick={() => setActiveTabIndex(idx)}
						>
							{tab.label}
						</button>
					);
				})}
			</div>
			{/* Show active tab content. */}
			<div className="py-4">
				<p>{tabsData[activeTabIndex].content}</p>
			</div>
		</div>
	);
}
