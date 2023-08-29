import { obtener } from "../../../version/v1/factura";

describe("a objeto", () => {
    test('El objeto esperado {...id, ...nombre}', () => {
        let obj = {
            id: 1,
            nombre: "Miguel"
        };
        let app = obtener();
        expect(app).toStrictEqual(obj);
    })
})