import { algoritmo } from "../../../version/v1/ej5";

describe("test ejercicio 5", () => {
    test('la funcion algoritmo devuelve un string', () => {
        let resultado = algoritmo(1, 2);
        expect(typeof resultado).toBe("string")
    });
    test('la funcion algoritmo devuelve suma y resta si el primer numero es mayor', () => {
        const num1 = 2;
        const num2 = 1;
        let resultado = algoritmo(num1, num2);
        expect(resultado).toBe(`La suma entre los numeros es ${num1 + num2} y la diferencia es ${num1 - num2}`)
    });
    test('la funcion algoritmo devuelve multiplicacion y division si el primer numero es menor', () => {
        const num1 = 1;
        const num2 = 2;
        let resultado = algoritmo(num1, num2);
        expect(resultado).toBe(`El producto entre los numeros es ${num1 * num2} y la division es ${num1 / num2}`)
    });
    test('la funcion algoritmo devuelve que son iguales si los numeros son iguales', () => {
        const num1 = 1;
        const num2 = 1;
        let resultado = algoritmo(num1, num2);
        expect(resultado).toBe(`Los numeros son iguales`)
    });
})