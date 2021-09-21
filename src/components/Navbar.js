import React from 'react';
import colorizeText from '../functions/colorizeText';
import data from "../data/data";
import Aside from "./Aside";

export default function Navbar() {
    const [windowSize, setWindowSize] = React.useState(window.innerWidth); //576
    const [showAside, setShowAside] = React.useState(false);
    window.addEventListener("resize", () => {
        setWindowSize(window.innerWidth);
    });
    if (windowSize > 1300) {
        return (
            <div className="navbar bg-light px-3 rounded" style={{position: "fixed", top: "0", left: "0", right: "0", zIndex: "1"}}>
                <div className="navbar-brand mb-0 col">
                    <span className="font-weight-bold h3"><a href="#" className="text-reset">Vadim Gierko</a></span>
                    <span> front-end web developer portfolio</span>
                </div>
                <a href="#" className="text-reset mx-3">Home</a>
                <a href="#about" className="text-reset mx-3">About</a>
                <a href="#projects" className="text-reset mx-3"><strong>Projects</strong></a>
                <a href="#courses" className="text-reset mx-3">Taken Courses</a>
                <a href="#background" className="text-reset mx-3">
                    {colorizeText("Creative Background").map(span => span)}
                </a>
                {data.socials.map((social, i) =>
                    <a
                        key={social}
                        href={data.links[i] ? data.links[i] : "#"}
                        target="_blank"
                        className="nav-link text-reset mx-1"
                        style={{cursor: "pointer"}}
                        rel="noreferrer"
                    ><i className={`bi bi-${social}`}></i></a>
                )}
                <a href={data.page ? data.page : "#"} target="_blank" rel="noreferrer" className="nav-link text-reset mx-1" style={{cursor: "pointer"}}><i className="bi bi-globe"></i></a>
            </div>
        );
    } else {
        return (
            <div>
                <div className="navbar bg-light px-3 rounded" style={{position: "fixed", top: "0", left: "0", right: "0", zIndex: "1"}}>
                    <div className="navbar-brand mb-0 col">
                        <span className="font-weight-bold h5"><a href="#" className="text-reset">Vadim Gierko</a></span>
                        <span>{windowSize > 501 ? <small> front-end web developer portfolio</small> : null}</span>
                    </div>
                    <i className="bi bi-list mx-2 text-primary" style={{cursor: "pointer"}} onClick={() => setShowAside(!showAside)}></i>
                </div>
                {showAside ? <Aside onClick={() => setShowAside(false)} /> : null}
            </div>
        );
    }
}