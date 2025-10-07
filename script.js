document.addEventListener("DOMContentLoaded", () => {
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

  // Guardado y recuperación en localStorage
  let usuario = {
    nombre: "",
    modalidad: "",
    materia: "",
    dificultad: ""
  };

  // Recuperar datos al cargar la página
  if(localStorage.getItem("usuario")){
    usuario = JSON.parse(localStorage.getItem("usuario"));
    if(usuario.nombre){
      saludo.textContent = `¡Hola, ${usuario.nombre}! Bienvenido/a.`;
      inputNombre.value = usuario.nombre;
      botonListo.disabled = false;
      modalidadDiv.style.display = "block";
      document.getElementById("ingresoNombre").style.display = "none";
    }
    if(usuario.modalidad) mostrarModalidad(usuario.modalidad);
    if(usuario.materia) mostrarMateria(usuario.materia);
    if(usuario.dificultad) actualizarResumen();
  }

  // Activar botón solo si hay texto
  inputNombre.addEventListener("input", () => {
    botonListo.disabled = inputNombre.value.trim() === "";
  });

  // Acción al hacer clic en "Listo"
  botonListo.addEventListener("click", () => {
    usuario.nombre = inputNombre.value.trim();
    saludo.textContent = `¡Hola, ${usuario.nombre}! Bienvenido/a.`;
    document.getElementById("ingresoNombre").style.display = "none";
    modalidadDiv.style.display = "block";
    guardarDatos();
  });

  // Materias según modalidad
  const materiasPorModalidad = {
    "Primaria": ["Matemáticas","Español","Ciencias","Historia","Arte","Educación Física","Inglés"],
    "Secundaria": ["Matemáticas","Lengua y Literatura","Biología","Química","Historia Universal","Arte","Tecnología","Inglés II"],
    "Preparatoria": ["Álgebra","Física","Química Avanzada","Literatura","Historia Avanzada","Filosofía","Idiomas","Inglés III"],
    "Universidad": ["Cálculo","Física Avanzada","Química","Literatura Universal","Historia Moderna","Programación","Economía","Ingeniería","Diseño","Psicología"],
    "Postgrado": ["Investigación Avanzada","Estadística","Filosofía Aplicada","Gestión de Proyectos","Educación Superior"]
  };

  // Dificultades
  const dificultades = ["Extremadamente Fácil","Muy Fácil","Fácil","Normal","Difícil","Muy Difícil","Extremadamente Difícil"];

  // Botones de modalidad
  const botonesModalidad = document.querySelectorAll(".modBtn");
  botonesModalidad.forEach(button => {
    button.addEventListener("click", () => {
      usuario.modalidad = button.textContent;
      mostrarModalidad(usuario.modalidad);
      usuario.materia = ""; // Reset materia
      usuario.dificultad = ""; // Reset dificultad
      guardarDatos();
    });
  });

  function mostrarModalidad(modalidad){
    seleccion.textContent = `Has seleccionado: ${modalidad}`;
    // Limpiar botones anteriores
    botonesMateriasDiv.innerHTML = "";
    // Crear botones de materias
    materiasPorModalidad[modalidad].forEach(materia => {
      const btn = document.createElement("button");
      btn.textContent = materia;
      btn.className = "matBtn";
      btn.setAttribute("data-materia", materia);
      btn.addEventListener("click", () => {
        usuario.materia = materia;
        mostrarMateria(materia);
        usuario.dificultad = ""; // Reset dificultad al cambiar materia
        dificultadesDiv.style.display = "block";
        generarDificultades();
        guardarDatos();
      });
      botonesMateriasDiv.appendChild(btn);
    });
    materiasDiv.style.display = "block";
  }

  // Mostrar materia seleccionada
  function mostrarMateria(materia){
    seleccionMateria.textContent = `Materia seleccionada: ${materia}`;
    if(usuario.dificultad) actualizarResumen();
  }

  // Generar botones de dificultad
  function generarDificultades(){
    botonesDificultadDiv.innerHTML = "";
    dificultades.forEach(diff => {
      const btn = document.createElement("button");
      btn.textContent = diff;
      btn.className = "difBtn";
      btn.addEventListener("click", () => {
        usuario.dificultad = diff;
        actualizarResumen();
        guardarDatos();
      });
      botonesDificultadDiv.appendChild(btn);
    });
  }

  // Actualizar resumen final
  function actualizarResumen(){
    resumenFinal.textContent = `Resumen: ${usuario.nombre} | ${usuario.modalidad} | ${usuario.materia} | ${usuario.dificultad}`;
  }

  // Guardar en localStorage
  function guardarDatos(){
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }
});
