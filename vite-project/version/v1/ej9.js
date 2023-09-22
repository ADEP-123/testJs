export let algoritmo = (atletas) => {
    const record = 15.50
    let mayorMarca = 0
    let nombreMayorMarca = "";
    let newRecord = false;
    let result = "";
    for (let i = 0; i < atletas.length; i++) {
        if (mayorMarca < atletas[i].marca) {
            mayorMarca = atletas[i].marca
            nombreMayorMarca = atletas[i].nombre
        }
    }
    result += `El atleta con la mayor marca fue ${nombreMayorMarca} y su marca fue ${mayorMarca}. `
    if (mayorMarca > record) {
        newRecord = true
        result += `Ademas rompio el record recibiendo 500 millones de pesos`
    }
    return result
}