import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import TechStack from "./components/techStack/TechStack";
import CurrentlyLearning from "./components/currentlyLearning/CurrentlyLearning";

import { DATA } from "./DATA";

export default function App() {
	return (
		<div className="app">
			<Header header={DATA.header} />
			<Hero hero={DATA.hero} />
			<TechStack />
			<CurrentlyLearning />
		</div>
	);
}
