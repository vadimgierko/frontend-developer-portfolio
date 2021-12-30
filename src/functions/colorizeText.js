export default function colorizeText(text) {
    const textToColorize = text;
    const colorizedText = [];
    for (let i = 0; i < textToColorize.length; i++) {
        const randomNum = Math.random() * (250 - 100) + 100;
        const randomNum2 = Math.random() * (250 - 100) + 100;
        const randomNum3 = Math.random() * (250 - 100) + 100;
        const color = `rgb(${randomNum}, ${randomNum2}, ${randomNum3})`;
        const span = <span key={"span" + i} style={{color: color}}>{textToColorize[i]}</span>;
        colorizedText.push(span);
    }
    return colorizedText;
}