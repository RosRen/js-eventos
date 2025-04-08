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
    if (matricula && nombre && grupo === ""){
        alumnos.push({nombre, grupo, materia});
        alert("Alumno Registrado");
    } 
    
 }
//
const Mostrar = document.querySelector("#mostrar");
document.addEventListener("keydown", event =>{
    if (event.key === 'm' && event.ctrlKey){
        event.preventDefault();
        document.querySelector("#informacion").style.display = "flex";
        mostrarAlumnos();}
})
Mostrar.addEventListener("click", event=>{
    event.preventDefault();
    document.querySelector("#informacion").style.display = "flex";
    mostrarAlumnos();
})



function mostrarAlumnos(){
    const contenedor = document.querySelector('#informacion');
    contenedor.innerHTML='';

    if (alumnos.length===0) {
        contenedor.innerHTML='No hay alumnos registrados'
    } else{
        alumnos.forEach(alumno =>{
            const p = document.createElement('p');
        p.textContent= `Nombre: ${alumnos.nombre}, Grupo:${alumnos.grupo}, Matricula:${alumnos.matricula}`;
            contenedor.appendChild(p);
        })
    }
}
