const inputNombre = document.getElementById("nombre");
const botonListo = document.getElementById("botonListo");
const saludo = document.getElementById("saludo");
const modalidadDiv = document.getElementById("modalidad");
const seleccion = document.getElementById("seleccion");
const materiasDiv = document.getElementById("materias");
const botonesMateriasDiv = document.getElementById("botonesMaterias");
const seleccionMateria = document.getElementById("seleccionMateria");

// NUEVOS elementos para dificultades
const dificultadesDiv = document.getElementById("dificultades");
const botonesDificultadDiv = document.getElementById("botonesDificultad");
const seleccionDificultad = document.getElementById("seleccionDificultad");

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

// Definir dificultades (más niveles)
const dificultades = [
  "Extremadamente fácil",
  "Muy fácil",
  "Fácil",
  "Normal",
  "Difícil",
  "Muy difícil",
  "Extremo"
];

// Botones de modalidad
const botonesModalidad = document.querySelectorAll(".modBtn");
botonesModalidad.forEach(button => {
  button.addEventListener("click", () => {
    const modalidadElegida = button.textContent;
    seleccion.textContent = `Has seleccionado: ${modalidadElegida}`;

    // Limpiar botones anteriores de materias
    botonesMateriasDiv.innerHTML = "";

    // Crear botones de materias según modalidad
    materiasPorModalidad[modalidadElegida].forEach(materia => {
      const btn = document.createElement("button");
      btn.textContent = materia;
      btn.className = "matBtn";
      btn.addEventListener("click", () => {
        seleccionMateria.textContent = `Materia seleccionada: ${materia}`;

        // Mostrar dificultades
        botonesDificultadDiv.innerHTML = ""; // limpiar anteriores
        dificultades.forEach(dif => {
          const difBtn = document.createElement("button");
          difBtn.textContent = dif;
          difBtn.className = "difBtn";
          difBtn.addEventListener("click", () => {
            seleccionDificultad.textContent = `Dificultad seleccionada: ${dif}`;
          });
          botonesDificultadDiv.appendChild(difBtn);
        });
        dificultadesDiv.style.display = "block";
      });
      botonesMateriasDiv.appendChild(btn);
    });

    materiasDiv.style.display = "block";
  });
});
