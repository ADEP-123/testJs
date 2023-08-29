import { algoritmo } from "../../../version/v1/ej2"


describe('Pruebas ejercicio2', () => {
    test('La funcion algoritmo devuelve un string', () => {
        const resultado = algoritmo()
        expect(typeof resultado).toBe("string")
    });

    test('La funcion algoritmo devuelve "el numero es par y es mayor que 10" si el num es par y mayor que 10', () => {
        const resultado = algoritmo(12)
        expect(resultado).toBe("el numero es par y es mayor que 10")
    });

    test('La funcion algoritmo devuelve "el numero es impar y es mayor que 10" si el num es impar y mayor que 10', () => {
        const resultado = algoritmo(13)
        expect(resultado).toBe("el numero es impar y es mayor que 10")
    });

    test('La funcion algoritmo devuelve "el numero es impar y es menor que 10" si es impar y menor que 10', () => {
        const resultado = algoritmo(7)
        expect(resultado).toBe("el numero es impar y es menor que 10")
    });

    test('La funcion algoritmo devuelve "el numero es par y es menor que 10" si es par y menor que 10', () => {
        const resultado = algoritmo(6)
        expect(resultado).toBe("el numero es par y es menor que 10")
    });


})