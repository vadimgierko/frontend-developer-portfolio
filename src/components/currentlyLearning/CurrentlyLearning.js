import Section from "../section/Section";
// import icons:
import {
	SiMongodb,
	SiExpress,
	SiNodedotjs,
	SiHeroku,
	SiGatsby,
} from "react-icons/si";

export default function CurrentlyLearning({ props }) {
	// define tech stack list
	const TECH_STACK_LIST = [
		{
			icon: <SiMongodb {...props} />,
			name: "MongoDB",
		},
		{
			icon: <SiExpress {...props} />,
			name: "Express",
		},
		{
			icon: <SiNodedotjs {...props} />,
			name: "Node.js",
		},
		{
			icon: <SiHeroku {...props} />,
			name: "Heroku",
		},
		{
			icon: <SiGatsby {...props} />,
			name: "Gatsby",
		},
	];

	return (
		<Section
			id="currently-learning"
			title="Currently Learning"
			iconItems={TECH_STACK_LIST}
		/>
	);
}
