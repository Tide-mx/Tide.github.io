// --- Referencias del DOM ---
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
const resumenFinal = document.getElementById("resumenFinal");

// --- Variables de selección ---
let nombreUsuario = "";
let modalidadSeleccionada = "";
let materiaSeleccionada = "";
let dificultadSeleccionada = "";

// --- Dificultades disponibles ---
const dificultades = [
  "Extremadamente Fácil",
  "Muy Fácil",
  "Fácil",
  "Normal",
  "Difícil",
  "Muy Difícil",
  "Extremo",
  "Imposible 💀"
];

// --- Materias por modalidad ---
const materiasPorModalidad = {
  "Primaria": ["Matemáticas", "Ciencias", "Geografía", "Español", "Historia", "Inglés", "Arte", "Educación Física"],
  "Secundaria": ["Álgebra", "Física", "Química", "Historia Universal", "Biología", "Arte", "Inglés"],
  "Preparatoria": ["Cálculo", "Física Avanzada", "Literatura", "Química", "Historia Moderna", "Filosofía", "Idiomas"],
  "Universidad": ["Programación", "Economía", "Ingeniería", "Cálculo Integral", "Estadística", "Diseño", "Psicología"],
  "Postgrado": ["Gestión de Proyectos", "Investigación Avanzada", "Filosofía Aplicada", "Educación Superior"]
};

// --- Habilitar botón solo si hay texto ---
inputNombre.addEventListener("input", () => {
  botonListo.disabled = inputNombre.value.trim() === "";
});

// --- Clic en botón "Listo" ---
botonListo.addEventListener("click", () => {
  nombreUsuario = inputNombre.value.trim();

  // Filtro de palabras inapropiadas (simple)
  const palabrasBloqueadas = ["tonto", "idiota", "puto", "fuck", "shit", "mierda"];
  if (palabrasBloqueadas.some(p => nombreUsuario.toLowerCase().includes(p))) {
    alert("⚠️ Ese nombre no está permitido. Intenta con otro.");
    return;
  }

  saludo.textContent = `¡Hola, ${nombreUsuario}! Bienvenido/a.`;
  saludo.classList.add("fadeIn");

  document.getElementById("ingresoNombre").style.display = "none";
  modalidadDiv.style.display = "block";
  modalidadDiv.classList.add("fadeIn");
});

// --- Botones de modalidad ---
const botonesModalidad = document.querySelectorAll(".modBtn");
botonesModalidad.forEach(button => {
  button.addEventListener("click", () => {
    modalidadSeleccionada = button.textContent;
    seleccion.textContent = `Has seleccionado: ${modalidadSeleccionada}`;
    seleccion.classList.add("fadeIn");

    // Limpiar materias anteriores
    // Limpiar materias, dificultad y resumen
    botonesMateriasDiv.innerHTML = "";
    materiaSeleccionada = "";
    dificultadSeleccionada = "";
    resumenFinal.textContent = "";
    resumenFinal.innerHTML = "";

    // Crear botones de materias
    materiasPorModalidad[modalidadSeleccionada].forEach((materia, index) => {
@@ -89,6 +89,11 @@
        seleccionMateria.textContent = `Materia seleccionada: ${materiaSeleccionada}`;
        seleccionMateria.classList.add("fadeIn");

        // Reiniciar dificultad y resumen
        dificultadSeleccionada = "";
        botonesDificultadDiv.innerHTML = "";
        resumenFinal.innerHTML = "";

        // Mostrar dificultades
        mostrarDificultades();
      });
@@ -98,6 +103,9 @@

    materiasDiv.style.display = "block";
    materiasDiv.classList.add("fadeIn");

    // Ocultar dificultades si existían
    dificultadesDiv.style.display = "none";
  });
});
