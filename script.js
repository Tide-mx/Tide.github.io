document.addEventListener("DOMContentLoaded", () => {
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
      saludo.textContent = `¡Hola, ${usuario.nombre}! Bienvenido/a.`;
      inputNombre.value = usuario.nombre;
      botonListo.disabled = false;
      document.getElementById("ingresoNombre").style.display = "none";
      
      // 💡 CORRECCIÓN VISIBILIDAD: Modalidad debe aparecer
      modalidadDiv.style.display = "block";
      modalidadDiv.classList.add("fadeIn");
    }
    
    if(usuario.modalidad) {
        mostrarModalidad(usuario.modalidad);
        // Resaltar el botón de modalidad
        const btnMod = Array.from(botonesModalidad).find(b => b.textContent === usuario.modalidad);
        if (btnMod) btnMod.classList.add("seleccionado");
    }

    if(usuario.materia) {
        mostrarMateria(usuario.materia);
        // Materias debe ser visible
        materiasDiv.classList.add("fadeIn"); 
    }
    
    if(usuario.dificultad) {
        generarDificultades();
        // Dificultades debe ser visible
        dificultadesDiv.style.display = "block";
        dificultadesDiv.classList.add("fadeIn");
        actualizarResumen();
    }
  }
  // -------------------------------

  inputNombre.addEventListener("input", () => {
    botonListo.disabled = inputNombre.value.trim() === "";
  });

  botonListo.addEventListener("click", () => {
    usuario.nombre = inputNombre.value.trim();
    saludo.textContent = `¡Hola, ${usuario.nombre}! Bienvenido/a.`;
    document.getElementById("ingresoNombre").style.display = "none";
    
    modalidadDiv.style.display = "block";
    // 💡 CORRECCIÓN VISIBILIDAD: Añadir la clase para que aparezca
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

  const dificultades = ["Extremadamente Fácil","Muy Fácil","Fácil","Normal","Difícil","Muy Difícil","Extremadamente Difícil"];

  botonesModalidad.forEach(button => {
    button.addEventListener("click", () => {
      // Limpiar selección previa
      botonesModalidad.forEach(btn => btn.classList.remove("seleccionado"));
      // Aplicar selección actual
      button.classList.add("seleccionado");
      
      usuario.modalidad = button.textContent;
      mostrarModalidad(usuario.modalidad);
      usuario.materia = "";
      usuario.dificultad = "";
      actualizarResumen(); // Limpiar resumen al cambiar modalidad
      guardarDatos();
    });
  });

  function mostrarModalidad(modalidad){
    seleccion.textContent = `Has seleccionado: ${modalidad}`;
    botonesMateriasDiv.innerHTML = "";
    
    const materiaGuardada = usuario.materia;

    materiasPorModalidad[modalidad].forEach(materia => {
      const btn = document.createElement("button");
      btn.className = "matBtn";
      btn.setAttribute("data-materia", materia);
      
      // Aplicar estilo si esta materia es la que ya estaba seleccionada
      if (materia === materiaGuardada) {
          btn.classList.add("seleccionado");
      }

      const span = document.createElement("span");
      span.textContent = materia;
      btn.appendChild(span);

      btn.addEventListener("click", (e) => {
        // Limpiar selección previa de todas las materias
        document.querySelectorAll(".matBtn").forEach(b => b.classList.remove("seleccionado"));
        // Aplicar selección actual
        e.currentTarget.classList.add("seleccionado");
        
        usuario.materia = materia;
        mostrarMateria(materia);
        usuario.dificultad = "";
        
        dificultadesDiv.style.display = "block";
        // 💡 CORRECCIÓN VISIBILIDAD: Dificultades debe aparecer
        dificultadesDiv.classList.add("fadeIn");

        generarDificultades();
        actualizarResumen(); // Limpiar dificultad del resumen
        guardarDatos();
      });

      botonesMateriasDiv.appendChild(btn);
    });

    materiasDiv.style.display = "block";
    // 💡 CORRECCIÓN VISIBILIDAD: Materias debe aparecer
    materiasDiv.classList.add("fadeIn");
  }

  function mostrarMateria(materia){
    seleccionMateria.textContent = `Materia seleccionada: ${materia}`;
    if(usuario.dificultad) actualizarResumen();
  }

  function generarDificultades(){
    botonesDificultadDiv.innerHTML = "";
    dificultades.forEach(diff => {
      const btn = document.createElement("button");
      btn.textContent = diff;
      btn.className = "difBtn";
      
      // Aplicar estilo si esta dificultad es la que ya estaba seleccionada
      if (diff === usuario.dificultad) {
          btn.classList.add("seleccionado");
      }
      
      btn.addEventListener("click", (e) => {
        // Limpiar selección previa
        document.querySelectorAll(".difBtn").forEach(b => b.classList.remove("seleccionado"));
        // Aplicar selección actual
        e.currentTarget.classList.add("seleccionado");

        usuario.dificultad = diff;
        actualizarResumen();
        guardarDatos();
      });
      botonesDificultadDiv.appendChild(btn);
    });
  }

  function actualizarResumen(){
    resumenFinal.textContent = `Resumen: ${usuario.nombre} | ${usuario.modalidad} | ${usuario.materia} | ${usuario.dificultad}`;
  }

  // 💡 FUNCIÓN FALTANTE: Guarda el objeto usuario en localStorage
  function guardarDatos(){
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }
});
