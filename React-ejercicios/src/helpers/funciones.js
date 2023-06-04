export const generarNumeros = () => {
    const numeros = [];
    for (let i = 0; i < 5; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        numeros.push(numeroAleatorio);
    }
    return numeros;
}