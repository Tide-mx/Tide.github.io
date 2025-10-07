// ✅ Elementos del DOM
const inputNombre = document.getElementById("nombre");
const botonListo = document.getElementById("botonListo");
const saludo = document.getElementById("saludo");
const ingresoNombreDiv = document.getElementById("ingresoNombre");
const modalidadDiv = document.getElementById("modalidad");
const seleccion = document.getElementById("seleccion");
const materiasDiv = document.getElementById("materias");
const botonesMateriasDiv = document.getElementById("botonesMaterias");
const seleccionMateria = document.getElementById("seleccionMateria");
const dificultadesDiv = document.getElementById("dificultades");
const botonesDificultadDiv = document.getElementById("botonesDificultad");
const resumenFinal = document.getElementById("resumenFinal");

// 🌟 Variables de estado
let nombreUsuario = "";
let modalidadSeleccionada = "";
let materiaSeleccionada = "";
let dificultadSeleccionada = "";

// 📦 Materias por modalidad
const materiasPorModalidad = {
  "Primaria": ["Matemáticas", "Ciencias", "Historia", "Inglés", "Arte", "Educación Física"],
  "Secundaria": ["Matemáticas", "Biología", "Química", "Historia Universal", "Español", "Arte", "Inglés", "Tecnología"],
  "Preparatoria": ["Álgebra", "Física Avanzada", "Química", "Literatura", "Historia Avanzada", "Filosofía", "Idiomas"],
  "Universidad": ["Cálculo", "Física", "Química Orgánica", "Literatura", "Historia", "Programación", "Economía"],
  "Postgrado": ["Investigación Avanzada", "Estadística", "Filosofía Aplicada", "Gestión de Proyectos", "Especialización Profesional"]
};

// ⚡ Dificultades
const dificultades = ["Extremadamente Fácil","Muy Fácil","Fácil","Normal","Difícil","Muy Difícil","Extremadamente Difícil"];

// 🛑 Palabras prohibidas
const palabrasProhibidas = ["puta","mierda","idiota","fuck","shit"]; // se pueden agregar más

function contienePalabrasProhibidas(texto){
  const t = texto.toLowerCase();
  return palabrasProhibidas.some(p => t.includes(p));
}

// 💾 Guardar y cargar localStorage
function guardarDatos(){
  const datos = {nombreUsuario, modalidadSeleccionada, materiaSeleccionada, dificultadSeleccionada};
  localStorage.setItem("datosUsuario", JSON.stringify(datos));
}

function cargarDatos(){
  const datos = JSON.parse(localStorage.getItem("datosUsuario"));
  if(datos){
    nombreUsuario = datos.nombreUsuario || "";
    modalidadSeleccionada = datos.modalidadSeleccionada || "";
    materiaSeleccionada = datos.materiaSeleccionada || "";
    dificultadSeleccionada = datos.dificultadSeleccionada || "";
    if(nombreUsuario){
      saludo.textContent = `¡Hola, ${nombreUsuario}! Bienvenido/a.`;
      ingresoNombreDiv.style.display = "none";
      modalidadDiv.style.display = "block";
      if(modalidadSeleccionada) mostrarMaterias(modalidadSeleccionada);
      if(dificultadSeleccionada) mostrarDificultades();
      actualizarResumen();
    }
  }
}

// 🎯 Botón Listo
inputNombre.addEventListener("input", () => {
  botonListo.disabled = inputNombre.value.trim() === "";
});

botonListo.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();
  if(!nombre) return;

  if(contienePalabrasProhibidas(nombre)){
    alert("Ese nombre no está permitido.");
    return;
  }

  nombreUsuario = nombre;
  saludo.textContent = `¡Hola, ${nombreUsuario}! Bienvenido/a.`;
  ingresoNombreDiv.style.display = "none";
  modalidadDiv.style.display = "block";
  guardarDatos();
});

// 🏫 Modalidad
const botonesModalidad = document.querySelectorAll(".modBtn");
botonesModalidad.forEach(button => {
  button.addEventListener("click", () => {
    modalidadSeleccionada = button.textContent;
    seleccion.textContent = `Has seleccionado: ${modalidadSeleccionada}`;
    materiaSeleccionada = ""; // reset materia
    dificultadSeleccionada = ""; // reset dificultad
    botonesMateriasDiv.innerHTML = "";
    mostrarMaterias(modalidadSeleccionada);
    dificultadesDiv.style.display = "none";
    resumenFinal.textContent = "";
    guardarDatos();
  });
});

// 📚 Mostrar materias
function mostrarMaterias(modalidad){
  materiasDiv.style.display = "block";
  materiasPorModalidad[modalidad].forEach(materia => {
    const btn = document.createElement("button");
    btn.textContent = materia;
    btn.className = "matBtn fadeIn";
    btn.setAttribute("data-materia", materia);
    btn.addEventListener("click", () => {
      materiaSeleccionada = materia;
      seleccionMateria.textContent = `Materia seleccionada: ${materia}`;
      dificultadSeleccionada = ""; // reset dificultad
      mostrarDificultades();
      resumenFinal.textContent = "";
      guardarDatos();
    });
    botonesMateriasDiv.appendChild(btn);
  });
}

// 🎮 Mostrar dificultades
function mostrarDificultades(){
  dificultadesDiv.style.display = "block";
  botonesDificultadDiv.innerHTML = "";
  dificultades.forEach(dif => {
    const btn = document.createElement("button");
    btn.textContent = dif;
    btn.className = "difBtn fadeIn";
    btn.addEventListener("click", () => {
      dificultadSeleccionada = dif;
      actualizarResumen();
      guardarDatos();
    });
    botonesDificultadDiv.appendChild(btn);
  });
}

// 📋 Actualizar resumen
function actualizarResumen(){
  resumenFinal.innerHTML = `
    <p>Nombre: ${nombreUsuario}</p>
    <p>Modalidad: ${modalidadSeleccionada}</p>
    <p>Materia: ${materiaSeleccionada}</p>
    <p>Dificultad: ${dificultadSeleccionada}</p>
  `;
}

// ⚡ Cargar datos al iniciar
window.addEventListener("load", cargarDatos);
