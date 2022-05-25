import { useTheme } from "../../useTheme";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { BsLinkedin, BsGithub, BsSunFill, BsMoonFill } from "react-icons/bs";
import colorizeText from "../../helper-functions/colorizeText";

export default function Header(props) {
	const { theme, switchTheme } = useTheme();
	// props => vars
	const brandContent = props.header.navbar.brand.content;
	const navLinks = props.header.navbar.links;

	return (
		<header>
			<Navbar
				collapseOnSelect
				expand="lg"
				bg={theme}
				variant={theme}
				className="fixed-top shadow"
			>
				<Container>
					<Navbar.Brand href="#">{brandContent}</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							{navLinks.map((navLink) => (
								<Nav.Link
									key={navLink.name}
									href={navLink.link}
									target={navLink.name === "Blog" ? "_blank" : ""}
								>
									{navLink.name === "Creative Background"
										? colorizeText(
												navLink.name,
												theme === "dark" ? true : false
										  )
										: navLink.name}
								</Nav.Link>
							))}
						</Nav>
						<Nav>
							<Nav.Link>
								{theme === "light" ? (
									<BsMoonFill onClick={switchTheme} />
								) : (
									<BsSunFill onClick={switchTheme} />
								)}
							</Nav.Link>
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
