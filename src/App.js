import "./App.css";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import About from "./components/About";
import Projects from "./components/Projects";
import Background from "./components/Background";

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="container">
				<div className="row mb-3">
					<Bio />
					<About />
				</div>
				<Projects />
				<Background />
				<hr />
				<p className="text-center">
					designed by{" "}
					<a
						href="https://github.com/vadimgierko"
						target="_blank"
						rel="noreferrer"
					>
						Vadim Gierko
					</a>{" "}
					&copy; 2021-2022
				</p>
			</div>
		</div>
	);
}

export default App;
