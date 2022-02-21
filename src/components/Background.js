import { CREATIVE_ACTIVITIES } from "../data/CREATIVE_ACTIVITIES";
import colorizeText from "../functions/colorizeText";
import Activity from "./Activity";

export default function Background() {
	return (
		<div id="background" style={{ paddingTop: "70px" }}>
			<header style={{ textAlign: "center" }}>
				<h1>
					{colorizeText("Creative Background").map((span) => span)}
				</h1>
				<p>I wasn't born as a front-end developer. I am a creator.</p>
				<p>
					I've done (and still doing) a lot of creative things and
					projects (scroll down to see a few of them), which are
					"frozen" at the moment because of developing learning.
				</p>
			</header>
			<div className="row">
				{CREATIVE_ACTIVITIES.map((activity, i) => (
					<Activity key={"activity" + i} activity={activity} />
				))}
			</div>
		</div>
	);
}
