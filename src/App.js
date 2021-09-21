import './App.css';
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import About from "./components/About";
import Projects from "./components/Projects";
import Background from "./components/Background";
import Courses from "./components/Courses";

function App() {
  return (
      <div className="container-fluid">
          <Navbar />
          <div className="row mb-3">
              <Bio />
              <About />
          </div>
          <Projects />
          <Background />
          <Courses />
          <p className="text-center">
            designed by <a href="https://github.com/vadimgierko" target="_blank" rel="noreferrer">Vadim Gierko</a> | 2021
          </p>
      </div>
  );
}

export default App;