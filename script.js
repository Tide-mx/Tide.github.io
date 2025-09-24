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
const seleccionDificultad = document.getElementById("seleccionDificultad");
const resumenFinalDiv = document.getElementById("resumenFinal");
const resumenTexto = document.getElementById("resumenTexto");
const reiniciarBtn = document.getElementById("reiniciarBtn");

// Habilitar botón solo si hay texto
inputNombre.addEventListener("input", () => {
  botonListo.disabled = inputNombre.value.trim() === "";
});

// Acción al hacer clic en "Listo"
botonListo.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();
  saludo.textContent = `¡Hola, ${nombre}! Bienvenido/a.`;
  modalidadDiv.style.display = "block";
  document.getElementById("ingresoNombre").style.display = "none";
});

// Definir materias según modalidad
const materiasPorModalidad = {
  "Primaria": ["Matemáticas Básicas", "Lengua", "Ciencias Naturales", "Historia", "Arte", "Educación Física"],
  "Secundaria": ["Matemáticas", "Lengua y Literatura", "Biología", "Química", "Historia Universal", "Arte", "Tecnología"],
  "Preparatoria": ["Álgebra", "Física", "Química Avanzada", "Literatura", "Historia Contemporánea", "Filosofía", "Idiomas"],
  "Universidad": ["Cálculo", "Física Moderna", "Química Orgánica", "Literatura Universal", "Historia Moderna", "Programación", "Economía"],
  "Postgrado": ["Investigación Avanzada", "Estadística Avanzada", "Filosofía Aplicada", "Gestión de Proyectos", "Especialización Profesional"]
};

// Lista de dificultades
const dificultades = [
  "Extremadamente Fácil",
  "Muy Fácil",
  "Fácil",
  "Normal",
  "Difícil",
  "Muy Difícil",
  "Extremadamente Difícil",
  "Imposible 💀"
];

// Botones de modalidad
const botonesModalidad = document.querySelectorAll(".modBtn");
botonesModalidad.forEach(button => {
  button.addEventListener("click", () => {
    const modalidadElegida = button.textContent;
    seleccion.textContent = `Has seleccionado: ${modalidadElegida}`;

    // Limpiar botones anteriores
    botonesMateriasDiv.innerHTML = "";

    // Crear botones de materias según modalidad
    materiasPorModalidad[modalidadElegida].forEach(materia => {
      const btn = document.createElement("button");
      btn.textContent = materia;
      btn.className = "matBtn";
      btn.addEventListener("click", () => {
        seleccionMateria.textContent = `Materia seleccionada: ${materia}`;
        mostrarDificultades(modalidadElegida, materia);
      });
      botonesMateriasDiv.appendChild(btn);
    });

    materiasDiv.style.display = "block";
  });
});

// Función para mostrar dificultades
function mostrarDificultades(modalidad, materia) {
  botonesDificultadDiv.innerHTML = "";

  dificultades.forEach(dif => {
    const btn = document.createElement("button");
    btn.textContent = dif;
    btn.className = "difBtn";
    btn.addEventListener("click", () => {
      seleccionDificultad.textContent = `Dificultad seleccionada: ${dif}`;
      mostrarResumen(modalidad, materia, dif);
    });
    botonesDificultadDiv.appendChild(btn);
  });

  dificultadesDiv.style.display = "block";
}

// Función para mostrar resumen final
function mostrarResumen(modalidad, materia, dificultad) {
  resumenTexto.textContent = `Modalidad: ${modalidad} | Materia: ${materia} | Dificultad: ${dificultad}`;
  resumenFinalDiv.style.display = "block";
}

// Reiniciar todo
reiniciarBtn.addEventListener("click", () => {
  // Ocultar todo
  saludo.textContent = "";
  seleccion.textContent = "";
  seleccionMateria.textContent = "";
  seleccionDificultad.textContent = "";
  resumenTexto.textContent = "";

  document.getElementById("ingresoNombre").style.display = "block";
  modalidadDiv.style.display = "none";
  materiasDiv.style.display = "none";
  dificultadesDiv.style.display = "none";
  resumenFinalDiv.style.display = "none";

  // Resetear input
  inputNombre.value = "";
  botonListo.disabled = true;
});
