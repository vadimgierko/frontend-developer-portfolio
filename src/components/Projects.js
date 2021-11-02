import data from "../data/data";
import Project from "./Project";

export default function Projects() {
    return (
        <div className="text-justify" id="projects" style={{paddingTop: "70px"}}>
            <h1 className="text-center py-3">Projects</h1>
            <hr />
            {data.projects.map((project, i) => 
                <div key={"project" + i}>
                    <Project repoData={project} i={i} />
                    <hr style={{borderStyle: "solid", borderColor: "black", size: "20px"}} />
                </div>
            )}  
        </div>
    );
}