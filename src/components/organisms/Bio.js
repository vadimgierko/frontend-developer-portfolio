import { useTheme } from "../../hooks/useTheme";

export default function Bio() {
	const { theme } = useTheme();

	return (
		<div className={`bio-card card bg-${theme}`}>
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
			<div className="card-footer text-muted">Lublin, Poland</div>
		</div>
	);
}
