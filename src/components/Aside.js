import data from "../data/data";
import colorizeText from "../functions/colorizeText";

export default function Aside({ onClick }) {
    return (
        <div className="bg-dark" style={{position: "fixed", top: "55px", right: "0", zIndex: "1"}}>
            <div className="m-2"><a href="#" className="text-light mx-3" style={{textDecoration: "none"}} onClick={() => onClick()} rel="noreferrer">Home</a></div>
            <div className="m-2"><a href="#about" className="text-light mx-3" style={{textDecoration: "none"}} onClick={() => onClick()}>About</a></div>
            <div className="m-2"><a href="#projects" className="text-light mx-3" style={{textDecoration: "none"}} onClick={() => onClick()}><strong>Projects</strong></a></div>
            <div className="m-2"><a href="https://vadimgierko.github.io/blogging-platform/#/blogs/my-programming-journey/summary-of-my-first-year-of-learning-web-development.-roadmap,-projects-and-tips-for-newbies" target="_blank" rel="noreferrer" className="text-light mx-3" style={{textDecoration: "none"}} onClick={() => onClick()}>Blog</a></div>
            <div className="m-2">
                <a href="#background" className="text-reset mx-3" onClick={() => onClick()}>
                    {colorizeText("Creative Background").map(span => span)}
                </a>
            </div>
            {data.socials.map((social, i) =>
                <a
                    key={social}
                    href={data.links[i] ? data.links[i] : "#"}
                    target="_blank"
                    className="nav-link text-light mx-1"
                    style={{cursor: "pointer"}}
                    onClick={() => onClick()}
                    rel="noreferrer"
                ><i className={`bi bi-${social}`}></i></a>
            )}
            <a
                href={data.page ? data.page : "#"}
                target="_blank" className="nav-link text-light mx-1"
                style={{cursor: "pointer"}}
                onClick={() => onClick()}
                rel="noreferrer"
            >
                <i className="bi bi-globe"></i>
            </a>
        </div>
    );
}