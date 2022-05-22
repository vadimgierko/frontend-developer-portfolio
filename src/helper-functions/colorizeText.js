export default function colorizeText(text = "", isDarkTheme = false) {
	const colorizedText = [];

	const randomColorIntensity = () => {
		if (isDarkTheme) {
			// if dark theme, random color will be lighter
			return Math.random() * 200 + 50;
		}
		// if light theme, random color will be darker
		return Math.random() * 250 - 60;
	};

	Array.from(text).forEach((letter) => {
		// get random color intensity for each rgb parameter:
		const r = randomColorIntensity();
		const g = randomColorIntensity();
		const b = randomColorIntensity();
		// combine random rgb's parameters into random color:
		const randomColor = `rgb(${r}, ${g}, ${b})`;
		// convert a letter into <span /> to colorize it independently:
		const span = <span style={{ color: randomColor }}>{letter}</span>;
		// add colorized letter into array, which will work same as a string:
		colorizedText.push(span);
	});
	return colorizedText;
}
