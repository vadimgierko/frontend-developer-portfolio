import courses from "../data/courses";

export default function Courses() {
    return (
        <div id="courses" className="text-center" style={{paddingTop: "70px"}}>
            <h1 className="py-3">Taken Courses</h1>
            {courses.map((course, i) => (
                <div key={"course" + i}>
                    <h3>{course.name}</h3>
                    <p>{course.description}</p>
                    {course.courses.map((item, i) => (
                        <a key={"item" + i} href={item.link} target="_blank" style={{display: "block", padding: "10px"}} rel="noreferrer">{item.name}</a>
                    ))}
                    <hr></hr>
                </div>
            ))}
        </div>
    );
}