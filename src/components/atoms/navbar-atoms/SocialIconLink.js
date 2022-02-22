export default function SocialIconLink({ data }) {
	return (
		<a
			key={data.type}
			href={data.url ? data.url : "#"}
			target="_blank"
			className="nav-link"
			rel="noreferrer"
		>
			<i className={`bi bi-${data.type}`}></i>
		</a>
	);
}
