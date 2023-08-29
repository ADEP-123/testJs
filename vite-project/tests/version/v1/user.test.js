import { saludar } from "../../../version/v1/user"

describe("test del archivo user.js", () => {
    test('la funcion saludar devuelve "hola mundo"', () => {
        let app = saludar();
        expect(app).toBe("hola mundo")
    })
    test('la funcion saludar devuelve un string', () => {
        let app = saludar();
        expect(typeof app).toBe("string")
    })

})