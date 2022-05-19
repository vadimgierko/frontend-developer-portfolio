import Image from "react-bootstrap/Image";

export default function Hero(props) {
	// props => vars
	const imgSrc = props.hero.imgSrc;
	const imgSize = props.imgSize;
	console.log("img size:", imgSize);
	const title = props.hero.title;
	const content = props.hero.content;

	return (
		<section id="hero" className="section">
			<div>
				<Image src={imgSrc} roundedCircle style={{ width: imgSize + "px" }} />
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
