import Image from "react-bootstrap/Image";

export default function About(props) {
	// props => vars
	const imgSrc = props.about.imgSrc;
	const imgSize = props.imgSize;
	const title = props.about.title;
	const content = props.about.content;

	return (
		<section id="about" className="section">
			<div>
				<Image src={imgSrc} roundedCircle style={{ width: imgSize + "px" }} />
			</div>
			<br />
			<div>
				<h1 id="about-title">{title}</h1>
				<br />
				<p id="about-content">{content}</p>
			</div>
		</section>
	);
}
