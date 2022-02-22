export default function SocialIconLink({ data, onClick }) {
	return (
		<a
			key={data.type}
			href={data.url ? data.url : "#"}
			target="_blank"
			rel="noreferrer"
			className="nav-link"
			onClick={onClick}
		>
			<i className={`bi bi-${data.type}`}></i>
		</a>
	);
}
