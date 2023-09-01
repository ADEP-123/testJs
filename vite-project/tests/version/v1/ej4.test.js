import { algoritmo } from "../../../version/v1/ej4";

describe("test ejercicio 4", () => {
    test('la funcion algoritmo devuelve un string', () => {
        let resultado = algoritmo("a","b","c",1,2,3);
        expect(typeof resultado).toBe("string")
    });
    test('la funcion algoritmo devuelve el nombre de la primera persona si esta es la mayor', () => {
        let resultado = algoritmo("a","b","c",3,2,1);
        expect(resultado).toBe("el nombre de la persona de mayor edad es a")
    });
    test('la funcion algoritmo devuelve el nombre de la segunda persona si esta es la mayor', () => {
        let resultado = algoritmo("a","b","c",2,3,1);
        expect(resultado).toBe("el nombre de la persona de mayor edad es b")
    });
    test('la funcion algoritmo devuelve el nombre de la tercera persona si esta es la mayor', () => {
        let resultado = algoritmo("a","b","c",2,1,3);
        expect(resultado).toBe("el nombre de la persona de mayor edad es c")
    });
})