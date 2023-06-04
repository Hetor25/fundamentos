export const generarNumeros = () => {
  const numeros = [];
  for (let i = 0; i < 5; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    numeros.push(numeroAleatorio);
  }
  return numeros;
};

export const generarNombres = () => {
  const nombres = [
    "Juan",
    "María",
    "Pedro",
    "Ana",
    "Luis",
    "Laura",
    "Carlos",
    "Isabel",
    "José",
    "Sofía",
  ];
  const apellidos = [
    "Gómez",
    "Rodríguez",
    "Martínez",
    "López",
    "González",
    "Herrera",
    "Sánchez",
    "Díaz",
    "Torres",
    "Pérez",
  ];

  let nombresAleatorios = [];

  for (const i = 0; i < 3; i++) {
    const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    const apellidoAleatorio =
      apellidos[Math.floor(Math.random() * apellidos.length)];
    const nombreCompleto = nombreAleatorio + " " + apellidoAleatorio;
    nombresAleatorios.push(nombreCompleto);
  }

  return nombresAleatorios;
};
