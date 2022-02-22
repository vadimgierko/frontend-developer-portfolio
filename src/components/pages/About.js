import { TECHNOLOGIES } from "../../data/TECHNOLOGIES";
import { INTERESTS } from "../../data/INTERESTS";
import Bio from "../organisms/Bio";

export default function About() {
	return (
		<div className="about-page row mb-3" id="about">
			<section className="bio-section col-md-4">
				<Bio />
			</section>
			<section className="about-section col-md text-justify">
				<h1>Hello, World!</h1>
				<p>
					My name is Vadim Gierko and I’m a{" "}
					<strong>self-taught React / Firebase developer</strong> with
					more than a year of non-commercial programming experience
					&... an artistic, blogging and musical background.
				</p>
				<h2>What I love to develop</h2>
				<p>
					I'm insanely excited to build complex <strong>SPA</strong>s
					with <strong>React & Firebase</strong> (that's why I called
					myself a React/Firebase developer above 😆) with users
					authentication & all of CRUD features.
				</p>
				<p>
					I'm not a back-end developer, but I hope to become a
					full-stack in the future & using Firebase as BaaS gives me
					the opportunity to feel like one 😆 and build in fact
					full-stack apps.
				</p>
				<h2>Technologies, languages, tools & frameworks I use</h2>
				<ul>
					{TECHNOLOGIES.map((technology, i) => (
						<li key={"technology-" + i}>{technology}</li>
					))}
				</ul>
				<h3>What else I am interested in</h3>
				<ul>
					{INTERESTS.map((interest, i) => (
						<li key={"interest-" + i}>{interest}</li>
					))}
				</ul>
			</section>
		</div>
	);
}
