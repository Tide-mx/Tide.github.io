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
const errorNombre = document.getElementById("errorNombre");
const avisoPestana = document.getElementById("avisoPestana");

// Variables
let nombreUsuario = "";
let modalidadSeleccionada = "";
let materiaSeleccionada = "";
let dificultadSeleccionada = "";

// Palabras prohibidas
const palabrasProhibidas = ["puta","mierda","fuck","shit","bitch","sexo","rape"];

// Normalizar
function normalizarTexto(texto) {
  return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");
}

function nombreEsValido(nombre) {
  const limpio = normalizarTexto(nombre);
  return !palabrasProhibidas.some(p => limpio.includes(p));
}

// Habilitar botón
inputNombre.addEventListener("input", () => {
  botonListo.disabled = inputNombre.value.trim() === "";
});

// Guardar en Firebase
async function guardarDatos() {
  if (!nombreUsuario) return;
  const userId = nombreUsuario.replace(/\s+/g, "_"); // ID simple
  await db.collection("usuarios").doc(userId).set({
    nombre: nombreUsuario,
    modalidad: modalidadSeleccionada,
    materia: materiaSeleccionada,
    dificultad: dificultadSeleccionada
  });
}

// Cargar datos
async function cargarDatos() {
  const userId = inputNombre.value.trim().replace(/\s+/g, "_");
  const docSnap = await db.collection("usuarios").doc(userId).get();
  if (docSnap.exists) {
    const data = docSnap.data();
    nombreUsuario = data.nombre || "";
    modalidadSeleccionada = data.modalidad || "";
    materiaSeleccionada = data.materia || "";
    dificultadSeleccionada = data.dificultad || "";

    saludo.textContent = `¡Hola, ${nombreUsuario}! Bienvenido/a.`;
    document.getElementById("ingresoNombre").style.display = "none";
    if (modalidadSeleccionada) {
      modalidadDiv.style.display = "block";
      seleccion.textContent = `Has seleccionado: ${modalidadSeleccionada}`;
    }
    if (materiaSeleccionada) seleccionMateria.textContent = `Materia seleccionada: ${materiaSeleccionada}`;
    if (dificultadSeleccionada) seleccionDificultad.textContent = `Dificultad seleccionada: ${dificultadSeleccionada}`;
    actualizarResumen();
  }
}

// Botón listo
botonListo.addEventListener("click", async () => {
  nombreUsuario = inputNombre.value.trim();
  if (!nombreEsValido(nombreUsuario)) {
    errorNombre.textContent = "⚠️ Ese nombre no está permitido.";
    inputNombre.value = "";
    botonListo.disabled = true;
    return;
  }
  errorNombre.textContent = "";
  saludo.textContent = `¡Hola, ${nombreUsuario}! Bienvenido/a.`;
  document.getElementById("ingresoNombre").style.display = "none";
  modalidadDiv.style.display = "block";
  await cargarDatos();
  guardarDatos();
});

// --- Aquí va todo tu código de modalidades, materias, dificultades ---
// Cada vez que el usuario elige algo, llamar guardarDatos()

// Definir materias por modalidad
const materiasPorModalidad = {
  "Primaria": ["Matemáticas Básicas", "Lengua", "Ciencias Naturales", "Historia", "Arte", "Educación Física"],
  "Secundaria": ["Matemáticas", "Lengua y Literatura", "Biología", "Química", "Historia Universal", "Arte", "Tecnología"],
  "Preparatoria": ["Álgebra", "Física", "Química Avanzada", "Literatura", "Historia Contemporánea", "Filosofía", "Idiomas"],
  "Universidad": ["Cálculo", "Física Moderna", "Química Orgánica", "Literatura Universal", "Historia Moderna", "Programación", "Economía"],
  "Postgrado": ["Investigación Avanzada", "Estadística Avanzada", "Filosofía Aplicada", "Gestión de Proyectos", "Especialización Profesional"]
};

// Dificultades
const dificultades = [
  "Extremadamente Fácil","Muy Fácil","Fácil","Normal","Difícil","Muy Difícil","Extremadamente Difícil","Imposible 💀"
];

// Botones de modalidad
const botonesModalidad = document.querySelectorAll(".modBtn");
botonesModalidad.forEach((button, index) => {
  button.style.animationDelay = `${index * 0.1}s`; 
  button.classList.add("fade-in");
  button.addEventListener("click", () => {
    modalidadSeleccionada = button.textContent;
    seleccion.textContent = `Has seleccionado: ${modalidadSeleccionada}`;

    materiaSeleccionada = "";
    dificultadSeleccionada = "";
    seleccionMateria.textContent = "";
    seleccionDificultad.textContent = "";
    botonesMateriasDiv.innerHTML = "";
    botonesDificultadDiv.innerHTML = "";
    dificultadesDiv.style.display = "none";

    materiasPorModalidad[modalidadSeleccionada].forEach((materia,i)=>{
      const btn=document.createElement("button");
      btn.textContent=materia;
      btn.className="matBtn fade-in";
      btn.style.animationDelay=`${i*0.1}s`;
      btn.addEventListener("click",()=>{
        materiaSeleccionada=materia;
        seleccionMateria.textContent=`Materia seleccionada: ${materia}`;
        mostrarDificultades();
        actualizarResumen();
      });
      botonesMateriasDiv.appendChild(btn);
    });

    materiasDiv.style.display="block";
    materiasDiv.classList.add("fade-in");
    actualizarResumen();
  });
});

// Mostrar dificultades
function mostrarDificultades(){
  botonesDificultadDiv.innerHTML="";
  dificultades.forEach((dif,i)=>{
    const btn=document.createElement("button");
    btn.textContent=dif;
    btn.className="difBtn fade-in";
    btn.style.animationDelay=`${i*0.1}s`;
    btn.addEventListener("click",()=>{
      dificultadSeleccionada=dif;
      seleccionDificultad.textContent=`Dificultad seleccionada: ${dif}`;
      actualizarResumen();
    });
    botonesDificultadDiv.appendChild(btn);
  });
  dificultadesDiv.style.display="block";
  dificultadesDiv.classList.add("fade-in");
}

// Actualizar resumen
function actualizarResumen(){
  resumenTexto.innerHTML=`
    <li>✅ <span>Nombre:</span> ${nombreUsuario || "—"}</li>
    <li>🎓 <span>Modalidad:</span> ${modalidadSeleccionada || "—"}</li>
    <li>📖 <span>Materia:</span> ${materiaSeleccionada || "—"}</li>
    <li>🔥 <span>Dificultad:</span> ${dificultadSeleccionada || "—"}</li>
  `;
  if(nombreUsuario||modalidadSeleccionada||materiaSeleccionada||dificultadSeleccionada){
    resumenFinalDiv.classList.add("show");
  }else{
    resumenFinalDiv.classList.remove("show");
  }
}

// Reiniciar todo
reiniciarBtn.addEventListener("click", () => {
  nombreUsuario = "";
  modalidadSeleccionada = "";
  materiaSeleccionada = "";
  dificultadSeleccionada = "";

  saludo.textContent = "";
  seleccion.textContent = "";
  seleccionMateria.textContent = "";
  seleccionDificultad.textContent = "";
  inputNombre.value = "";
  errorNombre.textContent = "";

  document.getElementById("ingresoNombre").style.display = "block";
  modalidadDiv.style.display = "none";
  materiasDiv.style.display = "none";
  dificultadesDiv.style.display = "none";
  resumenFinalDiv.classList.remove("show");
  botonesMateriasDiv.innerHTML = "";
  botonesDificultadDiv.innerHTML = "";
  botonListo.disabled = true;
  resumenTexto.innerHTML = "";
});
const avisoPestana = document.getElementById("avisoPestana");

// Detecta cambio de visibilidad de la pestaña
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    // Pestaña inactiva
    avisoPestana.style.display = "block";
    setTimeout(() => {
      avisoPestana.classList.add("show");
    }, 50);
  } else {
    // Pestaña activa
    avisoPestana.classList.remove("show");
    setTimeout(() => {
      avisoPestana.style.display = "none";
    }, 500); // coincide con la transición
  }
});

// También se puede usar focus/blur de ventana
window.addEventListener("blur", () => {
  avisoPestana.style.display = "block";
  setTimeout(() => avisoPestana.classList.add("show"), 50);
});

window.addEventListener("focus", () => {
  avisoPestana.classList.remove("show");
  setTimeout(() => avisoPestana.style.display = "none", 500);
});
