// ---------------------- script.js ----------------------

// Referencias a elementos del DOM
const nombreInput = document.getElementById("nombre");
const botonListo = document.getElementById("botonListo");
const saludo = document.getElementById("saludo");
const ingresoNombreDiv = document.getElementById("ingresoNombre");
const modalidadDiv = document.getElementById("modalidad");
const materiasDiv = document.getElementById("materias");
const botonesMateriasDiv = document.getElementById("botonesMaterias");
const seleccionMateria = document.getElementById("seleccionMateria");
const dificultadesDiv = document.getElementById("dificultades");
const botonesDificultadDiv = document.getElementById("botonesDificultad");
const resumenFinal = document.getElementById("resumenFinal");

// =================== ETAPA 1: INGRESAR NOMBRE ===================

// Habilita el botón "Listo" cuando hay texto
nombreInput.addEventListener("input", () => {
  botonListo.disabled = nombreInput.value.trim() === "";
});

// Al hacer clic en "Listo"
botonListo.addEventListener("click", () => {
  const nombre = nombreInput.value.trim();
  if (nombre !== "") {
    saludo.textContent = `¡Hola, ${nombre}! Bienvenido/a a tu prueba.`;
    ingresoNombreDiv.style.display = "none";
    mostrarModalidades();
  }
});

// =================== ETAPA 2: SELECCIÓN DE MODALIDAD ===================

function mostrarModalidades() {
  modalidadDiv.style.display = "block";
  modalidadDiv.classList.add("fadeIn");
}

let modalidadSeleccionada = "";

// Escucha los clics en los botones de modalidad
document.querySelectorAll(".modBtn").forEach((boton) => {
  boton.addEventListener("click", () => {
    modalidadSeleccionada = boton.textContent.trim();
    modalidadDiv.style.display = "none";
    mostrarMaterias(modalidadSeleccionada);
  });
});

// =================== ETAPA 3: SELECCIÓN DE MATERIA ===================

function mostrarMaterias(modalidad) {
  botonesMateriasDiv.innerHTML = "";

  // Verifica si existen materias en contenido.js
  if (!contenidoMaterias[modalidad]) {
    botonesMateriasDiv.innerHTML = `<p>No hay materias registradas para ${modalidad}.</p>`;
    return;
  }

  const materias = Object.keys(contenidoMaterias[modalidad]);
  materias.forEach((materia) => {
    const boton = document.createElement("button");
    boton.textContent = materia;
    boton.classList.add("matBtn");
    boton.addEventListener("click", () => {
      seleccionMateria.textContent = `Materia seleccionada: ${materia}`;
      materiasDiv.style.display = "none";
      mostrarDificultades(materia);
    });
    botonesMateriasDiv.appendChild(boton);
  });

  materiasDiv.style.display = "block";
  materiasDiv.classList.add("fadeIn");
}

// =================== ETAPA 4: SELECCIÓN DE DIFICULTAD ===================

function mostrarDificultades(materia) {
  botonesDificultadDiv.innerHTML = "";
  const dificultades = [
    "Extremadamente Fácil",
    "Muy Fácil",
    "Fácil",
    "Normal",
    "Difícil",
    "Muy Difícil",
    "Extremo",
    "Imposible 💀",
  ];

  dificultades.forEach((dificultad) => {
    const boton = document.createElement("button");
    boton.textContent = dificultad;
    boton.classList.add("diffBtn");
    boton.addEventListener("click", () => {
      dificultadesDiv.style.display = "none";
      mostrarResumenFinal(modalidadSeleccionada, materia, dificultad);
    });
    botonesDificultadDiv.appendChild(boton);
  });

  dificultadesDiv.style.display = "block";
  dificultadesDiv.classList.add("fadeIn");
}

// =================== ETAPA 5: RESUMEN FINAL ===================

function mostrarResumenFinal(modalidad, materia, dificultad) {
  resumenFinal.innerHTML = `
    <h2>Resumen de selección</h2>
    <p><strong>Modalidad:</strong> ${modalidad}</p>
    <p><strong>Materia:</strong> ${materia}</p>
    <p><strong>Dificultad:</strong> ${dificultad}</p>
    <button id="empezarTest">Iniciar Test</button>
  `;

  resumenFinal.style.display = "block";
  resumenFinal.classList.add("fadeIn");

  document.getElementById("empezarTest").addEventListener("click", () => {
    iniciarTest(modalidad, materia, dificultad);
  });
}

// =================== ETAPA 6: INICIAR TEST ===================

function iniciarTest(modalidad, materia, dificultad) {
  resumenFinal.innerHTML = `<h2>Cargando preguntas de ${materia} (${dificultad})...</h2>`;

  let preguntas = [];

  try {
    switch (dificultad) {
      case "Extremadamente Fácil":
        preguntas = questExtremadamenteFacil[modalidad][materia];
        break;
      case "Muy Fácil":
        preguntas = questMuyFacil[modalidad][materia];
        break;
      case "Fácil":
        preguntas = questFacil[modalidad][materia];
        break;
      case "Normal":
        preguntas = questNormal[modalidad][materia];
        break;
      case "Difícil":
        preguntas = questDificil[modalidad][materia];
        break;
      case "Muy Difícil":
        preguntas = questMuyDificil[modalidad][materia];
        break;
      case "Extremo":
        preguntas = questExtremo[modalidad][materia];
        break;
      case "Imposible 💀":
        preguntas = questImposible[modalidad][materia];
        break;
      default:
        preguntas = [];
    }
  } catch (error) {
    console.error("Error al cargar preguntas:", error);
  }

  if (!preguntas || preguntas.length === 0) {
    resumenFinal.innerHTML = `<p>No hay preguntas disponibles para esta selección.</p>`;
    return;
  }

  mostrarPreguntas(preguntas);
}

// =================== ETAPA 7: MOSTRAR PREGUNTAS ===================

function mostrarPreguntas(preguntas) {
  resumenFinal.innerHTML = "";
  let indice = 0;
  let puntaje = 0;

  function mostrarSiguiente() {
    if (indice >= preguntas.length) {
      resumenFinal.innerHTML = `
        <h2>¡Test completado!</h2>
        <p>Puntaje final: ${puntaje} / ${preguntas.length}</p>
        <button onclick="location.reload()">Volver al inicio</button>
      `;
      return;
    }

    const pregunta = preguntas[indice];
    resumenFinal.innerHTML = `
      <h3>${pregunta.pregunta}</h3>
      ${pregunta.opciones
        .map(
          (op, i) => `
          <button class="opcionBtn" data-index="${i}">${op}</button>
        `
        )
        .join("")}
      <p>Pregunta ${indice + 1} de ${preguntas.length}</p>
    `;

    document.querySelectorAll(".opcionBtn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.textContent === pregunta.correcta.toString()) {
          puntaje++;
        }
        indice++;
        mostrarSiguiente();
      });
    });
  }

  mostrarSiguiente();
}

// =================== FIN DEL SCRIPT ===================
