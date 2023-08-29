import { algoritmo } from "../../../version/v1/ej1";


describe("Pruebas ejercicio1", () => {
    test('La función algoritmo devuelve un string', () => {
        const resultado = algoritmo();
        expect(typeof resultado).toBe("string");
    });

    test('La función algoritmo devuelve "Estudie" cuando el promedio es menor o igual a 3.9', () => {
        const resultado = algoritmo(3.5, 4.0, 3.7);
        expect(resultado).toBe("Estudie");
    });

    test('La función algoritmo devuelve "becado" cuando el promedio es superior a 3.9', () => {
        const resultado = algoritmo(4.0, 4.0, 4.0);
        expect(resultado).toBe("becado");
    });
})