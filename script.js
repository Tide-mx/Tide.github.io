// -------------------- script.js --------------------

// Variables globales
let usuario = "";
let modalidadSeleccionada = "";
let materiaSeleccionada = "";
let dificultadSeleccionada = "";
let preguntasActuales = [];
let respuestasUsuario = [];
let preguntaIndex = 0;

// Referencias del DOM
const saludoDiv = document.getElementById("saludo");
const seleccionDiv = document.getElementById("seleccion");
const seleccionMateriaDiv = document.getElementById("seleccionMateria");
const dificultadesDiv = document.getElementById("dificultades");
const contenidoTestDiv = document.getElementById("contenidoTest");
const resultadosDiv = document.getElementById("resultadosDiv");
const botonesMateriasDiv = document.getElementById("botonesMaterias");
const temasDiv = document.getElementById("temasDiv");

// -------------------- Saludo inicial --------------------
document.getElementById("btnComenzar").addEventListener("click", () => {
  usuario = document.getElementById("nombreUsuario").value.trim();
  if (!usuario) return alert("Ingresa tu nombre para continuar");
  saludoDiv.innerHTML = `¡Hola, ${usuario}! Bienvenido/a.`;
  document.getElementById("modalidad").classList.add("fadeIn");
  mostrarModalidades();
});

// -------------------- Mostrar modalidades --------------------
function mostrarModalidades() {
  const modalidades = ["Primaria", "Secundaria", "Preparatoria", "Universidad", "Postgrado"];
  seleccionDiv.innerHTML = "<h3>Selecciona la modalidad:</h3>";
  modalidades.forEach(mod => {
    const btn = document.createElement("button");
    btn.textContent = mod;
    btn.onclick = () => seleccionarModalidad(mod);
    seleccionDiv.appendChild(btn);
  });
}

// -------------------- Selección de modalidad --------------------
function seleccionarModalidad(mod) {
  modalidadSeleccionada = mod;
  mostrarMaterias(mod);
}

// -------------------- Mostrar materias --------------------
function mostrarMaterias(mod) {
  botonesMateriasDiv.innerHTML = "";
  const materias = Object.keys(contenidoMaterias[mod]);
  materias.forEach(mat => {
    const btn = document.createElement("button");
    btn.className = "matBtn";
    btn.dataset.materia = mat;
    btn.innerHTML = `<span>${mat}</span>`;
    btn.onclick = () => seleccionarMateria(mat);
    botonesMateriasDiv.appendChild(btn);
  });
  seleccionMateriaDiv.classList.add("fadeIn");
}

// -------------------- Selección de materia --------------------
function seleccionarMateria(mat) {
  materiaSeleccionada = mat;
  mostrarDificultades();
}

// -------------------- Mostrar dificultades --------------------
function mostrarDificultades() {
  dificultadesDiv.innerHTML = "<h3>Selecciona la dificultad:</h3>";
  const niveles = ["Extremadamente Fácil", "Muy Fácil", "Fácil", "Normal", "Difícil", "Muy Difícil", "Extremo", "Imposible 💀"];
  niveles.forEach(niv => {
    const btn = document.createElement("button");
    btn.textContent = niv;
    btn.onclick = () => seleccionarDificultad(niv);
    dificultadesDiv.appendChild(btn);
  });
  dificultadesDiv.classList.add("fadeIn");
}

// -------------------- Selección de dificultad --------------------
function seleccionarDificultad(niv) {
  dificultadSeleccionada = niv;
  cargarPreguntas();
}

// -------------------- Cargar preguntas desde quest --------------------
async function cargarPreguntas() {
  let questModule;
  switch(dificultadSeleccionada){
    case "Extremadamente Fácil": questModule = await import("./quest_extremadamente_facil.js"); break;
    case "Muy Fácil": questModule = await import("./quest_muy_facil.js"); break;
    case "Fácil": questModule = await import("./quest_facil.js"); break;
    case "Normal": questModule = await import("./quest_normal.js"); break;
    case "Difícil": questModule = await import("./quest_dificil.js"); break;
    case "Muy Difícil": questModule = await import("./quest_muy_dificil.js"); break;
    case "Extremo": questModule = await import("./quest_extremo.js"); break;
    case "Imposible 💀": questModule = await import("./quest_imposible.js"); break;
    default: questModule = await import("./quest_normal.js"); break;
  }

  // Obtener todas las preguntas de la materia y modalidad
  const allQuestions = questModule.default[materiaSeleccionada];
  preguntasActuales = [].concat(...Object.values(allQuestions));
  respuestasUsuario = Array(preguntasActuales.length).fill(null);
  preguntaIndex = 0;

  mostrarPregunta();
}

// -------------------- Mostrar pregunta --------------------
function mostrarPregunta() {
  if (preguntaIndex >= preguntasActuales.length) {
    mostrarResultados();
    return;
  }

  const q = preguntasActuales[preguntaIndex];
  contenidoTestDiv.innerHTML = `<h3>${q.pregunta}</h3>`;
  q.opciones.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => seleccionarRespuesta(opt);
    if (respuestasUsuario[preguntaIndex]) btn.disabled = true; // Ya respondida
    contenidoTestDiv.appendChild(btn);
  });
  contenidoTestDiv.classList.add("fadeIn");
}

// -------------------- Seleccionar respuesta --------------------
function seleccionarRespuesta(opcion) {
  respuestasUsuario[preguntaIndex] = opcion;
  preguntaIndex++;
  mostrarPregunta();
}

// -------------------- Resultados --------------------
function mostrarResultados() {
  contenidoTestDiv.innerHTML = "";
  resultadosDiv.innerHTML = "<h3>Resultados:</h3>";
  
  const correctas = respuestasUsuario.filter((resp,i)=>resp===preguntasActuales[i].correcta).length;
  const totales = preguntasActuales.length;
  
  const porcentaje = Math.round((correctas/totales)*100);

  resultadosDiv.innerHTML += `
    <canvas id="calificacion" width="150" height="150"></canvas>
    <div>Correctas: ${correctas}</div>
    <div>Incorrectas: ${totales-correctas}</div>
    <button onclick="reintentar()">Reintentar</button>
    <button onclick="cambiarMateria()">Atrás</button>
  `;

  dibujarCirculo(porcentaje);
}

// -------------------- Dibujar círculo de calificación --------------------
function dibujarCirculo(porcentaje){
  const canvas = document.getElementById("calificacion");
  const ctx = canvas.getContext("2d");
  const radio = canvas.width/2 - 10;
  const x = canvas.width/2;
  const y = canvas.height/2;

  // Fondo gris
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.arc(x,y,radio,0,Math.PI*2);
  ctx.strokeStyle = "#ddd";
  ctx.lineWidth = 15;
  ctx.stroke();

  // Azul porcentaje
  ctx.beginPath();
  ctx.arc(x,y,radio,-Math.PI/2,(-Math.PI/2)+(Math.PI*2*(porcentaje/100)));
  ctx.strokeStyle = "#3498db";
  ctx.lineWidth = 15;
  ctx.stroke();

  // Texto
  ctx.font = "20px Poppins";
  ctx.fillStyle = "#222";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(`${porcentaje}%`,x,y);
}

// -------------------- Botones --------------------
function reintentar() {
  preguntaIndex = 0;
  respuestasUsuario = Array(preguntasActuales.length).fill(null);
  mostrarPregunta();
}

function cambiarMateria() {
  resultadosDiv.innerHTML = "";
  mostrarMaterias(modalidadSeleccionada);
}
