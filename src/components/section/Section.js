// this is the template section component rendering:
// 1. a section title,
// 2. container containing icons with the description name (iconItems).
// iconItems must be an array of objects:
// {icon: <SomeIcon />, name: "Some description name"}

import { useTheme } from "../../useTheme";

export default function Section({ id = "", title = "", iconItems = [] }) {
	const { theme } = useTheme();

	return (
		<div className={"section-container-" + theme}>
			<section id={id} className="section">
				<h1>{title}</h1>
				<br />
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						textAlign: "center",
						justifyContent: "center",
					}}
				>
					{iconItems.map((iconItem) => (
						<div
							key={iconItem.name}
							className="text-center"
							style={{ marginLeft: "0.5em", marginRight: "0.5em" }}
						>
							{iconItem.icon}
							<p>{iconItem.name}</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
