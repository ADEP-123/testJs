export let algoritmo = (estudiantes) => {
    let mayorNota = 0
    let nombreMayorNota;
    let menorNota = Infinity;
    let nombreMenorNota
    let hombres = 0;
    let mujeres = 0;
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].nota > mayorNota) {
            mayorNota = estudiantes[i].nota;
            nombreMayorNota = estudiantes[i].nombre;
        }
        if (estudiantes[i].nota < menorNota) {
            menorNota = estudiantes[i].nota;
            nombreMenorNota = estudiantes[i].nombre;
        }
        if (estudiantes[i].sexo == "masculino") {
            hombres++
        } else {
            mujeres++
        }
    }
    return `El estudiante con mas nota es ${nombreMayorNota} con ${mayorNota} y el estudiante con menor nota es ${nombreMenorNota} con ${menorNota}. La cantidad de hombres es ${hombres} y de mujeres ${mujeres}`
}