document.addEventListener("DOMContentLoaded", () => {
  const inputNombre = document.getElementById("nombre");
  const botonListo = document.getElementById("botonListo");
  const saludo = document.getElementById("saludo");
  const ingresoNombreDiv = document.getElementById("ingresoNombre");
  const modalidadDiv = document.getElementById("modalidad");
  const seleccion = document.getElementById("seleccion");
  const materiasDiv = document.getElementById("materias");
  const botonesMateriasDiv = document.getElementById("botonesMaterias");
  const seleccionMateria = document.getElementById("seleccionMateria");
  const dificultadesDiv = document.getElementById("dificultades");
  const botonesDificultadDiv = document.getElementById("botonesDificultad");
  const resumenFinal = document.getElementById("resumenFinal");

  let usuario = {
    nombre: "",
    modalidad: "",
    materia: "",
    dificultad: ""
  };

  const botonesModalidad = document.querySelectorAll(".modBtn");

  // --- Lógica de Carga Inicial ---
  if(localStorage.getItem("usuario")){
    usuario = JSON.parse(localStorage.getItem("usuario"));
    
    if(usuario.nombre){
      ingresoNombreDiv.style.display = "none";
      saludo.textContent = `¡Hola, ${usuario.nombre}! Por favor, continúa tu sesión.`;
      
      modalidadDiv.style.display = "block";
      modalidadDiv.classList.add("fadeIn");
    }
    
    if(usuario.modalidad) {
        mostrarModalidad(usuario.modalidad);
        const btnMod = Array.from(botonesModalidad).find(b => b.textContent === usuario.modalidad);
        if (btnMod) btnMod.classList.add("seleccionado");
    }

    if(usuario.materia) {
        mostrarMateria(usuario.materia);
        materiasDiv.classList.add("fadeIn"); 
    }
    
    if(usuario.dificultad) {
        generarDificultades();
        dificultadesDiv.style.display = "block";
        dificultadesDiv.classList.add("fadeIn");
        actualizarResumen();
    }
  }
  // -------------------------------

  inputNombre.addEventListener("input", () => {
    botonListo.disabled = inputNombre.value.trim() === "";
  });

  // --- Evento: Listo (Paso 1 completado) ---
  botonListo.addEventListener("click", () => {
    usuario.nombre = inputNombre.value.trim();
    
    // Animación de ocultar/mostrar
    ingresoNombreDiv.style.display = "none"; 
    
    saludo.textContent = `¡Hola, ${usuario.nombre}! Bienvenido/a.`;
    
    modalidadDiv.style.display = "block";
    modalidadDiv.classList.add("fadeIn");
    
    guardarDatos();
  });

  const materiasPorModalidad = {
    "Primaria": ["Matemáticas","Español","Ciencias","Historia","Arte","Educación Física","Inglés"],
    "Secundaria": ["Matemáticas","Lengua y Literatura","Biología","Química","Historia Universal","Arte","Tecnología","Inglés II"],
    "Preparatoria": ["Álgebra","Física","Química Avanzada","Literatura","Historia Avanzada","Filosofía","Idiomas","Inglés III"],
    "Universidad": ["Cálculo","Física Avanzada","Química","Literatura Universal","Historia Moderna","Programación","Economía","Ingeniería","Diseño","Psicología"],
    "Postgrado": ["Investigación Avanzada","Estadística","Filosofía Aplicada","Gestión de Proyectos","Educación Superior"]
  };

  const dificultades = [
    "Extremadamente Fácil", "Muy Fácil", "Fácil", 
    "Normal", 
    "Difícil", "Muy Difícil", 
    "Extremadamente Difícil" // El CSS maneja estos colores
  ];

  // --- Evento: Modalidad seleccionada (Paso 2 completado) ---
  botonesModalidad.forEach(button => {
    button.addEventListener("click", () => {
      // Estilo
      botonesModalidad.forEach(btn => btn.classList.remove("seleccionado"));
      button.classList.add("seleccionado");
      
      // Lógica
      usuario.modalidad = button.textContent;
      usuario.materia = "";
      usuario.dificultad = "";
      actualizarResumen();
      
      mostrarModalidad(usuario.modalidad);
      
      guardarDatos();
    });
  });

  function mostrarModalidad(modalidad){
    seleccion.textContent = `Modalidad seleccionada: ${modalidad}`;
    botonesMateriasDiv.innerHTML = "";
    
    const materiaGuardada = usuario.materia;

    materiasPorModalidad[modalidad].forEach(materia => {
      const btn = document.createElement("button");
      btn.className = "matBtn";
      btn.setAttribute("data-materia", materia);
      
      if (materia === materiaGuardada) {
          btn.classList.add("seleccionado");
      }

      const span = document.createElement("span");
      span.textContent = materia;
      btn.appendChild(span);

      // --- Evento: Materia seleccionada (Paso 3 completado) ---
      btn.addEventListener("click", (e) => {
        // Estilo
        document.querySelectorAll(".matBtn").forEach(b => b.classList.remove("seleccionado"));
        e.currentTarget.classList.add("seleccionado");
        
        // Lógica
        usuario.materia = materia;
        usuario.dificultad = "";
        actualizarResumen(); 

        mostrarMateria(materia);
        
        dificultadesDiv.style.display = "block";
        dificultadesDiv.classList.add("fadeIn");

        generarDificultades();
        guardarDatos();
      });

      botonesMateriasDiv.appendChild(btn);
    });

    // Mostrar materias con animación
    materiasDiv.style.display = "block";
    materiasDiv.classList.add("fadeIn");
  }

  function mostrarMateria(materia){
    seleccionMateria.textContent = `Materia seleccionada: ${materia}`;
  }

  function generarDificultades(){
    botonesDificultadDiv.innerHTML = "";
    dificultades.forEach(diff => {
      const btn = document.createElement("button");
      btn.textContent = diff;
      btn.className = "difBtn";
      btn.setAttribute("data-dificultad", diff); // Necesario para el CSS temático
      
      if (diff === usuario.dificultad) {
          btn.classList.add("seleccionado");
      }
      
      // --- Evento: Dificultad seleccionada (Paso 4 completado) ---
      btn.addEventListener("click", (e) => {
        // Estilo
        document.querySelectorAll(".difBtn").forEach(b => b.classList.remove("seleccionado"));
        e.currentTarget.classList.add("seleccionado");

        // Lógica
        usuario.dificultad = diff;
        actualizarResumen();
        guardarDatos();
      });
      botonesDificultadDiv.appendChild(btn);
    });
  }

  function actualizarResumen(){
    resumenFinal.textContent = `${usuario.nombre} | ${usuario.modalidad} | ${usuario.materia} | Nivel: ${usuario.dificultad}`;
  }

  function guardarDatos(){
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }
});
