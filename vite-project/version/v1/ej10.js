export let algoritmo = (numeros) => {
    let sumatoria = 0;
    let cont = 0;
    let mayor = 0;
    let menor = Infinity;
    let prom = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] == 0) {
            if (cont == 0) {
                cont = 1;
                sumatoria = 0;
                mayor = 0;
                menor = 0;
                prom = 0;
            };
            break
        }
        if (numeros[i] != 0) {
            sumatoria += numeros[i];
            cont = i+1
            if (numeros[i] > mayor) {
                mayor = numeros[i]
            }
            if (numeros[i] < menor) {
                menor = numeros[i]
            }
        }
        prom = (sumatoria / cont)
    }

    const result = `la sumatoria de los valores fue ${sumatoria}, el promedio fue ${prom}, la cantidad de valores digitados fue ${cont}, el valor mayor fue ${mayor} y el menor fue ${menor}`
    return result
}