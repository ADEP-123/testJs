export let algoritmo = (ladoCuadrado, baseRectangulo, alturaRectangulo) => {
    let result = ""
    if (ladoCuadrado) {
        result += `El perimetro del cuadrado es ${ladoCuadrado * 4}. `
    }
    if (baseRectangulo && alturaRectangulo) {
        result += `El area del rectangulo es ${baseRectangulo * alturaRectangulo}`
    }
    return result
}