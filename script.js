/* =======================
  SCRIPT PRINCIPAL - PARTE 1
  Inicialización general, variables, y funciones base
======================= */

document.addEventListener("DOMContentLoaded", () => {

  // ----- ELEMENTOS DEL DOM -----
  const nombreInput = document.getElementById("nombreUsuario");
  const btnComenzar = document.getElementById("btnComenzar");
  const saludoDiv = document.getElementById("saludo");
  const modalidadDiv = document.getElementById("modalidad");
  const materiasDiv = document.getElementById("materias");
  const botonesMateriasDiv = document.getElementById("botonesMaterias");
  const dificultadesDiv = document.getElementById("dificultades");
  const contenidoTestDiv = document.getElementById("contenidoTest");
  const resumenFinalDiv = document.getElementById("resumenFinal");
  const progresoBarra = document.getElementById("barraProgreso");
  const sonidoClick = new Audio("sounds/click.mp3");

  // ----- VARIABLES DE ESTADO -----
  let usuario = "";
  let modalidadSeleccionada = "";
  let materiaSeleccionada = "";
  let dificultadSeleccionada = "";
  let preguntasActuales = [];
  let indicePregunta = 0;
  let puntaje = 0;

  // ----- FUNCIONES AUXILIARES -----
  function reproducirClick() {
    sonidoClick.currentTime = 0;
    sonidoClick.play().catch(() => {}); // Evitar error si el sonido no puede reproducirse
  }

  function mostrarSeccion(seccion) {
    // Oculta todas
    [modalidadDiv, materiasDiv, dificultadesDiv, contenidoTestDiv, resumenFinalDiv]
      .forEach(div => div.classList.remove("fadeIn", "activo"));

    // Muestra la sección actual
    seccion.classList.add("fadeIn", "activo");
  }

  // Inicia con fade in suave
  document.body.classList.add("inicioCargado");

  // Continuará...
  // =======================
  // PARTE 2: INICIO Y MODALIDAD
  // =======================

  btnComenzar.addEventListener("click", () => {
    usuario = nombreInput.value.trim();

    if (usuario === "") {
      alert("Por favor, escribe tu nombre antes de continuar.");
      return;
    }

    reproducirClick();
    saludoDiv.textContent = `¡Hola, ${usuario}! Selecciona tu nivel educativo:`;
    mostrarSeccion(modalidadDiv);
  });

  const niveles = ["Primaria", "Secundaria", "Preparatoria", "Universidad", "Postgrado"];

  niveles.forEach(nivel => {
    const btn = document.createElement("button");
    btn.textContent = nivel;
    btn.classList.add("btn-nivel");
    btn.addEventListener("click", () => seleccionarModalidad(nivel));
    modalidadDiv.appendChild(btn);
  });

  function seleccionarModalidad(nivel) {
    reproducirClick();
    modalidadSeleccionada = nivel;
    generarMaterias(nivel);
    mostrarSeccion(materiasDiv);
  }
  // =======================
  // PARTE 3: MATERIAS Y DIFICULTADES
  // =======================

  function generarMaterias(nivel) {
    botonesMateriasDiv.innerHTML = "";

    const materiasPorNivel = {
      Primaria: ["Matemáticas", "Ciencias", "Español", "Historia", "Geografía", "Arte", "Inglés"],
      Secundaria: ["Matemáticas", "Física", "Química", "Biología", "Literatura", "Historia", "Inglés"],
      Preparatoria: ["Álgebra", "Cálculo", "Química", "Física", "Economía", "Filosofía", "Inglés"],
      Universidad: ["Programación", "Diseño", "Cálculo Integral", "Psicología", "Gestión", "Idiomas"],
      Postgrado: ["Investigación", "Gestión Avanzada", "Educación Superior", "Psicología", "Filosofía Aplicada"]
    };

    materiasPorNivel[nivel].forEach(materia => {
      const btn = document.createElement("button");
      btn.className = "matBtn";
      btn.setAttribute("data-materia", materia);
      btn.innerHTML = `<img src="img/materias/${materia.toLowerCase()}.png" alt="${materia}"><span>${materia}</span>`;
      btn.addEventListener("click", () => seleccionarMateria(materia));
      botonesMateriasDiv.appendChild(btn);
    });
  }

  function seleccionarMateria(materia) {
    reproducirClick();
    materiaSeleccionada = materia;
    mostrarDificultades();
  }

  function mostrarDificultades() {
    const dificultades = ["Fácil", "Normal", "Difícil", "Imposible"];
    const contenedor = document.getElementById("botonesDificultad");

    contenedor.innerHTML = "";
    dificultades.forEach(dif => {
      const btn = document.createElement("button");
      btn.textContent = dif;
      btn.classList.add("btn-dificultad");
      btn.addEventListener("click", () => seleccionarDificultad(dif));
      contenedor.appendChild(btn);
    });

    mostrarSeccion(dificultadesDiv);
  }

  function seleccionarDificultad(dif) {
    reproducirClick();
    dificultadSeleccionada = dif;
    cargarPreguntas();
  }
