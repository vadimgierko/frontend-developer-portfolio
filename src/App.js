import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";

import { DATA } from "./DATA";

export default function App() {
	return (
		<div className="app">
			<Header header={DATA.header} />
		</div>
	);
}
