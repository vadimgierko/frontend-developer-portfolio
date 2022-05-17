import Image from "react-bootstrap/Image";

export default function Hero(props) {
	// props => vars
	const imgSrc = props.hero.imgSrc;
	const title = props.hero.title;
	const content = props.hero.content;

	return (
		<section id="hero">
			<div>
				<Image src={imgSrc} roundedCircle style={{ width: "100px" }} />
			</div>
			<br />
			<div>
				<h1 id="hero-title">{title}</h1>
				<br />
				<p id="hero-content">{content}</p>
			</div>
		</section>
	);
}
