import Section from "../section/Section";
// import icons:
import {
	AiOutlineCloud,
	AiOutlineFolder,
	AiOutlineLink,
	AiOutlineFileAdd,
	AiOutlineApi,
	AiOutlineMobile,
	AiOutlineSearch,
	AiOutlineTags,
} from "react-icons/ai";
import { FiDatabase } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

export default function WhatCanIbuild({ props }) {
	// define tech stack list
	const FEATURES_LIST = [
		{
			icon: <FiDatabase {...props} />,
			name: "Database",
		},
		{
			icon: <AiOutlineFolder {...props} />,
			name: "Storage",
		},
		{
			icon: <AiOutlineLink {...props} />,
			name: "Routing",
		},
		{
			icon: <AiOutlineFileAdd {...props} />,
			name: "CRUD",
		},
		{
			icon: <MdDarkMode {...props} />,
			name: "Dark Mode",
		},
		{
			icon: <AiOutlineApi {...props} />,
			name: "API",
		},
		{
			icon: <FaUsers {...props} />,
			name: "Users Auth",
		},
		{
			icon: <AiOutlineMobile {...props} />,
			name: "RWD",
		},
		{
			icon: <AiOutlineSearch {...props} />,
			name: "Search",
		},
		{
			icon: <AiOutlineTags {...props} />,
			name: "Tags",
		},
	];

	return (
		<Section
			id="what-can-i-build"
			title="What My Apps/Sites Can Have"
			iconItems={FEATURES_LIST}
		/>
	);
}
