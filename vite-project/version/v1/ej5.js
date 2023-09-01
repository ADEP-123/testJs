export let algoritmo = (num1, num2) => {
    if (num1 > num2) {
        return `La suma entre los numeros es ${num1 + num2} y la diferencia es ${num1 - num2}`
    } else if (num2 > num1) {
        return `El producto entre los numeros es ${num1 * num2} y la division es ${num1 / num2}`
    } else {
        return `Los numeros son iguales`
    }
}