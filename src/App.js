import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import TechStack from "./components/techStack/TechStack";
import CurrentlyLearning from "./components/currentlyLearning/CurrentlyLearning";
import CreativeBackground from "./components/creativeBackground/CreativeBackground";
import WhatCanIbuild from "./components/whatCanIbuild/WhatCanIbuild";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";

import { DATA } from "./DATA";
import { useEffect, useState } from "react";

export default function App() {
	const [windowSize, setWindowSize] = useState(window.innerWidth);
	const [iconProps, setIconProps] = useState();
	const [avatarSize, setAvatarSize] = useState(100);

	useEffect(() => {
		// define icons props:
		const size = windowSize > 576 ? 80 : 40;
		const style = { margin: "0.5em" };
		const props = { style, size };
		console.log("window init size:", window.innerWidth);
		console.log("icon item props:", props);
		setIconProps(props);
		setAvatarSize(() => {
			return windowSize > 576 ? 200 : 100;
		});
	}, [windowSize]);

	useEffect(() => {
		window.addEventListener("resize", () => {
			const size = window.innerWidth;
			console.log("window size after resize:", size);
			setWindowSize(size);
		});
	}, []);

	return (
		<div className="app">
			<Header header={DATA.header} />
			<main>
				<Hero hero={DATA.hero} imgSize={avatarSize} />
				<TechStack props={iconProps} />
				<WhatCanIbuild props={iconProps} />
				<Projects projects={DATA.projects} />
				<CurrentlyLearning props={iconProps} />
				<CreativeBackground props={iconProps} />
			</main>
			<Footer releaseYear={DATA.footer.releaseYear} links={DATA.footer.links} />
		</div>
	);
}
