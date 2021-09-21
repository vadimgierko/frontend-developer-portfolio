import creativeActivities from "../data/creative-activities";

export default function Activity({i}) {
    return (            
        <div className="card mb-3">
            <div className="card-header">
                <h3 className="text-center text-primary">
                    <i className={`bi bi-${creativeActivities[i].icon} mx-3`}></i>
                    {creativeActivities[i].title}
                </h3>
            </div>
            <div className="card-body row">
                <div className="col-md">
                    <img src={creativeActivities[i].imageSRC} className="card-img-top img-fluid p-3" />
                </div>
                <div className="card-text col-md-8">
                    {creativeActivities[i].paragraphs.map((p, i) => (
                        <p  key={"p" + i}>{p}</p>
                    ))}
                </div>
            </div>
            <div className="card-footer text-center">
                {creativeActivities[i].links.map((link, i) => (
                    <span key={"link" + i}>
                        <a href={link.url} target="_blank" rel="noreferrer">
                            <h3 className="d-inline"><i className={`bi bi-${link.icon} mx-3`}></i></h3>
                        </a>
                    </span>
                ))}
                {creativeActivities[i].socials.map((social, i) => (
                    <span key={"social" + i}>
                        <a href={social.url} target="_blank" rel="noreferrer">
                            <h3 className="d-inline"><i className={`bi bi-${social.icon} mx-3`}></i></h3>
                        </a>
                    </span>
                ))}
            </div>
        </div>
    );
}