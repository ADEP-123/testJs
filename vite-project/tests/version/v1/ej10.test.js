import { algoritmo } from "../../../version/v1/ej10";

describe("test ejercicio 10", () => {
    test('la funcion algoritmo devuelve un string', () => {
        let resultado = algoritmo([1, 10700, 5,50,0,20]);
        expect(typeof resultado).toBe("string")
    });
    test('se espera : la sumatoria de los valores fue 10756, el promedio fue 2689, la cantidad de valores digitados fue 4, el valor mayor fue 10700 y el menor fue 1', () => {
        const numeros = [1, 10700, 5,50,0,20];
        let resultado = algoritmo(numeros);
        expect(resultado).toBe("la sumatoria de los valores fue 10756, el promedio fue 2689, la cantidad de valores digitados fue 4, el valor mayor fue 10700 y el menor fue 1")
    });
})