import courses from "../../data/courses";

export default function Courses() {
	return (
		<div id="courses" className="courses-page text-center">
			<h1 className="py-3">Taken Courses</h1>
			<hr />
			<div className="row">
				{courses.map((course, i) => (
					<div className="col-xl mt-3" key={"course" + i}>
						<h3>{course.name}</h3>
						<p>{course.description}</p>
						{course.courses.map((item, i) => (
							<a
								key={"item" + i}
								href={item.link}
								target="_blank"
								style={{ display: "block", padding: "10px" }}
								rel="noreferrer"
							>
								{item.name}
							</a>
						))}
					</div>
				))}
			</div>
		</div>
	);
}
