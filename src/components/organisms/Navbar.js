import React, { useState } from "react";
import NavLink from "../atoms/navbar-atoms/NavLink";
import SocialIconLink from "../atoms/navbar-atoms/SocialIconLink";
import colorizeText from "../../functions/colorizeText";
import { LINKS } from "../../data/LINKS";

const NAVLINKS = [
	{
		to: "#about",
		text: "About",
	},
	{
		to: "#projects",
		text: "Projects",
	},
	{
		to: "#background",
		text: "Creative Background",
	},
	{
		to: "https://vadimgierko.github.io/blogging-platform/#/blogs/my-programming-journey/summary-of-my-first-year-of-learning-web-development-roadmap-projects-and-tips-for-newbies",
		text: "Blog",
	},
];

export default function Navbar() {
	const [isNavCollapsed, setIsNavCollapsed] = useState(true);

	const handleNavCollapse = () => {
		setIsNavCollapsed(!isNavCollapsed);
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<div className="container">
				<div>
					<a
						className="navbar-brand font-weight-bold text-light h3"
						to="#"
					>
						Vadim Gierko
					</a>
				</div>
				<button
					className="navbar-toggler collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarColor01"
					aria-controls="navbarColor01"
					aria-expanded={isNavCollapsed ? true : false}
					aria-label="Toggle navigation"
					onClick={handleNavCollapse}
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className={`navbar-collapse ${
						isNavCollapsed ? "collapse" : null
					} `}
					id="navbarColor01"
				>
					<ul className="navbar-nav me-auto">
						{NAVLINKS.map((navLink, i) => (
							<li key={"nav-item-" + i} className="nav-item">
								<NavLink
									to={navLink.to}
									onClick={() => {
										if (!isNavCollapsed) {
											handleNavCollapse();
										}
									}}
									text={navLink.text}
								/>
							</li>
						))}
					</ul>
					<ul className="navbar-nav">
						{LINKS.socials.map((social) => (
							<li
								key={"social-icon-link-" + social.type}
								className="nav-item"
							>
								<SocialIconLink data={social} />
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}

/**
 * ${
						isNavCollapsed
							? "collapse"
							: null
					} 
 */
