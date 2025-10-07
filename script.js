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

let nombreUsuario = "";
let modalidadSeleccionada = "";
let materiaSeleccionada = "";
let dificultadSeleccionada = "";

const dificultades = [
  "Extremadamente Fácil","Muy Fácil","Fácil","Normal","Difícil","Muy Difícil","Extremo","Imposible 💀"
];

const materiasPorModalidad = {
  "Primaria": ["Matemáticas","Ciencias","Geografía","Español","Historia","Inglés","Arte","Educación Física"],
  "Secundaria": ["Álgebra","Física","Química","Historia Universal","Biología","Arte 2","Inglés 2"],
  "Preparatoria": ["Cálculo","Física Avanzada","Literatura","Química","Historia Moderna","Filosofía","Idiomas"],
  "Universidad": ["Programación","Economía","Ingeniería","Cálculo Integral","Estadística","Diseño","Psicología"],
  "Postgrado": ["Gestión de Proyectos","Investigación Avanzada","Filosofía Aplicada","Educación Superior"]
};

// Habilitar botón Listo cuando haya texto
inputNombre.addEventListener("input", () => {
  botonListo.disabled = inputNombre.value.trim() === "";
});

// Botón Listo
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

    // Limpiar materias y dificultades previas
    botonesMateriasDiv.innerHTML = "";
    materiaSeleccionada = "";
    dificultadSeleccionada = "";
    resumenFinal.innerHTML = "";

    // Crear botones de materias
    materiasPorModalidad[modalidadSeleccionada].forEach((materia,index)=>{
      const btn = document.createElement("button");
      btn.classList.add("matBtn","fadeIn");

      // Asegurarse de que data-materia coincida con CSS
      btn.setAttribute("data-materia", materia);

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

// Mostrar resumen y botón Comenzar
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

  // Evento del botón Comenzar
  document.getElementById("botonComenzar").addEventListener("click", () => {
    iniciarContenido();
  });
}

// Función para iniciar contenido después de Comenzar
function iniciarContenido() {
  // Limpiar todo
  modalidadDiv.style.display = "none";
  materiasDiv.style.display = "none";
  dificultadesDiv.style.display = "none";
  resumenFinal.innerHTML = "";

  // Mostrar bienvenida en esquina y detalles
  const contenedor = document.createElement("div");
  contenedor.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:10px;background:rgba(255,255,255,0.9);border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,0.2);margin-bottom:20px;">
      <div>¡Bienvenid@ ${nombreUsuario}!</div>
      <div>
        Modalidad: ${modalidadSeleccionada} | Materia: ${materiaSeleccionada} | Dificultad: ${dificultadSeleccionada}
        <button id="verContenido" style="margin-left:10px;">Ver contenido</button>
      </div>
    </div>
    <div id="temasDiv"></div>
  `;
  document.body.appendChild(contenedor);

  document.getElementById("verContenido").addEventListener("click", () => {
    mostrarTemas();
  });
}

// Mostrar temas según modalidad, materia y dificultad
function mostrarTemas() {
  const temasDiv = document.getElementById("temasDiv");
  temasDiv.innerHTML = "";

  // Ejemplo de temas básicos según materia
  const temasPorMateria = {
    "Matemáticas": ["Suma","Resta","Multiplicación","División"],
    "Ciencias": ["Animales","Plantas","Cuerpo Humano"],
    "Geografía": ["Continentes","Países","Capitales"],
    "Español": ["Ortografía","Gramática","Redacción"],
    "Historia": ["Historia Antigua","Edad Media","Historia Moderna"],
    "Inglés": ["Alfabeto","Números","Colores","Frases básicas"],
    "Arte": ["Dibujo","Pintura","Música"],
    "Educación Física": ["Ejercicios","Deportes","Hábitos saludables"],
    "Álgebra": ["Ecuaciones","Polinomios","Inecuaciones"],
    "Física": ["Cinemática","Dinámica","Electricidad"],
    "Química": ["Elementos","Compuestos","Reacciones químicas"],
    "Historia Universal": ["Antiguo Egipto","Grecia","Roma"],
    "Biología": ["Células","Genética","Ecosistemas"],
    "Arte 2": ["Escultura","Fotografía","Historia del Arte"],
    "Inglés 2": ["Gramática avanzada","Lectura"],
    "Cálculo": ["Límites","Derivadas","Integrales"],
    "Física Avanzada": ["Termodinámica","Ondas","Electromagnetismo"],
    "Literatura": ["Poesía","Novela","Teatro"],
    "Historia Moderna": ["Revolución Francesa","Revolución Industrial","Guerras Mundiales"],
    "Filosofía": ["Lógica","Ética","Metafísica"],
    "Idiomas": ["Francés","Alemán","Chino"],
    "Programación": ["Variables","Funciones","Bucles"],
    "Economía": ["Microeconomía","Macroeconomía","Finanzas"],
    "Ingeniería": ["Mecánica","Electrónica","Sistemas"],
    "Cálculo Integral": ["Integrales definidas","Integrales indefinidas"],
    "Estadística": ["Probabilidad","Estadística descriptiva","Estadística inferencial"],
    "Diseño": ["Diseño gráfico","Diseño de interiores","Tipografía"],
    "Psicología": ["Psicología general","Psicología del desarrollo"],
    "Gestión de Proyectos": ["Planificación","Ejecución","Control"],
    "Investigación Avanzada": ["Metodología","Recopilación de datos","Análisis de resultados"],
    "Filosofía Aplicada": ["Ética aplicada","Lógica aplicada"],
    "Educación Superior": ["Métodos de estudio","Técnicas de investigación"]
  };

  const temas = temasPorMateria[materiaSeleccionada] || ["Tema 1","Tema 2"];
  temas.forEach((tema,index) => {
    const div = document.createElement("div");
    div.style.marginBottom = "10px";
    div.innerHTML = `
      <strong>${tema}</strong>
      <button class="saberMasBtn" data-tema="${tema}" style="margin-left:10px;">Saber más</button>
      <div class="infoTema" id="info-${index}" style="display:none;margin-top:5px;padding:5px;background:rgba(220,220,220,0.3);border-radius:8px;">
        Información sobre ${tema}...
      </div>
    `;
    temasDiv.appendChild(div);

    div.querySelector(".saberMasBtn").addEventListener("click", () => {
      const infoDiv = div.querySelector(".infoTema");
      infoDiv.style.display = infoDiv.style.display === "none" ? "block" : "none";
    });
  });

  // Botón para empezar test
  const btnTest = document.createElement("button");
  btnTest.textContent = "Empezar test";
  btnTest.style.marginTop = "20px";
  btnTest.addEventListener("click", () => {
    alert("Aquí se iniciaría el test dinámico según temas y dificultad.");
  });
  temasDiv.appendChild(btnTest);
}
