export let algoritmo = (nom1, nom2, nom3, edad1, edad2, edad3) => {
    let arrayEdad = [edad1, edad2, edad3]
    let edadaux;
    for (let i = 0; i < arrayEdad.length; i++) {
        for (let k = i + 1; k < arrayEdad.length; k++) {
            if (arrayEdad[i] < arrayEdad[k]) {
                edadaux = arrayEdad[i]
                arrayEdad[i] = arrayEdad[k]
                arrayEdad[k] = edadaux
            }
        }
    }
    const arrayArr = arrayEdad
    if (arrayArr[0] === edad1) {
        return `el nombre de la persona de mayor edad es ${nom1}`
    }
    if (arrayArr[0] === edad2) {
        return `el nombre de la persona de mayor edad es ${nom2}`
    }
    if (arrayArr[0] === edad3) {
        return `el nombre de la persona de mayor edad es ${nom3}`
    }
}