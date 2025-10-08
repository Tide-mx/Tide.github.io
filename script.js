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
const inicioContenidoDiv = document.getElementById("inicioContenido");

let nombreUsuario = "";
let modalidadSeleccionada = "";
let materiaSeleccionada = "";
let dificultadSeleccionada = "";

// Habilitar botón listo
inputNombre.addEventListener("input", () => {
  botonListo.disabled = inputNombre.value.trim() === "";
});

// Click en Listo
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

// Botones de modalidad
const botonesModalidad = document.querySelectorAll(".modBtn");
botonesModalidad.forEach(button => {
  button.addEventListener("click", () => {
    modalidadSeleccionada = button.textContent;
    seleccion.textContent = `Has seleccionado: ${modalidadSeleccionada}`;
    seleccion.classList.add("fadeIn");

    botonesMateriasDiv.innerHTML = "";
    materiaSeleccionada = "";
    dificultadSeleccionada = "";
    resumenFinal.innerHTML = "";

    // Mostrar materias según modalidad
    Object.keys(contenidoMaterias[modalidadSeleccionada]).forEach((materia, index) => {
      const btn = document.createElement("button");
      btn.classList.add("matBtn","fadeIn");
      btn.setAttribute("data-materia", materia);
      btn.innerHTML = `<span>${materia}</span>`;
      btn.style.animationDelay = `${index*0.1}s`;

      btn.addEventListener("click", () => {
        materiaSeleccionada = materia;
        seleccionMateria.textContent = `Materia seleccionada: ${materiaSeleccionada}`;
        seleccionMateria.classList.add("fadeIn");

        dificultadSeleccionada = "";
        botonesDificultadDiv.innerHTML = "";
        resumenFinal.innerHTML = "";

        mostrarDificultades();
      });

      botonesMateriasDiv.appendChild(btn);
    });

    materiasDiv.style.display = "block";
    materiasDiv.classList.add("fadeIn");
    dificultadesDiv.style.display = "none";
  });
});

// Mostrar dificultades
function mostrarDificultades() {
  botonesDificultadDiv.innerHTML = "";
  const dificultades = ["Extremadamente Fácil","Muy Fácil","Fácil","Normal","Difícil","Muy Difícil","Extremo","Imposible 💀"];
  dificultades.forEach((dif,index)=>{
    const btn = document.createElement("button");
    btn.classList.add("difBtn","fadeIn");
    btn.textContent = dif;
    btn.style.animationDelay = `${index*0.1}s`;
    btn.addEventListener("click", () => {
      dificultadSeleccionada = dif;
      mostrarResumen();
    });
    botonesDificultadDiv.appendChild(btn);
  });
  dificultadesDiv.style.display = "block";
  dificultadesDiv.classList.add("fadeIn");
}

// Mostrar resumen con botón Comenzar
function mostrarResumen() {
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

  document.getElementById("botonComenzar").addEventListener("click", iniciarContenido);
}

// Función para iniciar la sección de contenidos y tests
function iniciarContenido() {
  modalidadDiv.style.display = "none";
  materiasDiv.style.display = "none";
  dificultadesDiv.style.display = "none";
  resumenFinal.style.display = "none";
  seleccion.textContent = "";

  inicioContenidoDiv.innerHTML = `
    <h3>¡Bienvenid@ ${nombreUsuario}!</h3>
    <p>Modalidad: ${modalidadSeleccionada}</p>
    <p>Materia: ${materiaSeleccionada}</p>
    <p>Dificultad: ${dificultadSeleccionada}</p>
    <button id="verContenidoBtn">Ver Temas</button>
    <div id="temasDiv"></div>
  `;

  document.getElementById("verContenidoBtn").addEventListener("click", mostrarTemas);
}

// Mostrar temas con explicaciones
function mostrarTemas() {
  const temasDiv = document.getElementById("temasDiv");
  temasDiv.innerHTML = "";

  const temas = contenidoMaterias[modalidadSeleccionada][materiaSeleccionada];

  temas.forEach((tema) => {
    const div = document.createElement("div");
    div.classList.add("temaItem");
    div.innerHTML = `
      <span><strong>${tema}</strong>: ${getExplicacion(modalidadSeleccionada, materiaSeleccionada, tema)}</span>
      <button class="saberMasBtn" data-tema="${tema}">Generar Pregunta</button>
      <div class="preguntaDiv"></div>
    `;
    temasDiv.appendChild(div);
  });

  // Botón para generar preguntas de todos los temas
  const botones = document.querySelectorAll(".saberMasBtn");
  botones.forEach(btn => {
    btn.addEventListener("click", () => {
      const tema = btn.getAttribute("data-tema");
      const preguntas = generarPreguntas(modalidadSeleccionada, materiaSeleccionada, dificultadSeleccionada, 1);
      const divPregunta = btn.nextElementSibling;
      divPregunta.innerHTML = `
        <p><strong>${preguntas[0].pregunta}</strong></p>
        ${preguntas[0].opciones.map(opt => `<button>${opt}</button>`).join(" ")}
      `;
    });
  });
                            }
