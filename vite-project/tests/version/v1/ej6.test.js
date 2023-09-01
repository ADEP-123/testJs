import { algoritmo } from "../../../version/v1/ej6";

describe("test ejercicio 6", () => {
    test('la funcion algoritmo devuelve un string', () => {
        let resultado = algoritmo(1, 2);
        expect(typeof resultado).toBe("string")
    });
    test('la funcion algoritmo devuelve la nota mayor la nota menor los nombres de esos estudiantes la cantidad de hombres y mujeres', () => {
        const estudiantes = [
            {
                nombre: "marco",
                nota: 1.5,
                sexo: "masculino"
            },
            {
                nombre: "ana",
                nota: 4,
                sexo: "femenino"
            },
            {
                nombre: "paco",
                nota: 4.8,
                sexo: "masculino"
            },
        ]
        let resultado = algoritmo(estudiantes);
        expect(resultado).toBe(`El estudiante con mas nota es paco con 4.8 y el estudiante con menor nota es marco con 1.5. La cantidad de hombres es 2 y de mujeres 1`)
    });
})