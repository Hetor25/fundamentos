let words: string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'PAPAYA',
    'VEHICULO',
    'ROMA',
    'IPHONE',
    'GATO',
    'ROCKY'
];


export function getRandomWord() {

    const randomIndex = Math.floor(Math.random() * words.length)


    return words[randomIndex];
}