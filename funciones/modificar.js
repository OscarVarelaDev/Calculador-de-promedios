
const guardar = document.getElementById("guardar");
const regresar = document.getElementById("regresar");

regresar.addEventListener('click', function () {
    window.location.href = "../index.html";

});
function mostrarDatos() {
    let alumnos = JSON.parse(localStorage.getItem("alumnos"));

    if (alumnos == null) {
        swal("No hay alumnos registrados");
        regresar();
    } else {

        console.log(alumnos);
        let numAlumno = localStorage.getItem("numAlumno");
        console.log(numAlumno);
        let alumno = alumnos[numAlumno];
        document.getElementById("nombre").value = alumno.nombre;
        document.getElementById("matematicas").value = alumno.matematicas;
        document.getElementById("fisica").value = alumno.fisica;
        document.getElementById("quimica").value = alumno.quimica;
        document.getElementById("historia").value = alumno.historia;
        document.getElementById("lenguaje").value = alumno.lenguaje;
    }
}
mostrarDatos();

guardar.addEventListener('click', function () {
    let alumnos = JSON.parse(localStorage.getItem("alumnos"));
    let numAlumno = localStorage.getItem("numAlumno");
    let nombre = document.getElementById("nombre").value;
    let matematicas = document.getElementById("matematicas").value;
    let fisica = document.getElementById("fisica").value;
    let quimica = document.getElementById("quimica").value;
    let historia = document.getElementById("historia").value;
    let lenguaje = document.getElementById("lenguaje").value;
    let promedio = (parseInt(matematicas) + parseInt(fisica) + parseInt(quimica) + parseInt(historia) + parseInt(lenguaje)) / 5;
    alumnos[numAlumno].nombre = nombre;
    alumnos[numAlumno].matematicas = matematicas;
    alumnos[numAlumno].fisica = fisica;
    alumnos[numAlumno].quimica = quimica;
    alumnos[numAlumno].historia = historia;
    alumnos[numAlumno].lenguaje = lenguaje;
    alumnos[numAlumno].promedio = promedio;
    console.log(alumnos)
    localStorage.setItem("alumnos", JSON.stringify(alumnos));

    window.location.href = "../index.html";


})


