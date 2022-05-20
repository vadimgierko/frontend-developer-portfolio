import { useState } from "react";
// react-boostrap components:
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// icons:
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

export default function Slider({ items }) {
	//console.log("Slider items:", items);
	const [index, setIndex] = useState(0);

	return (
		<div className="slider">
			<Row className="slider-img-section">
				<Col
					xs={2}
					style={{
						cursor: "pointer",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
					onClick={() =>
						setIndex((prev) => (prev - 1 < 0 ? items.length - 1 : prev - 1))
					}
				>
					<AiOutlineLeft size={40} />
				</Col>
				<Col>
					<div>
						<Image src={items[index].img} fluid rounded />
					</div>
				</Col>
				<Col
					xs={2}
					style={{
						cursor: "pointer",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
					onClick={() =>
						setIndex((prev) => (prev + 1 > items.length - 1 ? 0 : prev + 1))
					}
				>
					<AiOutlineRight size={40} />
				</Col>
			</Row>
			<br />
			<h3>{items[index].name}</h3>
			<p>{items[index].shortDescription}</p>
			<div
				className="btn-section"
				style={{
					cursor: "pointer",
					display: "flex",
					justifyContent: "center",
					gap: "1em",
				}}
			>
				<Button variant="primary" href={items[index].gp} target="_blank">
					Try the app!
				</Button>
				<Button
					variant="outline-primary"
					href={items[index].repoUrl}
					target="_blank"
				>
					See the code!
				</Button>
			</div>
		</div>
	);
}
