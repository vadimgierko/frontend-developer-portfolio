import Section from "../section/Section";
// import icons:
import {
	SiReact,
	SiJavascript,
	SiFirebase,
	SiBootstrap,
	SiReactrouter,
	SiHtml5,
	SiCss3,
	SiStyledcomponents,
	SiSass,
	SiJquery,
	SiVisualstudiocode,
	SiGithub,
} from "react-icons/si";

export default function TechStack({ props }) {
	// define tech stack list
	const TECH_STACK_LIST = [
		{
			icon: <SiReact {...props} />,
			name: "React",
		},
		{
			icon: <SiJavascript {...props} />,
			name: "JavaScript",
		},
		{
			icon: <SiBootstrap {...props} />,
			name: "Bootstrap",
		},
		{
			icon: <SiReactrouter {...props} />,
			name: "React Router",
		},
		{
			icon: <SiFirebase {...props} />,
			name: "Firebase",
		},
		{
			icon: <SiCss3 {...props} />,
			name: "CSS",
		},
		{
			icon: <SiHtml5 {...props} />,
			name: "HTML",
		},
		{
			icon: <SiStyledcomponents {...props} />,
			name: "Styled Components",
		},
		// {
		//   icon: <SiSass {...props} />,
		//   name: "Sass"
		// },
		// {
		//   icon: <SiJquery {...props} />,
		//   name: "jQuery"
		// }
		// {
		//   icon: <SiVisualstudiocode {...props} />,
		//   name: "Visual Studio Code"
		// },
		// {
		//   icon: <SiGithub {...props} />,
		//   name: "GitHub"
		// }
	];

	return (
		<Section id="tech-stack" title="Tech Stack" iconItems={TECH_STACK_LIST} />
	);
}
