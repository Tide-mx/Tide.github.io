const inputNombre = document.getElementById("nombre");
const botonListo = document.getElementById("botonListo");
const saludo = document.getElementById("saludo");
const modalidadDiv = document.getElementById("modalidad");
const seleccion = document.getElementById("seleccion");
const materiasDiv = document.getElementById("materias");
const botonesMateriasDiv = document.getElementById("botonesMaterias");
const seleccionMateria = document.getElementById("seleccionMateria");

// Habilitar botón solo si hay texto
inputNombre.addEventListener("input", () => {
  if (inputNombre.value.trim() !== "") {
    botonListo.disabled = false;
  } else {
    botonListo.disabled = true;
  }
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
      });
      botonesMateriasDiv.appendChild(btn);
    });

    materiasDiv.style.display = "block";
  });
});
