import Section from "../section/Section";
// import icons:
import { AiOutlineBulb } from "react-icons/ai";
import { RiMindMap } from "react-icons/ri";
import { MdDraw } from "react-icons/md";
import { GiMusicalNotes } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";

export default function CreativeBackground({ props }) {
	// define tech stack list
	const CREATIVE_BACKGROUND_LIST = [
		{
			icon: <AiOutlineBulb {...props} />,
			name: "Creative Process Management",
		},
		{
			icon: <RiMindMap {...props} />,
			name: "Mind Mapping",
		},
		{
			icon: <MdDraw {...props} />,
			name: "Sketchnoting",
		},
		{
			icon: <GiMusicalNotes {...props} />,
			name: "Music Composing",
		},
		{
			icon: <FaGraduationCap {...props} />,
			name: "Learning Process Management",
		},
	];

	return (
		<Section
			id="creative-background"
			title="I'm Good At These Creative Areas"
			iconItems={CREATIVE_BACKGROUND_LIST}
		/>
	);
}
