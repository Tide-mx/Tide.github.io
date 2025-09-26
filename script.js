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
  modalidadDiv.classList.add("fade-in");
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
botonesModalidad.forEach((button, index) => {
  button.style.animationDelay = `${index * 0.1}s`; // efecto cascada
  button.classList.add("fade-in");
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

    // Crear botones de materias con animación en cascada
    materiasPorModalidad[modalidadSeleccionada].forEach((materia, i) => {
      const btn = document.createElement("button");
      btn.textContent = materia;
      btn.className = "matBtn fade-in";
      btn.style.animationDelay = `${i * 0.1}s`; // cascada
      btn.addEventListener("click", () => {
        materiaSeleccionada = materia;
        seleccionMateria.textContent = `Materia seleccionada: ${materia}`;
        mostrarDificultades();
        actualizarResumen();
      });
      botonesMateriasDiv.appendChild(btn);
    });

    materiasDiv.style.display = "block";
    materiasDiv.classList.add("fade-in");
    actualizarResumen();
  });
});

// Función para mostrar dificultades
function mostrarDificultades() {
  botonesDificultadDiv.innerHTML = "";

  dificultades.forEach((dif, i) => {
    const btn = document.createElement("button");
    btn.textContent = dif;
    btn.className = "difBtn fade-in";
    btn.style.animationDelay = `${i * 0.1}s`; // cascada
    btn.addEventListener("click", () => {
      dificultadSeleccionada = dif;
      seleccionDificultad.textContent = `Dificultad seleccionada: ${dif}`;
      actualizarResumen();
    });
    botonesDificultadDiv.appendChild(btn);
  });

  dificultadesDiv.style.display = "block";
  dificultadesDiv.classList.add("fade-in");
}

// Función para actualizar el resumen (formato lista con íconos)
function actualizarResumen() {
  resumenTexto.innerHTML = `
    <li>✅ <span>Nombre:</span> ${nombreUsuario || "—"}</li>
    <li>🎓 <span>Modalidad:</span> ${modalidadSeleccionada || "—"}</li>
    <li>📖 <span>Materia:</span> ${materiaSeleccionada || "—"}</li>
    <li>🔥 <span>Dificultad:</span> ${dificultadSeleccionada || "—"}</li>
  `;

  if (nombreUsuario || modalidadSeleccionada || materiaSeleccionada || dificultadSeleccionada) {
    resumenFinalDiv.classList.add("show");
  } else {
    resumenFinalDiv.classList.remove("show");
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
  resumenTexto.innerHTML = "";

  document.getElementById("ingresoNombre").style.display = "block";
  modalidadDiv.style.display = "none";
  materiasDiv.style.display = "none";
  dificultadesDiv.style.display = "none";
  resumenFinalDiv.classList.remove("show");

  // Resetear input
  inputNombre.value = "";
  botonListo.disabled = true;
});
