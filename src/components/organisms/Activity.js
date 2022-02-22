import { useTheme } from "../../hooks/useTheme";

export default function Activity({ activity }) {
	const { theme } = useTheme();

	return (
		<div className={`activity-card card bg-${theme} mb-3`}>
			<div className="card-header">
				<h3 className="text-center text-primary">
					<i className={`bi bi-${activity.icon} mx-3`}></i>
					{activity.title}
				</h3>
			</div>
			<div className="card-body row">
				<div className="col-md">
					<img
						src={activity.imageSRC}
						className="card-img-top img-fluid p-3"
						alt="activity icon"
					/>
				</div>
				<div className="card-text col-md-8">
					{activity.paragraphs.map((p, i) => (
						<p key={"p" + i}>{p}</p>
					))}
				</div>
			</div>
			<div className="card-footer text-center">
				{activity.links.map((link, i) => (
					<span key={"link" + i}>
						<a href={link.url} target="_blank" rel="noreferrer">
							<h3 className="d-inline">
								<i className={`bi bi-${link.icon} mx-3`}></i>
							</h3>
						</a>
					</span>
				))}
				{activity.socials.map((social, i) => (
					<span key={"social" + i}>
						<a href={social.url} target="_blank" rel="noreferrer">
							<h3 className="d-inline">
								<i className={`bi bi-${social.icon} mx-3`}></i>
							</h3>
						</a>
					</span>
				))}
			</div>
		</div>
	);
}
