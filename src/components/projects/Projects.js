import Slider from "../slider/Slider";
import { useTheme } from "../../useTheme";

export default function Projects({ projects = [] }) {
	const { theme } = useTheme();

	return (
		<div className={"section-container-" + theme}>
			<div className="section" id="projects">
				<h1>Projects</h1>
				<br />
				<Slider items={projects} />
			</div>
		</div>
	);
}
