import { PROJECTS } from "../data/PROJECTS";
import Project from "./Project";

export default function Projects() {
	return (
		<div
			className="text-justify"
			id="projects"
			style={{ paddingTop: "70px" }}
		>
			<h1 className="text-center py-3">Projects (public repositories)</h1>
			<hr />
			{PROJECTS.map((project, i) => (
				<div key={"project" + i}>
					<Project repoData={project} i={i} />
					<hr
						style={{
							borderStyle: "solid",
							borderColor: "black",
							size: "20px",
						}}
					/>
				</div>
			))}
		</div>
	);
}
