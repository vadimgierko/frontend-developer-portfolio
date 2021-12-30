import React, {useState} from 'react';
import colorizeText from '../functions/colorizeText';
import data from "../data/data";
import Aside from "./Aside";

export default function Navbar() {

    const [windowSize, setWindowSize] = useState(window.innerWidth); //576
    const [showAside, setShowAside] = useState(false);

    window.addEventListener("resize", () => {
        setWindowSize(window.innerWidth);
    });

    if (windowSize > 1400) {
        return (
            <div
                className="navbar bg-dark navbar-dark px-3"
                style={{position: "fixed", top: "0", left: "0", right: "0", zIndex: "1"}}
            >
                <div className="container">
                    <div className="navbar-brand mb-0 col">
                        <span className="font-weight-bold text-light h3 me-3">Vadim Gierko</span>
                        <span className="text-muted">js / react developer portfolio</span>
                    </div>
                    <a href="#" className="mx-3 text-light" style={{textDecoration: "none"}}>Home</a>
                    <a href="#about" className="mx-3 text-light" style={{textDecoration: "none"}}>About</a>
                    <a href="#projects" className="mx-3 text-light" style={{textDecoration: "none"}}><strong>Projects</strong></a>
                    <a
                        href="https://vadimgierko.github.io/blogging-platform/#/blogs/my-programming-journey/summary-of-my-first-year-of-learning-web-development.-roadmap,-projects-and-tips-for-newbies"
                        target="_blank"
                        rel="noreferrer"
                        className="mx-3 text-light"
                        style={{textDecoration: "none"}}
                    >Blog</a>
                    <a href="#background" className="mx-3" style={{textDecoration: "none"}}>
                        {colorizeText("Creative Background").map(span => span)}
                    </a>
                    {data.socials.map((social, i) =>
                        <a
                            key={social}
                            href={data.links[i] ? data.links[i] : "#"}
                            target="_blank"
                            className="nav-link text-light mx-1"
                            style={{cursor: "pointer"}}
                            rel="noreferrer"
                        ><i className={`bi bi-${social}`}></i></a>
                    )}
                    <a
                        href={data.page ? data.page : "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="nav-link text-light mx-1"
                        style={{cursor: "pointer"}}
                    >
                        <i className="bi bi-globe"></i>
                    </a>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div
                    className="navbar bg-dark px-3"
                    style={{position: "fixed", top: "0", left: "0", right: "0", zIndex: "1"}}
                >
                    <div className="container">
                        <div className="navbar-brand mb-0 col">
                            <span className="font-weight-bold text-light h5">Vadim Gierko</span>
                            <span className="text-muted ms-2">{windowSize > 521 ? <small> js / react developer portfolio</small> : null}</span>
                        </div>
                        <i
                            className="bi bi-list mx-2 text-light"
                            style={{cursor: "pointer"}}
                            onClick={() => setShowAside(!showAside)}
                        ></i>
                    </div>
                </div>
                {showAside ? <Aside onClick={() => setShowAside(false)} /> : null}
            </div>
        );
    }
}