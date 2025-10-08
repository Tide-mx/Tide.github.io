// ----------------------
// ELEMENTOS DEL DOM
// ----------------------
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
const inicioContenidoDiv = document.getElementById("contenidoTest");

// ----------------------
// VARIABLES GLOBALES
// ----------------------
let nombreUsuario = "";
let modalidadSeleccionada = "";
let materiaSeleccionada = "";
let dificultadSeleccionada = "";

// ----------------------
// DATOS
// ----------------------
const dificultades = [
  "Extremadamente Fácil","Muy Fácil","Fácil","Normal","Difícil","Muy Difícil","Extremo","Imposible 💀"
];

const materiasPorModalidad = {
  "Primaria": ["Matemáticas","Ciencias","Geografía","Español","Historia","Inglés","Arte","Educación Física"],
  "Secundaria": ["Álgebra","Física","Química","Historia Universal","Biología","Arte 2","Inglés 2"],
  "Preparatoria": ["Cálculo","Física Avanzada","Literatura","Química","Historia Moderna","Filosofía","Idiomas"],
  "Universidad": ["Programación","Economía","Ingeniería","Cálculo Integral","Estadística","Diseño","Psicología"],
  "Postgrado": ["Gestión de Proyectos","Investigación Avanzada","Filosofía Aplicada","Educación Superior"]
};

// ----------------------
// VALIDACIÓN NOMBRE
// ----------------------
inputNombre.addEventListener("input", () => {
  botonListo.disabled = inputNombre.value.trim() === "";
});

botonListo.addEventListener("click", () => {
  nombreUsuario = inputNombre.value.trim();
  const palabrasBloqueadas = ["tonto","idiota","puto","fuck","shit","mierda"];
  const normalizado = nombreUsuario.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  if (palabrasBloqueadas.some(p => normalizado.includes(p))) {
    alert("⚠️ Ese nombre no está permitido. Intenta con otro.");
    return;
  }

  saludo.textContent = `¡Hola, ${nombreUsuario}! Bienvenido/a.`;
  saludo.classList.add("fadeIn");
  document.getElementById("ingresoNombre").style.display = "none";
  modalidadDiv.style.display = "block";
  modalidadDiv.classList.add("fadeIn");
});

// ----------------------
// BOTONES MODALIDAD
// ----------------------
const botonesModalidad = document.querySelectorAll(".modBtn");
botonesModalidad.forEach(button => {
  button.addEventListener("click", () => {
    modalidadSeleccionada = button.textContent;
    seleccion.textContent = `Has seleccionado: ${modalidadSeleccionada}`;
    seleccion.classList.add("fadeIn");

    // Reset previo
    botonesMateriasDiv.innerHTML = "";
    materiaSeleccionada = "";
    dificultadSeleccionada = "";
    resumenFinal.innerHTML = "";
    resumenFinal.style.display = "none";

    // Crear botones de materias
    const materias = materiasPorModalidad[modalidadSeleccionada] || [];
    materias.forEach((materia,index)=>{
      const btn = document.createElement("button");
      btn.type = "button";
      btn.classList.add("matBtn","fadeIn");
      btn.setAttribute("data-materia",materia);
      btn.innerHTML = `<span>${materia}</span>`;
      btn.style.animationDelay = `${index*0.06}s`;

      btn.addEventListener("click", () => seleccionarMateria(materia));

      botonesMateriasDiv.appendChild(btn);
    });

    materiasDiv.style.display = "block";
    materiasDiv.classList.add("fadeIn");
    dificultadesDiv.style.display = "none"; // ocultar dificultad hasta elegir materia
  });
});

// ----------------------
// SELECCIONAR MATERIA
// ----------------------
function seleccionarMateria(materia) {
  materiaSeleccionada = materia;
  seleccionMateria.textContent = `Materia seleccionada: ${materiaSeleccionada}`;
  seleccionMateria.classList.add("fadeIn");

  dificultadSeleccionada = "";
  botonesDificultadDiv.innerHTML = "";
  resumenFinal.innerHTML = "";
  resumenFinal.style.display = "none";

  mostrarDificultades();
}

// ----------------------
// MOSTRAR DIFICULTADES
// ----------------------
function mostrarDificultades() {
  botonesDificultadDiv.innerHTML = "";
  dificultades.forEach((dif,index)=>{
    const btn = document.createElement("button");
    btn.type = "button";
    btn.classList.add("difBtn","fadeIn");
    btn.textContent = dif;
    btn.style.animationDelay = `${index*0.07}s`;

    btn.addEventListener("click", () => {
      // Desmarcar otras
      botonesDificultadDiv.querySelectorAll(".difBtn").forEach(b => b.classList.remove("activeDifBtn"));
      btn.classList.add("activeDifBtn");

      dificultadSeleccionada = dif;
      seleccion.textContent = `Has elegido: ${modalidadSeleccionada} → ${materiaSeleccionada} → ${dificultadSeleccionada}`;
      mostrarResumen();
    });

    botonesDificultadDiv.appendChild(btn);
  });

  dificultadesDiv.style.display = "block";
  dificultadesDiv.classList.add("fadeIn");
}

// ----------------------
// MOSTRAR RESUMEN
// ----------------------
function mostrarResumen() {
  if (!nombreUsuario || !modalidadSeleccionada || !materiaSeleccionada || !dificultadSeleccionada) return;

  resumenFinal.innerHTML = `
    <div class="fadeIn" style="margin-top:20px;padding:15px;background:rgba(255,255,255,0.95);border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,0.12);max-width:700px;margin-inline:auto;">
      <h3>📘 Resumen de tu selección</h3>
      <p><strong>Nombre:</strong> ${nombreUsuario}</p>
      <p><strong>Modalidad:</strong> ${modalidadSeleccionada}</p>
      <p><strong>Materia:</strong> ${materiaSeleccionada}</p>
      <p><strong>Dificultad:</strong> ${dificultadSeleccionada}</p>
      <button id="botonComenzar" type="button" style="margin-top:10px;">Comenzar</button>
    </div>
  `;
  resumenFinal.style.display = "block";
  resumenFinal.classList.add("fadeIn");

  document.getElementById("botonComenzar").addEventListener("click", iniciarContenido);
}

// INICIAR CONTENIDO
function iniciarContenido() {
  // Ocultar secciones previas
  document.getElementById("modalidad").style.display = "none";
  document.getElementById("materias").style.display = "none";
  document.getElementById("dificultades").style.display = "none";
  document.getElementById("resumenFinal").style.display = "none";

  // Mostrar contenedor principal
  const inicioContenidoDiv = document.getElementById("inicioContenido");
  inicioContenidoDiv.style.display = "block";
  inicioContenidoDiv.classList.add("fadeIn");

  // Mostrar datos del usuario y los temas
  inicioContenidoDiv.innerHTML = `
    <div id="infoUsuario" class="fadeIn">
      <h2>📘 ¡Bienvenid@ ${nombreUsuario}!</h2>
      <p><strong>Modalidad:</strong> ${modalidadSeleccionada}</p>
      <p><strong>Materia:</strong> ${materiaSeleccionada}</p>
      <p><strong>Dificultad:</strong> ${dificultadSeleccionada}</p>
      <hr>
      <h3>Temas disponibles:</h3>
      <div id="temasDiv"></div>
    </div>
  `;

  mostrarTemas();
}

// MOSTRAR TEMAS CON "SABER MÁS"
function mostrarTemas() {
  const temasDiv = document.getElementById("temasDiv");
  temasDiv.innerHTML = "";

  // Cargar los temas desde contenido.js
  const temas = contenidoMaterias[modalidadSeleccionada]?.[materiaSeleccionada] || ["Tema 1", "Tema 2", "Tema 3"];

  temas.forEach(tema => {
    const div = document.createElement("div");
    div.classList.add("temaItem", "fadeIn");
    div.innerHTML = `
      <span>${tema}</span>
      <button class="saberMasBtn" data-tema="${tema}" style="margin-left:10px;">Saber más</button>
      <div class="explicacionTema" style="display:none;margin-top:6px;padding:6px;background:rgba(255,255,255,0.9);border-radius:6px;"></div>
    `;
    temasDiv.appendChild(div);
  });

  // Botón para el test (por ahora placeholder)
  const btnTest = document.createElement("button");
  btnTest.textContent = "🧠 Empezar Test";
  btnTest.style.marginTop = "15px";
  btnTest.addEventListener("click", () => alert("🧩 El test aún no está implementado."));
  temasDiv.appendChild(btnTest);

  // Funcionalidad de "Saber más"
  temasDiv.addEventListener("click", e => {
    const btn = e.target.closest(".saberMasBtn");
    if (!btn) return;

    const tema = btn.getAttribute("data-tema");
    const contenedor = btn.nextElementSibling;

    if (contenedor.style.display === "none") {
      contenedor.innerHTML = getExplicacion(modalidadSeleccionada, materiaSeleccionada, tema);
      contenedor.style.display = "block";
      btn.textContent = "Ocultar";
    } else {
      contenedor.style.display = "none";
      btn.textContent = "Saber más";
    }
  });
}

