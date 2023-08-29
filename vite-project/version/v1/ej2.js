export const algoritmo = (num) => {
    const par = (num % 2 == 0) ? "es par" : "es impar"
    const may10 = (num > 10) ? "es mayor" : "es menor"
    return `el numero ${par} y ${may10} que 10`
}