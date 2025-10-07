// =============================
// 📘 VARIABLES PRINCIPALES
// =============================
let nombreUsuario = "";
let modalidadSeleccionada = "";
let materiaSeleccionada = "";
let dificultadSeleccionada = "";

// =============================
// 🎯 ELEMENTOS HTML
// =============================
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
const ingresoNombreDiv = document.getElementById("ingresoNombre");

// =============================
// 🧠 LISTAS
// =============================
const materiasPorModalidad = {
  "Primaria": ["Matemáticas","Ciencias","Geografía","Español","Historia","Inglés","Arte","Educación Física"],
  "Secundaria": ["Álgebra","Física","Química","Historia Universal","Biología","Arte","Inglés"],
  "Preparatoria": ["Cálculo","Física Avanzada","Química Avanzada","Literatura","Historia Contemporánea","Filosofía","Idiomas"],
  "Universidad": ["Programación","Economía","Ingeniería","Cálculo Integral","Estadística","Diseño","Psicología"],
  "Postgrado": ["Gestión de Proyectos","Investigación Avanzada","Filosofía Aplicada","Educación Superior"]
};

const dificultades = [
  "Extremadamente Fácil","Muy Fácil","Fácil","Normal",
  "Difícil","Muy Difícil","Extremo","Imposible 💀"
];

// =============================
// 🚫 FILTRO DE NOMBRES
// =============================
const palabrasProhibidas = ["idiota","tonto","mierda","puta","fuck","ass","bitch","imbécil"];
function contienePalabrasProhibidas(texto){
  const normalizado = texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
  return palabrasProhibidas.some(p => normalizado.includes(p));
}

// =============================
// 💾 LOCALSTORAGE
// =============================
function guardarDatos(){
  const datos = { nombreUsuario, modalidadSeleccionada, materiaSeleccionada, dificultadSeleccionada };
  localStorage.setItem("estudioDatos", JSON.stringify(datos));
}

function recuperarDatos(){
  const datos = JSON.parse(localStorage.getItem("estudioDatos"));
  if(!datos) return;

  nombreUsuario = datos.nombreUsuario || "";
  modalidadSeleccionada = datos.modalidadSeleccionada || "";
  materiaSeleccionada = datos.materiaSeleccionada || "";
  dificultadSeleccionada = datos.dificultadSeleccionada || "";

  if(nombreUsuario){
    ingresoNombreDiv.style.display = "none";
    saludo.textContent = `¡Hola, ${nombreUsuario}! Bienvenido/a.`;
    modalidadDiv.style.display = "block";
  }
  if(modalidadSeleccionada){
    seleccion.textContent = `Has seleccionado: ${modalidadSeleccionada}`;
    mostrarMaterias(modalidadSeleccionada);
    materiasDiv.style.display = "block";
  }
  if(materiaSeleccionada){
    seleccionMateria.textContent = `Materia seleccionada: ${materiaSeleccionada}`;
    mostrarDificultades();
    dificultadesDiv.style.display = "block";
  }
  if(dificultadSeleccionada){
    mostrarResumen();
  }
}

// =============================
// 🔹 EVENTOS NOMBRE
// =============================
inputNombre.addEventListener("input", () => {
  botonListo.disabled = inputNombre.value.trim() === "";
});

botonListo.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();
  if(nombre === "") return;
  if(contienePalabrasProhibidas(nombre)){
    alert("Ese nombre no está permitido.");
    return;
  }
  nombreUsuario = nombre;
  saludo.textContent = `¡Hola, ${nombreUsuario}! Bienvenido/a.`;
  ingresoNombreDiv.style.display = "none";
  modalidadDiv.style.display = "block";
  guardarDatos();
});

// =============================
// 🔹 BOTONES MODALIDAD
// =============================
document.querySelectorAll(".modBtn").forEach(button => {
  button.addEventListener("click", () => {
    modalidadSeleccionada = button.textContent;
    seleccion.textContent = `Has seleccionado: ${modalidadSeleccionada}`;
    materiaSeleccionada = "";
    dificultadSeleccionada = "";
    resumenFinal.innerHTML = "";
    botonesDificultadDiv.innerHTML = "";
    guardarDatos();
    mostrarMaterias(modalidadSeleccionada);
    materiasDiv.style.display = "block";
  });
});

// =============================
// 🔹 FUNCIONES MATERIAS
// =============================
function mostrarMaterias(modalidad){
  botonesMateriasDiv.innerHTML = "";
  materiasPorModalidad[modalidad].forEach((materia,index)=>{
    const btn = document.createElement("button");
    btn.className = "matBtn fadeIn";
    btn.setAttribute("data-materia",materia);
    btn.innerHTML = `<span>${materia}</span>`;
    btn.style.animationDelay = `${index*0.1}s`;

    btn.addEventListener("click", () => {
      materiaSeleccionada = materia;
      seleccionMateria.textContent = `Materia seleccionada: ${materiaSeleccionada}`;
      dificultadSeleccionada = "";
      resumenFinal.innerHTML = "";
      botonesDificultadDiv.innerHTML = "";
      guardarDatos();
      mostrarDificultades();
    });

    botonesMateriasDiv.appendChild(btn);
  });
}

// =============================
// 🔹 FUNCIONES DIFICULTADES
// =============================
function mostrarDificultades(){
  botonesDificultadDiv.innerHTML = "";
  dificultades.forEach((dif,index)=>{
    const btn = document.createElement("button");
    btn.className = "difBtn fadeIn";
    btn.textContent = dif;
    btn.style.animationDelay = `${index*0.1}s`;

    btn.addEventListener("click", ()=>{
      dificultadSeleccionada = dif;
      guardarDatos();
      mostrarResumen();
    });

    botonesDificultadDiv.appendChild(btn);
  });
  dificultadesDiv.style.display = "block";
}

// =============================
// 🔹 FUNCIONES RESUMEN
// =============================
function mostrarResumen(){
  if(nombreUsuario && modalidadSeleccionada && materiaSeleccionada && dificultadSeleccionada){
    resumenFinal.innerHTML = `
      <div class="fadeIn" style="margin-top:20px;padding:15px;background:rgba(255,255,255,0.9);border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,0.2);max-width:500px;margin-inline:auto;">
        <h3>📘 Resumen de tu selección</h3>
        <p><strong>Nombre:</strong> ${nombreUsuario}</p>
        <p><strong>Modalidad:</strong> ${modalidadSeleccionada}</p>
        <p><strong>Materia:</strong> ${materiaSeleccionada}</p>
        <p><strong>Dificultad:</strong> ${dificultadSeleccionada}</p>
      </div>
    `;
  }
}

// =============================
// 🚀 INICIALIZAR
// =============================
recuperarDatos();
