import { algoritmo } from "../../../version/v1/ej8";

describe("test ejercicio 8", () => {
    test('la funcion algoritmo devuelve un string', () => {
        let resultado = algoritmo(1, 10700, 5);
        expect(typeof resultado).toBe("string")
    });
    test('la funcion algoritmo devuelve el perimetro del cuadrado si solo se envia el lado del cuadrado', () => {
        const ladoCuadrado = 1;
        const baseRectangulo = null;
        const alturaRectangulo = null;
        let resultado = algoritmo(ladoCuadrado, baseRectangulo, alturaRectangulo);
        expect(resultado).toBe(`El perimetro del cuadrado es ${ladoCuadrado * 4}. `)
    });
    test('la funcion algoritmo devuelve el area del rectaungulo si solo envian la informacion del rectangulo', () => {
        const ladoCuadrado = null;
        const baseRectangulo = 1;
        const alturaRectangulo = 2;
        let resultado = algoritmo(ladoCuadrado, baseRectangulo, alturaRectangulo);
        expect(resultado).toBe(`El area del rectangulo es ${baseRectangulo * alturaRectangulo}`)
    });
    test('la funcion algoritmo devuelve el perimetro del cuadrado y el area del reactangulo si envia toda la informacion', () => {
        const ladoCuadrado = 2;
        const baseRectangulo = 1;
        const alturaRectangulo = 2;
        let resultado = algoritmo(ladoCuadrado, baseRectangulo, alturaRectangulo);
        expect(resultado).toBe(`El perimetro del cuadrado es ${ladoCuadrado * 4}. El area del rectangulo es ${baseRectangulo * alturaRectangulo}`)
    });
})