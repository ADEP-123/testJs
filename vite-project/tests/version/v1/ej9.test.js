import { algoritmo } from "../../../version/v1/ej9";

describe("test ejercicio 9", () => {
    test('la funcion algoritmo devuelve un string', () => {
        let resultado = algoritmo(1, 10700, 5);
        expect(typeof resultado).toBe("string")
    });
    test('la funcion algoritmo devuelve nombre del atelta con la mayor marca y su marca si este atleta no rompio el record', () => {
        const atletas = [
            {
                nombre: "Marco",
                marca: "13.1"
            },
            {
                nombre: "Ana",
                marca: "12"
            },
            {
                nombre: "Miuchael",
                marca: "14"
            }
        ];
        let resultado = algoritmo(atletas);
        expect(resultado).toBe(`El atleta con la mayor marca fue Miuchael y su marca fue 14. `)
    });

    test('la funcion algoritmo devuelve un string', () => {
        let resultado = algoritmo(1, 10700, 5);
        expect(typeof resultado).toBe("string")
    });
    test('la funcion algoritmo devuelve nombre del atelta con la mayor marca y su marca, si este atleta si rompio el record devuelve el mensaje ademas rompio el record recibiendo 500 millones de pesos', () => {
        const atletas = [
            {
                nombre: "Marco",
                marca: "13.1"
            },
            {
                nombre: "Ana",
                marca: "12"
            },
            {
                nombre: "Miuchael",
                marca: "16"
            }
        ];
        let resultado = algoritmo(atletas);
        expect(resultado).toBe(`El atleta con la mayor marca fue Miuchael y su marca fue 16. Ademas rompio el record recibiendo 500 millones de pesos`)
    });
})