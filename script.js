// Elementos del DOM
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
const resumenTexto = document.getElementById("resumenTexto");
const reiniciarBtn = document.getElementById("reiniciarBtn");
const errorNombre = document.getElementById("errorNombre");
const avisoPestana = document.getElementById("avisoPestana");

// Variables
let nombreUsuario = "";
let modalidadSeleccionada = "";
let materiaSeleccionada = "";
let dificultadSeleccionada = "";

// Filtro de palabras prohibidas
const palabrasProhibidas = ["puta","mierda","fuck","shit","bitch","sexo","rape"];
function normalizarTexto(texto) {
  return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");
}
function nombreEsValido(nombre) {
  const limpio = normalizarTexto(nombre);
  return !palabrasProhibidas.some(p => limpio.includes(p));
}

// Habilitar botón solo si hay texto
inputNombre.addEventListener("input", () => {
  botonListo.disabled = inputNombre.value.trim() === "";
});

// Firebase: Guardar datos
async function guardarDatos() {
  if (!nombreUsuario) return;
  const userId = nombreUsuario.replace(/\s+/g, "_");
  await db.collection("usuarios").doc(userId).set({
    nombre: nombreUsuario,
    modalidad: modalidadSeleccionada,
    materia: materiaSeleccionada,
    dificultad: dificultadSeleccionada
  });
}

// Firebase: Cargar datos
async function cargarDatos() {
  const userId = inputNombre.value.trim().replace(/\s+/g, "_");
  const docSnap = await db.collection("usuarios").doc(userId).get();
  if (docSnap.exists) {
    const data = docSnap.data();
    nombreUsuario = data.nombre || "";
    modalidadSeleccionada = data.modalidad || "";
    materiaSeleccionada = data.materia || "";
    dificultadSeleccionada = data.dificultad || "";

    saludo.textContent = `¡Hola, ${nombreUsuario}! Bienvenido/a.`;
    document.getElementById("ingresoNombre").style.display = "none";

    if (modalidadSeleccionada) {
      modalidadDiv.style.display = "block";
      seleccion.textContent = `Has seleccionado: ${modalidadSeleccionada}`;
    }
    if (materiaSeleccionada) seleccionMateria.textContent = `Materia seleccionada: ${materiaSeleccionada}`;
    if (dificultadSeleccionada) seleccionDificultad.textContent = `Dificultad seleccionada: ${dificultadSeleccionada}`;

    actualizarResumen();
  }
}

// Botón Listo
botonListo.addEventListener("click", async () => {
  nombreUsuario = inputNombre.value.trim();
  if (!nombreEsValido(nombreUsuario)) {
    errorNombre.textContent = "⚠️ Ese nombre no está permitido.";
    inputNombre.value = "";
    botonListo.disabled = true;
    return;
  }
  errorNombre.textContent = "";
  saludo.textContent = `¡Hola, ${nombreUsuario}! Bienvenido/a.`;
  document.getElementById("ingresoNombre").style.display = "none";
  modalidadDiv.style.display = "block";

  await cargarDatos();
  guardarDatos();
});

// --- Modalidades y materias ---
const materiasPorModalidad = {
  "Primaria": ["Matemáticas Básicas", "Lengua", "Ciencias Naturales", "Historia", "Arte", "Educación Física"],
  "Secundaria": ["Matemáticas", "Lengua y Literatura", "Biología", "Química", "Historia Universal", "Arte", "Tecnología"],
  "Preparatoria": ["Álgebra", "Física", "Química Avanzada", "Literatura", "Historia Contemporánea", "Filosofía", "Idiomas"],
  "Universidad": ["Cálculo", "Física Moderna", "Química Orgánica", "Literatura Universal", "Historia Moderna", "Programación", "Economía"],
  "Postgrado": ["Investigación Avanzada", "Estadística Avanzada", "Filosofía Aplicada", "Gestión de Proyectos", "Especialización Profesional"]
};

const botonesModalidad = document.querySelectorAll(".modBtn");
botonesModalidad.forEach(button => {
  button.addEventListener("click", async () => {
    modalidadSeleccionada = button.textContent;
    seleccion.textContent = `Has seleccionado: ${modalidadSeleccionada}`;

    // Limpiar materias
    botonesMateriasDiv.innerHTML = "";

    materiasPorModalidad[modalidadSeleccionada].forEach(materia => {
      const btn = document.createElement("button");
      btn.textContent = materia;
      btn.className = "matBtn";
      btn.addEventListener("click", async () => {
        materiaSeleccionada = materia;
        seleccionMateria.textContent = `Materia seleccionada: ${materiaSeleccionada}`;

        // Mostrar dificultades
        dificultadesDiv.style.display = "block";
        crearBotonesDificultad();

        await guardarDatos();
      });
      botonesMateriasDiv.appendChild(btn);
    });

    materiasDiv.style.display = "block";
    await guardarDatos();
  });
});

// --- Dificultades ---
const dificultades = ["Extremadamente Fácil", "Muy Fácil", "Fácil", "Normal", "Difícil", "Muy Difícil", "Extremadamente Difícil"];

function crearBotonesDificultad() {
  botonesDificultadDiv.innerHTML = "";
  dificultades.forEach(dif => {
    const btn = document.createElement("button");
    btn.textContent = dif;
    btn.className = "difBtn";
    btn.addEventListener("click", async () => {
      dificultadSeleccionada = dif;
      seleccionDificultad.textContent = `Dificultad seleccionada: ${dificultadSeleccionada}`;
      actualizarResumen();
      await guardarDatos();
    });
    botonesDificultadDiv.appendChild(btn);
  });
}

// --- Resumen ---
function actualizarResumen() {
  resumenTexto.innerHTML = `
    <li>Nombre: ${nombreUsuario}</li>
    <li>Modalidad: ${modalidadSeleccionada}</li>
    <li>Materia: ${materiaSeleccionada}</li>
    <li>Dificultad: ${dificultadSeleccionada}</li>
  `;
}

// --- Reiniciar ---
reiniciarBtn.addEventListener("click", () => {
  nombreUsuario = "";
  modalidadSeleccionada = "";
  materiaSeleccionada = "";
  dificultadSeleccionada = "";

  inputNombre.value = "";
  botonListo.disabled = true;

  document.getElementById("ingresoNombre").style.display = "block";
  modalidadDiv.style.display = "none";
  materiasDiv.style.display = "none";
  dificultadesDiv.style.display = "none";
  resumenTexto.innerHTML = "";
});

// --- Detectar cambio de pestaña ---
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    avisoPestana.style.display = "block";
  } else {
    avisoPestana.style.display = "none";
  }
});
