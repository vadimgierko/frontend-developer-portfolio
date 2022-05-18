// this is the template section component rendering:
// 1. a section title,
// 2. container containing icons with the description name below the icon (iconItems).
// iconItems must be an array of objects:
// {icon: <SomeIcon {...props} />, name: "Some description name"}

export default function Section({ id = "", title = "", iconItems = [] }) {
	console.log("iconItems:", iconItems);
	return (
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
	);
}
