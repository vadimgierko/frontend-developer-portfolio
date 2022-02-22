import "./App.css";
import Navbar from "./components/organisms/Navbar";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Background from "./components/pages/Background";
import Footer from "./components/organisms/Footer";
import { useTheme } from "../src/hooks/useTheme";
import ScrollToTop from "./components/atoms/ScrollToTop";

function App() {
	const { theme } = useTheme();

	return (
		<div
			className={`App bg-${theme} text-${
				theme === "dark" ? "light" : "dark"
			}`}
		>
			<Navbar />
			<main className="container">
				<About />
				<Projects />
				<Background />
			</main>
			<Footer />
			<ScrollToTop />
		</div>
	);
}

export default App;
