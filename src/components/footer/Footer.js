import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function Footer({
	releaseYear = new Date().getFullYear(), // default value = current year
	links = [],
}) {
	return (
		<footer style={{ textAlign: "center" }}>
			<Navbar bg="light" variant="light">
				<Container>
					<Nav className="m-auto">
						<Nav.Link disabled>
							<Copyright releaseYear={releaseYear} />
						</Nav.Link>
						{links.map((link, l) => (
							<Nav.Link
								key={`navlink-${link.label}`}
								href={link.link}
								target="_blank"
							>
								{link.label}
							</Nav.Link>
						))}
					</Nav>
				</Container>
			</Navbar>
		</footer>
	);
}

// Copyright component gets current year automatically &
// adds current year to the release year if not same
function Copyright({ releaseYear }) {
	const currentYear = new Date().getFullYear();
	return (
		<span>
			&copy; {releaseYear}
			{currentYear === releaseYear ? null : "-" + currentYear}
		</span>
	);
}
