import "./App.css";
import Navbar from "./components/organisms/Navbar";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Background from "./components/pages/Background";
import Footer from "./components/organisms/Footer";
import { useTheme } from "../src/hooks/useTheme";
import { useEffect } from "react";

function App() {
	const { theme } = useTheme();

	useEffect(() => {
		console.log("theme:", theme);
	}, [theme]);

	return (
		<div
			className={`App bg-${theme} text-${
				theme === "dark" ? "light" : "dark"
			}`}
		>
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
