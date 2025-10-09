// -------------------- script.js --------------------

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
const resumenFinal = document.getElementById("resumenFinal");
const inicioContenidoDiv = document.getElementById("contenidoTest");
const infoUsuario = document.getElementById("infoUsuario");
const temasDiv = document.getElementById("temasDiv");
const testDiv = document.getElementById("testDiv");
const resultadosDiv = document.getElementById("resultadosDiv");
const verContenidoBtn = document.getElementById("verContenidoBtn");

// Variables
let nombreUsuario = "";
let modalidadSeleccionada = "";
let materiaSeleccionada = "";
let dificultadSeleccionada = "";
let preguntasTest = [];
let respuestasUsuario = [];

// Dificultades
const dificultades = [
  "Extremadamente Fácil","Muy Fácil","Fácil","Normal","Difícil","Muy Difícil","Extremo","Imposible 💀"
];

// Materias por modalidad
const materiasPorModalidad = {
  "Primaria": ["Matemáticas","Ciencias","Geografía","Español","Historia","Inglés","Arte","Educación Física"],
  "Secundaria": ["Álgebra","Física","Química","Historia Universal","Biología","Arte 2","Inglés 2"],
  "Preparatoria": ["Cálculo","Física Avanzada","Literatura","Química","Historia Moderna","Filosofía","Idiomas"],
  "Universidad": ["Programación","Economía","Ingeniería","Cálculo Integral","Estadística","Diseño","Psicología"],
  "Postgrado": ["Gestión de Proyectos","Investigación Avanzada","Filosofía Aplicada","Educación Superior"]
};

// -------------------- BOTÓN LISTO --------------------
inputNombre.addEventListener("input", () => {
  botonListo.disabled = inputNombre.value.trim() === "";
});

botonListo.addEventListener("click", () => {
  nombreUsuario = inputNombre.value.trim();
  const palabrasBloqueadas = ["tonto","idiota","puto","fuck","shit","mierda"];
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

// -------------------- BOTONES MODALIDAD --------------------
document.querySelectorAll(".modBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    modalidadSeleccionada = btn.textContent;
    seleccion.textContent = `Has seleccionado: ${modalidadSeleccionada}`;
    seleccion.classList.add("fadeIn");

    // Reiniciar selección
    botonesMateriasDiv.innerHTML = "";
    seleccionMateria.textContent = "";
    dificultadSeleccionada = "";
    botonesDificultadDiv.innerHTML = "";
    resumenFinal.innerHTML = "";

    // Mostrar materias
    materiasPorModalidad[modalidadSeleccionada].forEach((materia, idx) => {
      const btnMateria = document.createElement("button");
      btnMateria.classList.add("matBtn","fadeIn");
      btnMateria.setAttribute("data-materia",materia);
      btnMateria.innerHTML = `<span>${materia}</span>`;
      btnMateria.style.animationDelay = `${idx*0.1}s`;
      btnMateria.addEventListener("click", () => seleccionarMateria(materia));
      botonesMateriasDiv.appendChild(btnMateria);
    });

    materiasDiv.style.display = "block";
    dificultadesDiv.style.display = "none";
  });
});

// -------------------- SELECCIONAR MATERIA --------------------
function seleccionarMateria(materia){
  materiaSeleccionada = materia;
  seleccionMateria.textContent = `Materia seleccionada: ${materiaSeleccionada}`;
  seleccionMateria.classList.add("fadeIn");

  dificultadSeleccionada = "";
  botonesDificultadDiv.innerHTML = "";
  resumenFinal.innerHTML = "";

  mostrarDificultades();
}

// -------------------- MOSTRAR DIFICULTADES --------------------
function mostrarDificultades(){
  dificultadesDiv.style.display = "block";
  botonesDificultadDiv.innerHTML = "";

  dificultades.forEach((dif, idx)=>{
    const btnDif = document.createElement("button");
    btnDif.classList.add("difBtn","fadeIn");
    btnDif.textContent = dif;
    btnDif.style.animationDelay = `${idx*0.1}s`;
    btnDif.addEventListener("click", () => seleccionarDificultad(dif));
    botonesDificultadDiv.appendChild(btnDif);
  });
}

// -------------------- SELECCIONAR DIFICULTAD --------------------
function seleccionarDificultad(dif){
  dificultadSeleccionada = dif;
  mostrarResumen();
}

// -------------------- MOSTRAR RESUMEN --------------------
function mostrarResumen(){
  resumenFinal.innerHTML = `
    <div class="fadeIn" style="margin-top:20px;padding:15px;background:rgba(255,255,255,0.9);border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,0.2);max-width:500px;margin-inline:auto;">
      <h3>📘 Resumen de tu selección</h3>
      <p><strong>Nombre:</strong> ${nombreUsuario}</p>
      <p><strong>Modalidad:</strong> ${modalidadSeleccionada}</p>
      <p><strong>Materia:</strong> ${materiaSeleccionada}</p>
      <p><strong>Dificultad:</strong> ${dificultadSeleccionada}</p>
      <button id="botonComenzar" style="margin-top:10px;">Comenzar</button>
    </div>
  `;

  document.getElementById("botonComenzar").addEventListener("click", () => iniciarContenido());
}

// -------------------- INICIAR CONTENIDO --------------------
function iniciarContenido(){
  modalidadDiv.style.display = "none";
  materiasDiv.style.display = "none";
  dificultadesDiv.style.display = "none";
  resumenFinal.style.display = "none";
  seleccion.textContent = "";

  inicioContenidoDiv.style.display = "block";
  infoUsuario.innerHTML = `
    <p>¡Bienvenid@ ${nombreUsuario}!</p>
    <p>Modalidad: ${modalidadSeleccionada}</p>
    <p>Materia: ${materiaSeleccionada}</p>
    <p>Dificultad: ${dificultadSeleccionada}</p>
  `;

  verContenidoBtn.style.display = "inline-block";
  temasDiv.innerHTML = "";
  testDiv.style.display = "none";
  resultadosDiv.style.display = "none";

  verContenidoBtn.onclick = () => mostrarTemas();
}

// -------------------- MOSTRAR TEMAS --------------------
function mostrarTemas(){
  temasDiv.innerHTML = "";
  const cantidadTemas = dificultadNivel(dificultadSeleccionada)+3; // más difícil → más temas
  for(let i=0;i<cantidadTemas;i++){
    const tema = `${materiaSeleccionada} Tema ${i+1}`;
    const div = document.createElement("div");
    div.classList.add("temaItem");
    div.innerHTML = `<span>${tema}</span> <button onclick="mostrarExplicacion('${tema}')">Saber más</button>`;
    temasDiv.appendChild(div);
  }

  const btnTest = document.createElement("button");
  btnTest.textContent = "Empezar Test";
  btnTest.style.marginTop = "15px";
  btnTest.onclick = () => iniciarTest();
  temasDiv.appendChild(btnTest);
}

// -------------------- MOSTRAR EXPLICACION --------------------
function mostrarExplicacion(tema){
  alert(`Explicación del tema "${tema}" de ${materiaSeleccionada} (${modalidadSeleccionada})`);
}

// -------------------- FUNCIONES TEST --------------------
function iniciarTest(){
  const cantidadPreguntas = dificultadNivel(dificultadSeleccionada)+3;
  preguntasTest = [];
  respuestasUsuario = Array(cantidadPreguntas).fill(null);

  for(let i=0;i<cantidadPreguntas;i++){
    const tema = `${materiaSeleccionada} Tema ${i+1}`;
    const correcta = `Respuesta correcta de ${tema}`;
    const opciones = [correcta];
    while(opciones.length<4){
      opciones.push(`Opción falsa ${Math.floor(Math.random()*100)}`);
    }
    opciones.sort(()=>Math.random()-0.5);
    preguntasTest.push({pregunta:`Pregunta sobre ${tema}`, opciones, correcta});
  }

  mostrarTest();
}

// -------------------- MOSTRAR TEST --------------------
function mostrarTest(){
  testDiv.innerHTML = "";
  testDiv.style.display = "block";
  resultadosDiv.style.display = "none";

  preguntasTest.forEach((p, idx)=>{
    const div = document.createElement("div");
    div.style.margin = "10px";
    div.innerHTML = `<p><strong>${p.pregunta}</strong></p>`;
    p.opciones.forEach(op=>{
      const btn = document.createElement("button");
      btn.textContent = op;
      btn.disabled = respuestasUsuario[idx]!==null;
      btn.onclick = ()=>{
        if(respuestasUsuario[idx]===null){
          respuestasUsuario[idx]=op;
          mostrarTest();
        }
      };
      div.appendChild(btn);
    });
    testDiv.appendChild(div);
  });

  const btnFinalizar = document.createElement("button");
  btnFinalizar.textContent = "Finalizar Test";
  btnFinalizar.style.marginTop = "15px";
  btnFinalizar.onclick = () => calcularResultados();
  testDiv.appendChild(btnFinalizar);
}

// -------------------- CALCULAR RESULTADOS --------------------
function calcularResultados(){
  if(respuestasUsuario.includes(null)){
    alert("¡Faltan preguntas por responder, verifica!");
    return;
  }

  const correctas = respuestasUsuario.filter((r,i)=>r===preguntasTest[i].correcta).length;
  const total = preguntasTest.length;
  const porcentaje = Math.round((correctas/total)*100);

  testDiv.style.display = "none";
  resultadosDiv.style.display = "block";
  resultadosDiv.innerHTML = `<h3>${porcentaje>=80 ? "¡Felicidades!" : porcentaje>=50 ? "¡Lo hiciste bien!" : "¡Inténtalo nuevamente!"}</h3>`;

  // Canvas circulo
  resultadosDiv.innerHTML += `<canvas id="canvasResultado" width="150" height="150"></canvas>`;
  const canvas = document.getElementById("canvasResultado");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,150,150);
  // fondo
  ctx.beginPath();
  ctx.arc(75,75,70,0,2*Math.PI);
  ctx.fillStyle="#eee";
  ctx.fill();
  // progreso
  ctx.beginPath();
  ctx.arc(75,75,70,-Math.PI/2, -Math.PI/2 + 2*Math.PI*(porcentaje/100));
  ctx.lineWidth=15;
  ctx.strokeStyle="#3498db";
  ctx.stroke();
  // texto
  ctx.font="20px Poppins";
  ctx.fillStyle="#222";
  ctx.textAlign="center";
  ctx.textBaseline="middle";
  ctx.fillText(`${porcentaje}%`,75,75);

  // Info correctas/incorrectas
  resultadosDiv.innerHTML += `<div style="display:flex;justify-content:space-between;width:150px;margin:10px auto;"><span>❌ ${total-correctas}</span><span>✅ ${correctas}</span></div>`;

  // Botones ATRÁS y Reintentar
  const btnAtras = document.createElement("button");
  btnAtras.textContent = "ATRÁS";
  btnAtras.onclick = ()=>{mostrarTemas(); resultadosDiv.style.display="none";};

  const btnReintentar = document.createElement("button");
  btnReintentar.textContent = "Reintentar";
  btnReintentar.style.marginLeft="10px";
  btnReintentar.onclick = ()=>{iniciarTest(); resultadosDiv.style.display="none";};

  resultadosDiv.appendChild(btnAtras);
  resultadosDiv.appendChild(btnReintentar);
}

// -------------------- NIVEL DIFICULTAD --------------------
function dificultadNivel(dif){
  switch(dif){
    case "Extremadamente Fácil": return 0;
    case "Muy Fácil": return 0;
    case "Fácil": return 1;
    case "Normal": return 2;
    case "Difícil": return 3;
    case "Muy Difícil": return 4;
    case "Extremo": return 5;
    case "Imposible 💀": return 6;
    default: return 0;
  }
}
