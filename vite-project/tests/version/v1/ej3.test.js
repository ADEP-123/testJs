import { algoritmo } from "../../../version/v1/ej3";

describe("test del archivo user.js", () => {
    test('la funcion algoritmo devuelve un numero', () => {
        let app = algoritmo(1,2);
        expect(typeof app).toBe("number")
    })

})