export default function Project({ repoData, i }) {
	return (
		<div className="row mb-3">
			{i === 0 || i % 2 === 0 ? (
				<div className="col-md-6">
					<a
						href={repoData.gp}
						target="_blank"
						rel="noreferrer"
						style={{ cursor: "pointer" }}
					>
						<img
							className="img-fluid border border-secondary"
							src={repoData.img}
						/>
					</a>
				</div>
			) : (
				<div className="card-body col-md-6">
					<h4 className="card-title text-primary ">
						<a href={repoData.gp} target="_blank" rel="noreferrer">
							{repoData.name}
						</a>
					</h4>
					<p className="card-text">
						<strong>Description:</strong> {repoData.description}
					</p>
					<p className="card-text">
						<small className="text-muted">
							<strong>In this project I use:</strong>{" "}
							{repoData.language}
						</small>
					</p>
					<a
						className="btn btn-primary me-2"
						href={repoData.gp}
						target="_blank"
						rel="noreferrer"
					>
						Try the app!
					</a>
					<a
						className="btn btn-outline-primary"
						href={repoData.repoUrl}
						target="_blank"
						rel="noreferrer"
					>
						See the code!
					</a>
				</div>
			)}
			{i === 0 || i % 2 === 0 ? (
				<div className="card-body col-md-6">
					<h4 className="card-title text-primary ">
						<a href={repoData.gp} target="_blank" rel="noreferrer">
							{repoData.name}
						</a>
					</h4>
					<p className="card-text">
						<strong>Description:</strong> {repoData.description}
					</p>
					<p className="card-text">
						<small className="text-muted">
							<strong>In this project I use:</strong>{" "}
							{repoData.language}
						</small>
					</p>
					<a
						className="btn btn-primary me-2"
						href={repoData.gp}
						target="_blank"
						rel="noreferrer"
					>
						Try the app!
					</a>
					<a
						className="btn btn-outline-primary"
						href={repoData.repoUrl}
						target="_blank"
						rel="noreferrer"
					>
						See the code!
					</a>
				</div>
			) : (
				<div className="col-md-6">
					<a
						href={repoData.gp}
						target="_blank"
						rel="noreferrer"
						style={{ cursor: "pointer" }}
					>
						<img
							className="img-fluid border border-secondary"
							src={repoData.img}
						/>
					</a>
				</div>
			)}
		</div>
	);
}
