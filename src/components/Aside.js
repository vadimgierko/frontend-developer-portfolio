import data from "../data/data";
import colorizeText from "../functions/colorizeText";

export default function Aside({onClick}) {
    return (
        <div className="" style={{backgroundColor: "lightGrey", position: "fixed", top: "60px", right: "0", zIndex: "1"}}>
            <div className="m-2"><a href="#" className="text-reset mx-3" onClick={() => onClick()} rel="noreferrer">Home</a></div>
            <div className="m-2"><a href="#about" className="text-reset mx-3" onClick={() => onClick()}>About</a></div>
            <div className="m-2"><a href="#projects" className="text-reset mx-3" onClick={() => onClick()}><strong>Projects</strong></a></div>
            <div className="m-2"><a href="#courses" className="text-reset mx-3" onClick={() => onClick()}>Taken Courses</a></div>
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
                    className="nav-link text-reset mx-1"
                    style={{cursor: "pointer"}}
                    onClick={() => onClick()}
                    rel="noreferrer"
                ><i className={`bi bi-${social}`}></i></a>
            )}
            <a
                href={data.page ? data.page : "#"}
                target="_blank" className="nav-link text-reset mx-1"
                style={{cursor: "pointer"}}
                onClick={() => onClick()}
                rel="noreferrer"
            >
                <i className="bi bi-globe"></i>
            </a>
        </div>
    );
}