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

// Variables de selección
let nombreUsuario = "";
let modalidadSeleccionada = "";
let materiaSeleccionada = "";
let dificultadSeleccionada = "";

// Lista de palabras prohibidas (multilenguaje)
const palabrasProhibidas = [
  // Español
  "puta","puto","mierda","imbecil","idiota","estupido","cabron","perra","culo","pendejo",
  // Inglés
  "fuck","shit","bitch","asshole","bastard","retard","slut","dick","cock",
  // Portugués
  "merda","caralho","otario","besta","idiota","puta",
  // General ofensivo
  "nazi","hitler","negro","maricon","gay","sexo","rape"
];

// Normaliza el texto y reemplaza caracteres estilo "leet speak"
function normalizarTextoAvanzado(texto) {
  let t = texto.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); // quitar acentos

  const reemplazos = { 
    "0": "o", "1": "i", "3": "e", "4": "a", "5": "s", "7": "t", "@": "a", "$": "s" 
  };
  t = t.replace(/[013457@$]/g, c => reemplazos[c]);

  t = t.replace(/[^a-z]/g, ""); // dejar solo letras
  return t;
}

// Validación avanzada de nombres
function nombreEsValidoAvanzado(nombre) {
  const limpio = normalizarTextoAvanzado(nombre);
  return !palabrasProhibidas.some(palabra => limpio.includes(palabra));
}

// Habilitar botón solo si hay texto
inputNombre.addEventListener("input", () => {
  botonListo.disabled = inputNombre.value.trim() === "";
});

// Acción al hacer clic en "Listo"
botonListo.addEventListener("click", () => {
  nombreUsuario = inputNombre.value.trim();

  if (!nombreEsValidoAvanzado(nombreUsuario)) {
    errorNombre.textContent = "⚠️ Ese nombre no está permitido. Por favor elige otro.";
    inputNombre.value = "";
    botonListo.disabled = true;
    return;
  }

  errorNombre.textContent = ""; 
  saludo.textContent = `¡Hola, ${nombreUsuario}! Bienvenido/a.`;
  modalidadDiv.style.display = "block";
  modalidadDiv.classList.add("fade-in");
  document.getElementById("ingresoNombre").style.display = "none";
  actualizarResumen();
});

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
