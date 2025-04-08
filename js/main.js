const alumnos = []
const Datos = document.querySelector("#agregar");
document.addEventListener("keydown", event =>{
    if (event.key === 'r' && event.ctrlKey){
        event.preventDefault();
        agregarAlumnos();}
})
Datos.addEventListener("click", event=>{
    event.preventDefault();
    agregarAlumnos();}
)


function agregarAlumnos(){
    const nombre = prompt("Nombre: ");
    const grupo = prompt("Grupo");
    const matricula = prompt("Matricula: ");

    if (nombre.trim() === '' || grupo.trim() === '' || matricula.trim() === '') {
        alert("Rellena todos los campos")
    } else {
        alumnos.push({nombre, grupo, matricula});
        alert("Alumno Registrado");
    }
 }
 const contenedor = document.querySelector("#informacion");
const Mostrar = document.querySelector("#mostrar");
document.addEventListener("keydown", event =>{
    if (event.key === 'm' && event.ctrlKey){
        event.preventDefault();
        mostrarAlumnos();}
})
Mostrar.addEventListener("click", event=>{
    event.preventDefault();
    mostrarAlumnos();
})



function mostrarAlumnos(){
    if(contenedor.style.display ==="none"){
        contenedor.style.display = "block";
        contenedor.innerHTML = ''
    if (alumnos.length===0) {
        contenedor.innerHTML='No hay alumnos registrados'
    } else{
        alumnos.forEach(alumno =>{
            const p = document.createElement('p');
        p.textContent= `Nombre: ${alumno.nombre}, Grupo:${alumno.grupo}, Matricula:${alumno.matricula}`;
            contenedor.appendChild(p);
        })
    }}else{
        contenedor.style.display = "none";
    }
}
