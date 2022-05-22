import Slider from "../slider/Slider";

export default function Projects({ projects = [] }) {
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
