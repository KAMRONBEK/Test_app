import { useState } from 'react';

function generateRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export default function useRandomColorGenerate() {
    const [color, setColor] = useState<string>(generateRandomColor());
    const generateColor = () => setColor(generateRandomColor());
    return { color, generateColor };
}
