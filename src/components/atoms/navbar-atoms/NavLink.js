import colorizeText from "../../../functions/colorizeText";
import { useTheme } from "../../../hooks/useTheme";

export default function NavLink({ text, to, onClick }) {
	const { theme } = useTheme();

	return (
		<a
			href={to}
			className="nav-link"
			target={text === "Blog" ? "_blank" : null}
			rel={text === "BLog" ? "noreferrer" : null}
			onClick={onClick}
		>
			{text === "Creative Background"
				? colorizeText(text, theme === "dark" ? true : false)
				: text}
		</a>
	);
}
