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
  "Secundaria": ["Álgebra","Física","Química","Historia Universal","Biología","Arte","Inglés"],
  "Preparatoria": ["Cálculo","Física Avanzada","Literatura","Química","Historia Moderna","Filosofía","Idiomas"],
  "Universidad": ["Programación","Economía","Ingeniería","Cálculo Integral","Estadística","Diseño","Psicología"],
  "Postgrado": ["Gestión de Proyectos","Investigación Avanzada","Filosofía Aplicada","Educación Superior"]
};

inputNombre.addEventListener("input", () => {
  botonListo.disabled = inputNombre.value.trim() === "";
});

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

const botonesModalidad = document.querySelectorAll(".modBtn");
botonesModalidad.forEach(button => {
  button.addEventListener("click", () => {
    modalidadSeleccionada = button.textContent;
    seleccion.textContent = `Has seleccionado: ${modalidadSeleccionada}`;
    seleccion.classList.add("fadeIn");

    botonesMateriasDiv.innerHTML = "";
    materiaSeleccionada = "";
    dificultadSeleccionada = "";
    resumenFinal.innerHTML = "";

    materiasPorModalidad[modalidadSeleccionada].forEach((materia,index)=>{
      const btn = document.createElement("button");
      btn.classList.add("matBtn","fadeIn");
      btn.setAttribute("data-materia",materia);
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

function mostrarResumen() {
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
