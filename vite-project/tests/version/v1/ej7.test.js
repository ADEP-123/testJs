import { algoritmo } from "../../../version/v1/ej7";

describe("test ejercicio 7", () => {
    test('la funcion algoritmo devuelve un string', () => {
        let resultado = algoritmo("atun", 10700, 5);
        expect(typeof resultado).toBe("string")
    });
    test('la funcion algoritmo devuelve el resumen de lo que debe pagar el cliente', () => {
        const nombre = "atun";
        const precio = 25000;
        const cantidad = 5;
        let resultado = algoritmo(nombre, precio, cantidad);
        expect(resultado).toBe(`El cliente debe pagar ${precio*cantidad} por ${cantidad} ${nombre}s`)
    });
})