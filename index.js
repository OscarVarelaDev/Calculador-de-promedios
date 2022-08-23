

const agregar = document.getElementById("agregar");
const modificar = document.getElementById("modificar");
const guardar = document.getElementById("guardar");
const eliminar = document.getElementById("eliminar");

mostrarAlumnos();


function mostrarAlumnos() {
    let alumnos = JSON.parse(localStorage.getItem("alumnos"));

    if (alumnos == null) {
        alumnos = [];

    }

    let tabla = document.getElementById("table");
    for (let i = 0; i < alumnos.length; i++) {
        let fila = tabla.insertRow(1);
        let celdaNumero = fila.insertCell();
        let celdaNombre = fila.insertCell();
        let celdaMatematicas = fila.insertCell();
        let celdaFisica = fila.insertCell();
        let celdaQuimica = fila.insertCell();
        let celdaHistoria = fila.insertCell();
        let celdaLenguaje = fila.insertCell();
        let promedio = fila.insertCell();
        let celdaBotonEliminar = fila.insertCell();
        let celdaBotonModificar = fila.insertCell();

        celdaNumero.innerHTML = i + 1;
        celdaNombre.innerHTML = alumnos[i].nombre;
        celdaMatematicas.innerHTML = alumnos[i].matematicas;
        celdaFisica.innerHTML = alumnos[i].fisica;
        celdaQuimica.innerHTML = alumnos[i].quimica;
        celdaHistoria.innerHTML = alumnos[i].historia;
        celdaLenguaje.innerHTML = alumnos[i].lenguaje;
        promedio.innerHTML = alumnos[i].promedio;


        celdaBotonModificar.innerHTML = '<button class="btn btn-warning" onclick="modificarAlumno(' + i + ')">Modificar</button>';
        celdaBotonEliminar.innerHTML = '<button id="elimnar" class="btn btn-danger" onclick="eliminarAlumno(' + i + ')">Eliminar</button>';
        if (alumnos[i].matematicas <= 6) { celdaMatematicas.style.backgroundColor = "red", celdaMatematicas.style.color = "white"; }
        if (alumnos[i].fisica <= 6) { celdaFisica.style.backgroundColor = "red", celdaFisica.style.color = "white"; }
        if (alumnos[i].quimica <= 6) { celdaQuimica.style.backgroundColor = "red", celdaQuimica.style.color = "white"; }
        if (alumnos[i].historia <= 6) { celdaHistoria.style.backgroundColor = "red", celdaHistoria.style.color = "white"; }
        if (alumnos[i].lenguaje <= 6) { celdaLenguaje.style.backgroundColor = "red", celdaLenguaje.style.color = "white"; }
        if (alumnos[i].promedio <= 6) { promedio.style.backgroundColor = "red", promedio.style.color = "white"; }
        if (alumnos[i].promedio >= 6) { promedio.style.backgroundColor = "green", promedio.style.color = "white"; }



    }
};



agregar.addEventListener("click", function () {
    //abrir enlace
    window.open("./funciones/agregar.html", "_self");

});




function eliminarAlumno(e) {
    let alumnos = JSON.parse(localStorage.getItem("alumnos"));
    console.log(e);
    alumnos.splice(e, 1);

    localStorage.setItem("alumnos", JSON.stringify(alumnos));
    location.reload();


};

function modificarAlumno(e) {
    let alumnos = JSON.parse(localStorage.getItem("alumnos"));
    console.log(alumnos[e])
    localStorage.setItem("numAlumno", JSON.stringify(e));
    window.open("./funciones/modificar.html", "_self");




}

guardar.addEventListener("click", function () {
            const guardar=localStorage.getItem("alumnos");
            console.log(guardar);
            


});  




