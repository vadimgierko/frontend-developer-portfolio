import React, { useState } from "react";
import NavLink from "../atoms/navbar-atoms/NavLink";
import SocialIconLink from "../atoms/navbar-atoms/SocialIconLink";
import { LINKS } from "../../data/LINKS";
import { useTheme } from "../../hooks/useTheme";

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
	const { theme, switchTheme } = useTheme();

	const [isNavCollapsed, setIsNavCollapsed] = useState(true);

	const handleNavCollapse = () => {
		setIsNavCollapsed(!isNavCollapsed);
	};

	return (
		<nav
			className={`navbar navbar-expand-lg navbar-${theme} bg-${theme} fixed-top`}
		>
			<div className="container">
				<div>
					<span
						className={`navbar-brand font-weight-bold text-${
							theme === "dark" ? "light" : "dark"
						} h3`}
					>
						Vadim Gierko
					</span>
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
								<SocialIconLink
									data={social}
									onClick={() => {
										if (!isNavCollapsed) {
											handleNavCollapse();
										}
									}}
								/>
							</li>
						))}
						<li className="nav-item">
							<i
								className={`bi bi-${
									theme === "dark" ? "sun" : "moon"
								} nav-link`}
								onClick={() => {
									switchTheme();
									if (!isNavCollapsed) {
										handleNavCollapse();
									}
								}}
							></i>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
