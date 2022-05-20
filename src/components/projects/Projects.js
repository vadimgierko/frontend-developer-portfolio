import Slider from "../slider/Slider";

export default function Projects({ projects = [] }) {
	console.log(projects);
	//if (!projects || (projects && !projects.length)) return null;
	return (
		<div className="section-container">
			<div className="section" id="projects">
				<h1>Projects</h1>
				<br />
				<Slider items={projects} />
			</div>
		</div>
	);
}
