export default function Bio() {
	return (
		<div className="bio-card card">
			<img
				className="card-img-top"
				src="img/vadim-gerko-zdjecie-cv.jpg"
				alt="vadim gierko"
			/>
			<div className="card-body">
				<p>
					<strong>Hi there!</strong> I'm a self-taught React /
					Firebase Developer building full-stack web apps that help
					people to push their (and mine) creativity & productivity to
					its limits! Check out my portfolio for more info & projects!
				</p>
			</div>
			<div className="card-footer">
				<p className="text-muted">Lublin, Poland</p>
			</div>
		</div>
	);
}
