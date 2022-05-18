import Section from "../section/Section";
// import icons:
import {
	SiMongodb,
	SiExpress,
	SiNodedotjs,
	SiHeroku,
	SiMaterialui,
	SiGatsby,
} from "react-icons/si";

// define icons props:
const size = 50;
const style = { margin: "1em", color: "grey" };
const props = { style, size };
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
		icon: <SiMaterialui {...props} />,
		name: "MUI",
	},
	{
		icon: <SiGatsby {...props} />,
		name: "Gatsby",
	},
];

export default function CurrentlyLearning() {
	return (
		<Section
			id="currently-learning"
			title="Currently Learning"
			iconItems={TECH_STACK_LIST}
		/>
	);
}
