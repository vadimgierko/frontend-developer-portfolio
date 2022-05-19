import Section from "../section/Section";
// import icons:
import {
	AiOutlineCloud,
	AiOutlineLink,
	AiOutlineFileAdd,
	AiOutlineApi,
	AiOutlineMobile,
} from "react-icons/ai";
import { FiDatabase } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";

export default function WhatCanIbuild({ props }) {
	// define tech stack list
	const FEATURES_LIST = [
		{
			icon: <FiDatabase {...props} />,
			name: "Database",
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
	];

	return (
		<Section
			id="what-can-i-build"
			title="What My Apps/Sites Can Have"
			iconItems={FEATURES_LIST}
		/>
	);
}
