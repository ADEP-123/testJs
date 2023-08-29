export let algoritmo = (nota1 = 3.8, nota2 = 2.7, nota3 = 4.7) => {
    const promedio = (nota1 + nota2 + nota3) / 3;
    const resultado = promedio <= 3.9 ? "Estudie" : "becado"; 
    return resultado
}