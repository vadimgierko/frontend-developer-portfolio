export default function colorizeText(text, isDarkTheme) {
	const textToColorize = text;
	const colorizedText = [];

	for (let i = 0; i < textToColorize.length; i++) {
		const randomNum = isDarkTheme
			? Math.random() * 150 + 100
			: Math.random() * 250 - 150;
		const randomNum2 = isDarkTheme
			? Math.random() * 150 + 100
			: Math.random() * 250 - 150;
		const randomNum3 = isDarkTheme
			? Math.random() * 150 + 100
			: Math.random() * 250 - 150;
		const color = `rgb(${randomNum}, ${randomNum2}, ${randomNum3})`;
		const span = (
			<span key={"span" + i} style={{ color: color }}>
				{textToColorize[i]}
			</span>
		);
		colorizedText.push(span);
	}
	return colorizedText;
}
