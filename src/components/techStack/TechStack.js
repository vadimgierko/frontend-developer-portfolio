import Section from "../section/Section";
// import icons:
import {
	SiReact,
	SiJavascript,
	SiRedux,
	SiFirebase,
	SiBootstrap,
	SiReactrouter,
	SiHtml5,
	SiCss3,
	SiStyledcomponents,
	SiMaterialui,
	SiMarkdown,
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
			name: "React 18",
		},
		{
			icon: <SiJavascript {...props} />,
			name: "JavaScript (ES6+)",
		},
		{
			icon: <SiRedux {...props} />,
			name: "Redux (Toolkit)",
		},
		{
			icon: <SiBootstrap {...props} />,
			name: "Bootstrap 5",
		},
		{
			icon: <SiReactrouter {...props} />,
			name: "React Router 6",
		},
		{
			icon: <SiFirebase {...props} />,
			name: "Firebase 9",
		},
		{
			icon: <SiMaterialui {...props} />,
			name: "MaterialUI",
		},
		{
			icon: <SiCss3 {...props} />,
			name: "CSS3",
		},
		{
			icon: <SiHtml5 {...props} />,
			name: "HTML5",
		},
		{
			icon: <SiStyledcomponents {...props} />,
			name: "Styled Components",
		},
		// {
		// 	icon: <SiMarkdown {...props} />,
		// 	name: "Markdown",
		// },
		// {
		//   icon: <SiSass {...props} />,
		//   name: "Sass"
		// },
		// {
		// 	icon: <SiJquery {...props} />,
		// 	name: "jQuery",
		// },
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
