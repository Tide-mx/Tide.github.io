const inputNombre = document.getElementById("nombre");
const botonListo = document.getElementById("botonListo");
const saludo = document.getElementById("saludo");
const modalidadDiv = document.getElementById("modalidad");
const seleccion = document.getElementById("seleccion");
const materiasDiv = document.getElementById("materias");
const botonesMateriasDiv = document.getElementById("botonesMaterias");
const seleccionMateria = document.getElementById("seleccionMateria");
const dificultadesDiv = document.getElementById("dificultades");
const botonesDificultadDiv = document.getElementById("botonesDificultad");
const seleccionDificultad = document.getElementById("seleccionDificultad");
const resumenFinalDiv = document.getElementById("resumenFinal");
const resumenTexto = document.getElementById("resumenTexto");
const reiniciarBtn = document.getElementById("reiniciarBtn");

// Variables de selección
let nombreUsuario = "";
let modalidadSeleccionada = "";
let materiaSeleccionada = "";
let dificultadSeleccionada = "";

// Habilitar botón solo si hay texto
inputNombre.addEventListener("input", () => {
  botonListo.disabled = inputNombre.value.trim() === "";
});

// Acción al hacer clic en "Listo"
botonListo.addEventListener("click", () => {
  nombreUsuario = inputNombre.value.trim();
  saludo.textContent = `¡Hola, ${nombreUsuario}! Bienvenido/a.`;
  modalidadDiv.style.display = "block";
  document.getElementById("ingresoNombre").style.display = "none";
  actualizarResumen();
});

// Definir materias según modalidad
const materiasPorModalidad = {
  "Primaria": ["Matemáticas Básicas", "Lengua", "Ciencias Naturales", "Historia", "Arte", "Educación Física"],
  "Secundaria": ["Matemáticas", "Lengua y Literatura", "Biología", "Química", "Historia Universal", "Arte", "Tecnología"],
  "Preparatoria": ["Álgebra", "Física", "Química Avanzada", "Literatura", "Historia Contemporánea", "Filosofía", "Idiomas"],
  "Universidad": ["Cálculo", "Física Moderna", "Química Orgánica", "Literatura Universal", "Historia Moderna", "Programación", "Economía"],
  "Postgrado": ["Investigación Avanzada", "Estadística Avanzada", "Filosofía Aplicada", "Gestión de Proyectos", "Especialización Profesional"]
};

// Lista de dificultades
const dificultades = [
  "Extremadamente Fácil",
  "Muy Fácil",
  "Fácil",
  "Normal",
  "Difícil",
  "Muy Difícil",
  "Extremadamente Difícil",
  "Imposible 💀"
];

// Botones de modalidad
const botonesModalidad = document.querySelectorAll(".modBtn");
botonesModalidad.forEach(button => {
  button.addEventListener("click", () => {
    modalidadSeleccionada = button.textContent;
    seleccion.textContent = `Has seleccionado: ${modalidadSeleccionada}`;

    // Reiniciar materia y dificultad al cambiar modalidad
    materiaSeleccionada = "";
    dificultadSeleccionada = "";
    seleccionMateria.textContent = "";
    seleccionDificultad.textContent = "";
    botonesMateriasDiv.innerHTML = "";
    botonesDificultadDiv.innerHTML = "";
    dificultadesDiv.style.display = "none";

    // Crear botones de materias según modalidad
    materiasPorModalidad[modalidadSeleccionada].forEach(materia => {
      const btn = document.createElement("button");
      btn.textContent = materia;
      btn.className = "matBtn";
      btn.addEventListener("click", () => {
        materiaSeleccionada = materia;
        seleccionMateria.textContent = `Materia seleccionada: ${materia}`;
        mostrarDificultades();
        actualizarResumen();
      });
      botonesMateriasDiv.appendChild(btn);
    });

    materiasDiv.style.display = "block";
    actualizarResumen();
  });
});

// Función para mostrar dificultades
function mostrarDificultades() {
  botonesDificultadDiv.innerHTML = "";

  dificultades.forEach(dif => {
    const btn = document.createElement("button");
    btn.textContent = dif;
    btn.className = "difBtn";
    btn.addEventListener("click", () => {
      dificultadSeleccionada = dif;
      seleccionDificultad.textContent = `Dificultad seleccionada: ${dif}`;
      actualizarResumen();
    });
    botonesDificultadDiv.appendChild(btn);
  });

  dificultadesDiv.style.display = "block";
}

// Función para actualizar el resumen
function actualizarResumen() {
  if (nombreUsuario || modalidadSeleccionada || materiaSeleccionada || dificultadSeleccionada) {
    resumenTexto.textContent =
      `Nombre: ${nombreUsuario || "—"} | ` +
      `Modalidad: ${modalidadSeleccionada || "—"} | ` +
      `Materia: ${materiaSeleccionada || "—"} | ` +
      `Dificultad: ${dificultadSeleccionada || "—"}`;
    resumenFinalDiv.style.display = "block";
  } else {
    resumenFinalDiv.style.display = "none";
  }
}

// Reiniciar todo
reiniciarBtn.addEventListener("click", () => {
  // Resetear variables
  nombreUsuario = "";
  modalidadSeleccionada = "";
  materiaSeleccionada = "";
  dificultadSeleccionada = "";

  // Ocultar y limpiar textos
  saludo.textContent = "";
  seleccion.textContent = "";
  seleccionMateria.textContent = "";
  seleccionDificultad.textContent = "";
  resumenTexto.textContent = "";

  document.getElementById("ingresoNombre").style.display = "block";
  modalidadDiv.style.display = "none";
  materiasDiv.style.display = "none";
  dificultadesDiv.style.display = "none";
  resumenFinalDiv.style.display = "none";

  // Resetear input
  inputNombre.value = "";
  botonListo.disabled = true;
});
