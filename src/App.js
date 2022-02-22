import "./App.css";
import Navbar from "./components/organisms/Navbar";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Background from "./components/pages/Background";
import Footer from "./components/organisms/Footer";

function App() {
	return (
		<div className="App">
			<Navbar />
			<main className="container" style={{ paddingTop: "70px" }}>
				<About />
				<Projects />
				<Background />
			</main>
			<Footer />
		</div>
	);
}

export default App;
