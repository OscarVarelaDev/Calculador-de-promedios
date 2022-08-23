

const regresar = document.getElementById("regresar");
const guardar = document.getElementById("guardar");
let alumnos = []

 regresar.addEventListener('click', function () {
    window.location.href = "../index.html";

});


guardar.addEventListener("click", function () {
    const nombre = document.getElementById("nombre").value;
    const matematicas = document.getElementById("matematicas").value;
    const fisica = document.getElementById("fisica").value;
    const quimica = document.getElementById("quimica").value
    const historia = document.getElementById("historia").value;
    const lenguaje = document.getElementById("lenguaje").value;
    let alum = localStorage.getItem("alumnos");
   
    if (alum == null) {
        alumnos = [];
    } else {
        alumnos = JSON.parse(alum);
    }

    if (matematicas > 0 && matematicas <= 10
        && fisica > 0 && fisica <= 10
        && quimica > 0 && quimica <= 10
        && historia > 0 && historia <= 10
        && lenguaje > 0 && lenguaje <= 10) {

        if (!nombre || !matematicas || !fisica || !quimica || !historia || !lenguaje) {
            swal("Ingresa todos los campos");

        } else {

            let promedio = (parseFloat(matematicas) + parseFloat(fisica) + parseFloat(quimica) + parseFloat(historia) + parseFloat(lenguaje)) / 5;

            const nuevoAlumno = {
                nombre: nombre,
                matematicas: parseFloat(matematicas),
                fisica: parseFloat(fisica),
                quimica: parseFloat(quimica),
                historia: parseFloat(historia),
                lenguaje: parseFloat(lenguaje),
                promedio: promedio
            };

            alumnos.push(nuevoAlumno);
            localStorage.setItem("alumnos", JSON.stringify(alumnos));
            swal("Alumno agregado");
            console.log("Local:" + localStorage);
            if (localStorage != null) {
                console.log("Local:" + localStorage);
               
                window.location.href = "../index.html";
             
            }





        }
    }
    else {
        swal("Ingresa un valor entre 1 y 10");
    }


});



