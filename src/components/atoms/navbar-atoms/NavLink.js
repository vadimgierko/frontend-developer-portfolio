export default function NavLink({ text, to }) {
	return (
		<a href={to} className="nav-link">
			{text}
		</a>
	);
}
