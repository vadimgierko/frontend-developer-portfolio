import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import colorizeText from "../../helper-functions/colorizeText";

export default function Header(props) {
	// props => vars
	const brandContent = props.header.navbar.brand.content;
	const navLinks = props.header.navbar.links;

	return (
		<header>
			<Navbar
				collapseOnSelect
				expand="md"
				bg="light"
				variant="light"
				className="fixed-top"
			>
				<Container>
					<Navbar.Brand href="#">{brandContent}</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							{navLinks.map((navLink, n) => (
								<Nav.Link
									key={`navlink-${navLink.name}`}
									href={navLink.link}
									target={navLink.name === "Blog" ? "_blank" : ""}
								>
									{navLink.name === "Creative Background"
										? colorizeText(navLink.name)
										: navLink.name}
								</Nav.Link>
							))}
						</Nav>
						<Nav>
							<Nav.Link
								href="https://pl.linkedin.com/in/vadimgierko"
								target="_blank"
							>
								<BsLinkedin />
							</Nav.Link>
							<Nav.Link href="https://github.com/vadimgierko" target="_blank">
								<BsGithub />
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}
