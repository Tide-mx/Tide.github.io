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
const inicioContenidoDiv = document.getElementById("inicioContenido"); // Nuevo

let nombreUsuario = "";
let modalidadSeleccionada = "";
let materiaSeleccionada = "";
let dificultadSeleccionada = "";

// Dificultades
const dificultades = [
  "Extremadamente Fácil","Muy Fácil","Fácil","Normal","Difícil","Muy Difícil","Extremo","Imposible 💀"
];

// Materias por modalidad completas
const materiasPorModalidad = {
  "Primaria": ["Matemáticas","Ciencias","Geografía","Español","Historia","Inglés","Arte","Educación Física"],
  "Secundaria": ["Álgebra","Física","Química","Historia Universal","Biología","Arte 2","Inglés 2"],
  "Preparatoria": ["Cálculo","Física Avanzada","Literatura","Química","Historia Moderna","Filosofía","Idiomas"],
  "Universidad": ["Programación","Economía","Ingeniería","Cálculo Integral","Estadística","Diseño","Psicología"],
  "Postgrado": ["Gestión de Proyectos","Investigación Avanzada","Filosofía Aplicada","Educación Superior"]
};

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
    materiasPorModalidad[modalidadSeleccionada].forEach((materia,index)=>{
      const btn = document.createElement("button");
      btn.classList.add("matBtn","fadeIn");
      btn.setAttribute("data-materia",materia);
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

  // Botón Comenzar
  document.getElementById("botonComenzar").addEventListener("click", () => {
    iniciarContenido();
  });
}

// Función para iniciar la sección de contenidos y tests
function iniciarContenido() {
  // Limpiar pantalla
  modalidadDiv.style.display = "none";
  materiasDiv.style.display = "none";
  dificultadesDiv.style.display = "none";
  resumenFinal.style.display = "none";
  seleccion.textContent = "";

  inicioContenidoDiv.innerHTML = `
    <p>¡Bienvenid@ ${nombreUsuario}!</p>
    <p>Modalidad: ${modalidadSeleccionada}</p>
    <p>Materia: ${materiaSeleccionada}</p>
    <p>Dificultad: ${dificultadSeleccionada}</p>
    <button id="verContenidoBtn">Ver Contenido</button>
    <div id="temasDiv"></div>
  `;

  document.getElementById("verContenidoBtn").addEventListener("click", () => {
    mostrarTemas();
  });
}

// Función que mostrará los temas según modalidad, materia y dificultad
function mostrarTemas() {
  const temasDiv = document.getElementById("temasDiv");
  temasDiv.innerHTML = ""; // limpiar

  // Aquí se llamaría contenido.js o una IA que genere los temas
  // Ejemplo simple:
  let temas = [];

  if(modalidadSeleccionada === "Primaria" && materiaSeleccionada === "Matemáticas") {
    temas = ["Suma", "Resta", "Multiplicación", "División"];
  } else if(modalidadSeleccionada === "Primaria" && materiaSeleccionada === "Ciencias") {
    temas = ["Animales", "Plantas", "El cuerpo humano"];
  } else {
    temas = ["Tema 1", "Tema 2", "Tema 3"];
  }

  temas.forEach((tema,index)=>{
    const div = document.createElement("div");
    div.style.margin = "10px";
    div.innerHTML = `
      <span>${tema}</span>
      <button class="saberMasBtn" data-tema="${tema}" style="margin-left:10px;">Saber más</button>
    `;
    temasDiv.appendChild(div);
  });

  // Botón para empezar test
  const btnTest = document.createElement("button");
  btnTest.textContent = "Empezar Test";
  btnTest.style.marginTop = "15px";
  btnTest.addEventListener("click", () => {
    // Aquí se llamaría la función que genera test con IA
    alert("Función de test aún no implementada");
  });
  temasDiv.appendChild(btnTest);
}
