export default function colorizeText(text) {
    const textToColorize = text;
    const colorizedText = [];
    for (let i = 0; i < textToColorize.length; i++) {
        const randomNum = Math.random() * 200;
        const randomNum2 = Math.random() * 200;
        const randomNum3 = Math.random() * 200;
        const color = `rgb(${randomNum}, ${randomNum2}, ${randomNum3})`;
        const span = <span key={"span" + i} style={{color: color}}>{textToColorize[i]}</span>;
        colorizedText.push(span);
    }
    return colorizedText;
}