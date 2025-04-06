const colorPalette: string[] = [
    "#7B9A56", "#F1A66D", "#F4A300", "#C7A7E4", "#9C8D4F", "#F4D03F", "#5C4B51", "#E6A5D7",
    "#FF6F61", "#FFC312", "#C1C8E4", "#F79C42", "#48C9B0", "#DFFF00", "#A569BD", "#16A085", 
    "#F39C12", "#1ABC9C", "#D35400", "#2980B9"
];

export function getRandomColors(numColors: number): string[] {
    const shuffledColors = [...colorPalette].sort(() => Math.random() - 0.5);
    const selectedColors: string[] = [];

    for (let i = 0; i < numColors; i++) {
        selectedColors.push(shuffledColors[i % shuffledColors.length]);
    }

    return selectedColors;
}
