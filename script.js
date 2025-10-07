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
const inicioContenidoDiv = document.getElementById("contenidoTest") || document.getElementById("inicioContenido"); // adaptativo

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

// ----------------------
// H elpers / seguridad
// ----------------------
function safeGet(id) {
  const el = document.getElementById(id);
  if (!el) console.warn(`Elemento con id "${id}" no encontrado.`);
  return el;
}

// Habilitar botón listo
inputNombre && inputNombre.addEventListener("input", () => {
  botonListo.disabled = inputNombre.value.trim() === "";
});

// Click en Listo
botonListo && botonListo.addEventListener("click", () => {
  nombreUsuario = inputNombre.value.trim();
  const palabrasBloqueadas = ["tonto","idiota","puto","fuck","shit","mierda"];
  // normalizar para evitar acentos y mayúsculas
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

// Botones de modalidad
const botonesModalidad = document.querySelectorAll(".modBtn");
botonesModalidad.forEach(button => {
  button.addEventListener("click", () => {
    modalidadSeleccionada = button.textContent;
    seleccion.textContent = `Has seleccionado: ${modalidadSeleccionada}`;
    seleccion.classList.add("fadeIn");

    // reset prev
    botonesMateriasDiv.innerHTML = "";
    materiaSeleccionada = "";
    dificultadSeleccionada = "";
    resumenFinal.innerHTML = "";
    resumenFinal.style.display = "none";

    // Mostrar materias según modalidad (verificamos que exista)
    const materias = materiasPorModalidad[modalidadSeleccionada] || [];
    materias.forEach((materia,index)=>{
      const btn = document.createElement("button");
      btn.type = "button"; // importante para evitar submits
      btn.classList.add("matBtn","fadeIn");
      btn.setAttribute("data-materia",materia);
      btn.innerHTML = `<span>${materia}</span>`;
      btn.style.animationDelay = `${index*0.06}s`;

      btn.addEventListener("click", () => {
        materiaSeleccionada = materia;
        seleccionMateria.textContent = `Materia seleccionada: ${materiaSeleccionada}`;
        seleccionMateria.classList.add("fadeIn");

        dificultadSeleccionada = "";
        botonesDificultadDiv.innerHTML = "";
        resumenFinal.innerHTML = "";
        resumenFinal.style.display = "none";

        mostrarDificultades();
      });

      botonesMateriasDiv.appendChild(btn);
    });

    materiasDiv.style.display = "block";
    materiasDiv.classList.add("fadeIn");
    // ocultar la sección de dificultades hasta que el usuario elija materia
    dificultadesDiv.style.display = "none";
  });
});

// ----------------------
// Mostrar dificultades (REPARADA y más robusta)
// ----------------------
function mostrarDificultades() {
  // limpiar
  botonesDificultadDiv.innerHTML = "";
  dificultadSeleccionada = "";

  // Creamos botones dinámicos con tipo="button" y dataset, y los agregamos
  dificultades.forEach((dif,index)=>{
    const btn = document.createElement("button");
    btn.type = "button"; // evita comportamiento inesperado
    btn.classList.add("difBtn","fadeIn");
    btn.textContent = dif;
    btn.setAttribute("data-dificultad", dif);
    btn.style.animationDelay = `${index*0.07}s`;

    // Listener: actualizamos variable y mostramos resumen
    btn.addEventListener("click", () => {
      // Visual feedback: marcar el botón activo (opcionales clases)
      // removemos la clase active de otros botones
      const otros = botonesDificultadDiv.querySelectorAll(".difBtn");
      otros.forEach(o => o.classList.remove("activeDifBtn"));
      btn.classList.add("activeDifBtn");

      dificultadSeleccionada = dif;
      // opcional: mostrar la dificultad seleccionada en la UI
      seleccion.textContent = `Has elegido: ${modalidadSeleccionada} → ${materiaSeleccionada} → ${dificultadSeleccionada}`;
      seleccion.classList.add("fadeIn");

      // Mostrar resumen final (aseguramos que el contenedor esté visible)
      mostrarResumen();
    });

    botonesDificultadDiv.appendChild(btn);
  });

  // mostrar contenedor de dificultades
  if (dificultadesDiv) {
    dificultadesDiv.style.display = "block";
    dificultadesDiv.classList.add("fadeIn");
  }
}

// ----------------------
// Mostrar resumen con botón Comenzar (mejorado)
// ----------------------
function mostrarResumen() {
  // Asegurarnos que hay selección válida antes de mostrar resumen
  if (!nombreUsuario || !modalidadSeleccionada || !materiaSeleccionada || !dificultadSeleccionada) {
    // mostrar un aviso breve si algo falta
    resumenFinal.innerHTML = `<div class="fadeIn" style="padding:12px;"><strong>Completa todos los pasos para ver el resumen.</strong></div>`;
    resumenFinal.style.display = "block";
    resumenFinal.classList.add("fadeIn");
    return;
  }

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

  // Asegurarse que el contenedor se muestre
  resumenFinal.style.display = "block";
  resumenFinal.classList.add("fadeIn");
  // scroll suave al resumen
  resumenFinal.scrollIntoView({ behavior: "smooth", block: "center" });

  // Botón Comenzar (registrar listener con chequeo de existencia)
  const botonComenzar = document.getElementById("botonComenzar");
  if (botonComenzar) {
    botonComenzar.addEventListener("click", () => {
      iniciarContenido();
    });
  } else {
    console.warn("No se encontró #botonComenzar después de renderizar el resumen.");
  }
}

// ----------------------
// Función para iniciar la sección de contenidos y tests
// ----------------------
function iniciarContenido() {
  // Limpiar pantalla y ocultar secciones previas
  modalidadDiv.style.display = "none";
  materiasDiv.style.display = "none";
  dificultadesDiv.style.display = "none";
  resumenFinal.style.display = "none";
  seleccion.textContent = "";

  // Si existe el contenedor "contenidoTest" (según tu index.html)
  const cont = inicioContenidoDiv;
  if (!cont) {
    console.warn("No se encontró el contenedor de contenidos");
    return;
  }

  cont.innerHTML = `
    <div style="padding:14px;">
      <p id="infoUsuario">¡Bienvenid@ ${nombreUsuario}!</p>
      <p>Modalidad: <strong>${modalidadSeleccionada}</strong></p>
      <p>Materia: <strong>${materiaSeleccionada}</strong></p>
      <p>Dificultad: <strong>${dificultadSeleccionada}</strong></p>
      <button id="verContenidoBtn" type="button" style="margin-top:10px;">Ver Contenido</button>
      <div id="temasDiv" style="margin-top:12px;"></div>
    </div>
  `;
  cont.style.display = "block";
  cont.classList.add("fadeIn");

  // Listener para ver contenido (lo conecta con mostrarTemas)
  const verContenidoBtn = document.getElementById("verContenidoBtn");
  if (verContenidoBtn) {
    verContenidoBtn.addEventListener("click", () => {
      mostrarTemas();
    });
  }
}

// ----------------------
// Función que mostrará los temas según modalidad, materia y dificultad
// ----------------------
function mostrarTemas() {
  const temasDiv = document.getElementById("temasDiv");
  if (!temasDiv) {
    console.warn("No se encontró #temasDiv");
    return;
  }
  temasDiv.innerHTML = ""; // limpiar

  // Aquí se llamaría contenido.js o una IA que genere los temas
  // Ejemplo simple usando contenidoMaterias si existe
  let temas = [];
  try {
    if (window.contenidoMaterias && contenidoMaterias[modalidadSeleccionada] && contenidoMaterias[modalidadSeleccionada][materiaSeleccionada]) {
      temas = contenidoMaterias[modalidadSeleccionada][materiaSeleccionada];
    }
  } catch (e) {
    // ignore
  }

  if (temas.length === 0) {
    // fallback simple
    temas = ["Tema 1", "Tema 2", "Tema 3"];
  }

  temas.forEach((tema,index)=>{
    const div = document.createElement("div");
    div.classList.add("temaItem");
    div.style.margin = "10px";
    div.innerHTML = `
      <span>${tema}</span>
      <button class="saberMasBtn" data-tema="${tema}" type="button" style="margin-left:10px;">Saber más</button>
    `;
    temasDiv.appendChild(div);
  });

  // Botón para empezar test
  const btnTest = document.createElement("button");
  btnTest.type = "button";
  btnTest.textContent = "Empezar Test";
  btnTest.style.marginTop = "15px";
  btnTest.addEventListener("click", () => {
    // Aquí se llamaría la función que genera test con IA o contenido.js
    alert("Función de test aún no implementada");
  });
  temasDiv.appendChild(btnTest);

  // Delegación de evento para "Saber más" (por si quieres usar IA luego)
  temasDiv.addEventListener("click", async (e) => {
    const btn = e.target.closest(".saberMasBtn");
    if (!btn) return;
    const tema = btn.getAttribute("data-tema");
    // Aquí podrías pedir a la IA la explicación; por ahora usamos una explicación local
    let explicacion = `Explicación breve de ${tema} en ${materiaSeleccionada} (${modalidadSeleccionada}).`;
    // Mostrarla debajo del tema (simple)
    const info = document.createElement("div");
    info.style.marginTop = "8px";
    info.style.padding = "8px";
    info.style.background = "rgba(255,255,255,0.9)";
    info.style.borderRadius = "8px";
    info.innerHTML = `<strong>${tema}</strong><p>${explicacion}</p>`;
    btn.parentElement.appendChild(info);
  }, { once: false });
                          }
