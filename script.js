// --- Variables del DOM ---
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

// --- Materias según modalidad ---
const materiasPorModalidad = {
  "Primaria": ["Matemáticas Básicas", "Lengua", "Ciencias Naturales", "Historia", "Arte", "Educación Física"],
  "Secundaria": ["Matemáticas", "Lengua y Literatura", "Biología", "Química", "Historia Universal", "Arte", "Tecnología"],
  "Preparatoria": ["Álgebra", "Física", "Química Avanzada", "Literatura", "Historia Contemporánea", "Filosofía", "Idiomas"],
  "Universidad": ["Cálculo", "Física Moderna", "Química Orgánica", "Literatura Universal", "Historia Moderna", "Programación", "Economía"],
  "Postgrado": ["Investigación Avanzada", "Estadística Avanzada", "Filosofía Aplicada", "Gestión de Proyectos", "Especialización Profesional"]
};

// --- Dificultades ---
const nivelesDificultad = [
  "Extremadamente fácil", "Muy fácil", "Fácil", "Normal", "Difícil", "Muy difícil", "Extremo", "Experto", "Imposible"
];

// --- Función para mostrar animaciones ---
function animarEntrada(elemento) {
  elemento.style.opacity = "0";
  elemento.style.transform = "translateY(20px)";
  elemento.style.display = "block";
  setTimeout(() => {
    elemento.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    elemento.style.opacity = "1";
    elemento.style.transform = "translateY(0)";
  }, 50);
}

// --- Habilitar botón solo si hay texto ---
inputNombre.addEventListener("input", () => {
  botonListo.disabled = inputNombre.value.trim() === "";
});

// --- Guardar progreso ---
function guardarProgreso() {
  const datos = {
    nombre: nombreUsuario,
    modalidad: modalidadSeleccionada,
    materia: materiaSeleccionada,
    dificultad: dificultadSeleccionada
  };
  localStorage.setItem("progresoEstudio", JSON.stringify(datos));
}

// --- Cargar progreso ---
function cargarProgreso() {
  const datosGuardados = localStorage.getItem("progresoEstudio");
  if (datosGuardados) {
    const datos = JSON.parse(datosGuardados);
    nombreUsuario = datos.nombre || "";
    modalidadSeleccionada = datos.modalidad || "";
    materiaSeleccionada = datos.materia || "";
    dificultadSeleccionada = datos.dificultad || "";

    if (nombreUsuario) {
      saludo.textContent = `¡Hola, ${nombreUsuario}! Bienvenido/a de nuevo.`;
      document.getElementById("ingresoNombre").style.display = "none";
      animarEntrada(modalidadDiv);
    }

    if (modalidadSeleccionada) {
      mostrarMaterias(modalidadSeleccionada);
    }

    if (materiaSeleccionada) {
      seleccionMateria.textContent = `Materia seleccionada: ${materiaSeleccionada}`;
      animarEntrada(dificultadesDiv);
    }

    if (dificultadSeleccionada) {
      mostrarResumen();
    }
  }
}

// --- Acción al hacer clic en "Listo" ---
botonListo.addEventListener("click", () => {
  nombreUsuario = inputNombre.value.trim();
  saludo.textContent = `¡Hola, ${nombreUsuario}! Bienvenido/a.`;
  document.getElementById("ingresoNombre").style.display = "none";
  animarEntrada(modalidadDiv);
  guardarProgreso();
});

// --- Crear botones de modalidad ---
document.querySelectorAll(".modBtn").forEach(button => {
  button.addEventListener("click", () => {
    modalidadSeleccionada = button.textContent;
    seleccion.textContent = `Has seleccionado: ${modalidadSeleccionada}`;
    mostrarMaterias(modalidadSeleccionada);
    guardarProgreso();
  });
});

// --- Mostrar materias según modalidad ---
function mostrarMaterias(modalidad) {
  botonesMateriasDiv.innerHTML = "";
  materiasPorModalidad[modalidad].forEach(materia => {
    const btn = document.createElement("button");
    btn.textContent = materia;
    btn.className = "matBtn";
    btn.addEventListener("click", () => {
      materiaSeleccionada = materia;
      seleccionMateria.textContent = `Materia seleccionada: ${materia}`;
      mostrarDificultades();
      guardarProgreso();
    });
    botonesMateriasDiv.appendChild(btn);
  });
  animarEntrada(materiasDiv);
}

// --- Mostrar botones de dificultad ---
function mostrarDificultades() {
  botonesDificultadDiv.innerHTML = "";
  nivelesDificultad.forEach(nivel => {
    const btn = document.createElement("button");
    btn.textContent = nivel;
    btn.className = "difBtn";
    btn.addEventListener("click", () => {
      dificultadSeleccionada = nivel;
      mostrarResumen();
      guardarProgreso();
    });
    botonesDificultadDiv.appendChild(btn);
  });
  animarEntrada(dificultadesDiv);
}

// --- Mostrar resumen final ---
function mostrarResumen() {
  resumenFinal.innerHTML = `
    <p><strong>Resumen:</strong></p>
    <p>👤 Nombre: ${nombreUsuario}</p>
    <p>🎓 Modalidad: ${modalidadSeleccionada}</p>
    <p>📘 Materia: ${materiaSeleccionada}</p>
    <p>🔥 Dificultad: ${dificultadSeleccionada}</p>
  `;
  animarEntrada(resumenFinal);
}

// --- Cargar progreso guardado al iniciar ---
cargarProgreso();
