// =============================
// 📘 VARIABLES PRINCIPALES
// =============================
let nombreUsuario = "";
let modalidadSeleccionada = "";
let materiaSeleccionada = "";
let dificultadSeleccionada = "";

// =============================
// 🎯 ELEMENTOS HTML
// =============================
const inputNombre = document.getElementById("nombre");
const btnListo = document.getElementById("btnListo");
const saludo = document.getElementById("saludo");
const seleccion = document.getElementById("seleccion");
const seleccionMateria = document.getElementById("seleccionMateria");
const resumenFinal = document.getElementById("resumenFinal");

const ingresoNombreDiv = document.getElementById("ingresoNombre");
const modalidadDiv = document.getElementById("modalidad");
const materiasDiv = document.getElementById("materias");
const dificultadesDiv = document.getElementById("dificultades");
const botonesMaterias = document.getElementById("botonesMaterias");
const botonesDificultad = document.getElementById("botonesDificultad");

// =============================
// 🚫 FILTRO DE NOMBRES INAPROPIADOS
// =============================
const palabrasProhibidas = [
  "idiota", "tonto", "mierda", "puta", "fuck", "ass", "bitch",
  "imbécil", "basura", "negro", "racista", "gay", "nazi", "sexo"
];

// Detectar insultos también en otros idiomas
function contienePalabrasProhibidas(texto) {
  const normalizado = texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return palabrasProhibidas.some(palabra => normalizado.includes(palabra));
}

// =============================
// 💾 FUNCIONES LOCALSTORAGE
// =============================
function guardarDatos() {
  const datos = {
    nombreUsuario,
    modalidadSeleccionada,
    materiaSeleccionada,
    dificultadSeleccionada
  };
  localStorage.setItem("estudioDatos", JSON.stringify(datos));
}

function recuperarDatos() {
  const datosGuardados = JSON.parse(localStorage.getItem("estudioDatos"));
  if (!datosGuardados) return;

  nombreUsuario = datosGuardados.nombreUsuario || "";
  modalidadSeleccionada = datosGuardados.modalidadSeleccionada || "";
  materiaSeleccionada = datosGuardados.materiaSeleccionada || "";
  dificultadSeleccionada = datosGuardados.dificultadSeleccionada || "";

  if (nombreUsuario) {
    ingresoNombreDiv.style.display = "none";
    modalidadDiv.style.display = "block";
    saludo.textContent = `¡Hola, ${nombreUsuario}! Bienvenido/a.`;

    if (modalidadSeleccionada) {
      seleccion.textContent = `Has seleccionado: ${modalidadSeleccionada}`;
      materiasDiv.style.display = "block";
    }

    if (materiaSeleccionada) {
      seleccionMateria.textContent = `Materia seleccionada: ${materiaSeleccionada}`;
      dificultadesDiv.style.display = "block";
    }

    if (dificultadSeleccionada) {
      mostrarResumen();
    }
  }
}

// =============================
// 🧠 INTERACCIÓN PRINCIPAL
// =============================
btnListo.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();

  if (nombre === "") {
    alert("Por favor, escribe tu nombre.");
    return;
  }

  if (contienePalabrasProhibidas(nombre)) {
    alert("El nombre contiene palabras inapropiadas. Intenta con otro.");
    return;
  }

  nombreUsuario = nombre;
  saludo.textContent = `¡Hola, ${nombreUsuario}! Bienvenido/a.`;
  ingresoNombreDiv.style.display = "none";
  modalidadDiv.style.display = "block";
  guardarDatos();
});

// =============================
// 🧩 SELECCIÓN DE MODALIDAD
// =============================
document.querySelectorAll(".modBtn").forEach(button => {
  button.addEventListener("click", () => {
    modalidadSeleccionada = button.textContent;
    seleccion.textContent = `Has seleccionado: ${modalidadSeleccionada}`;
    materiasDiv.style.display = "block";
    dificultadSeleccionada = "";
    resumenFinal.textContent = "";
    guardarDatos();
  });
});

// =============================
// 📚 SELECCIÓN DE MATERIAS
// =============================
document.querySelectorAll(".matBtn").forEach(button => {
  button.addEventListener("click", () => {
    materiaSeleccionada = button.getAttribute("data-materia");
    seleccionMateria.textContent = `Materia seleccionada: ${materiaSeleccionada}`;
    dificultadesDiv.style.display = "block";
    dificultadSeleccionada = "";
    resumenFinal.textContent = "";
    guardarDatos();
  });
});

// =============================
// 💪 SELECCIÓN DE DIFICULTAD
// =============================
document.querySelectorAll(".difBtn").forEach(button => {
  button.addEventListener("click", () => {
    dificultadSeleccionada = button.textContent;
    guardarDatos();
    mostrarResumen();
  });
});

// =============================
// 🧾 MOSTRAR RESUMEN FINAL
// =============================
function mostrarResumen() {
  if (nombreUsuario && modalidadSeleccionada && materiaSeleccionada && dificultadSeleccionada) {
    resumenFinal.innerHTML = `
      <p><strong>Resumen:</strong></p>
      <p>👤 Nombre: ${nombreUsuario}</p>
      <p>🎓 Modalidad: ${modalidadSeleccionada}</p>
      <p>📘 Materia: ${materiaSeleccionada}</p>
      <p>🔥 Dificultad: ${dificultadSeleccionada}</p>
    `;
  }
}

// =============================
// 🚀 CARGAR DATOS AL INICIO
// =============================
recuperarDatos();
