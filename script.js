// -------------------- script.js --------------------

// Elementos DOM
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
const inicioContenidoDiv = document.getElementById("contenidoTest");
const temasDiv = document.getElementById("temasDiv");
const testDiv = document.getElementById("testDiv");

// Variables
let nombreUsuario = "";
let modalidadSeleccionada = "";
let materiaSeleccionada = "";
let dificultadSeleccionada = "";
let preguntasTest = [];
let preguntasRespondidas = [];

// -------------------- Habilitar botón listo --------------------
inputNombre.addEventListener("input", () => {
  botonListo.disabled = inputNombre.value.trim() === "";
});

// -------------------- Click en Listo --------------------
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

// -------------------- Botones de modalidad --------------------
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

    contenidoMaterias[modalidadSeleccionada].forEach((_, index) => {
      const materia = Object.keys(contenidoMaterias[modalidadSeleccionada])[index];
      const btn = document.createElement("button");
      btn.classList.add("matBtn", "fadeIn");
      btn.setAttribute("data-materia", materia);
      btn.textContent = materia;
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

// -------------------- Mostrar dificultades --------------------
function mostrarDificultades() {
  botonesDificultadDiv.innerHTML = "";
  const dificultades = [
    "Extremadamente Fácil","Muy Fácil","Fácil","Normal","Difícil","Muy Difícil","Extremo","Imposible 💀"
  ];
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

// -------------------- Mostrar resumen con botón Comenzar --------------------
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

  document.getElementById("botonComenzar").addEventListener("click", () => {
    iniciarContenido();
  });
}

// -------------------- Iniciar sección de contenidos --------------------
function iniciarContenido() {
  modalidadDiv.style.display = "none";
  materiasDiv.style.display = "none";
  dificultadesDiv.style.display = "none";
  resumenFinal.style.display = "none";
  seleccion.textContent = "";

  inicioContenidoDiv.style.display = "block";
  inicioContenidoDiv.innerHTML = `
    <p>¡Bienvenid@ ${nombreUsuario}!</p>
    <p>Modalidad: ${modalidadSeleccionada}</p>
    <p>Materia: ${materiaSeleccionada}</p>
    <p>Dificultad: ${dificultadSeleccionada}</p>
    <div id="temasDiv"></div>
    <div id="testDiv" style="display:none;"></div>
    <div id="resultadosDiv" style="display:none;"></div>
  `;

  mostrarTemasInterfaz(modalidadSeleccionada, materiaSeleccionada, dificultadSeleccionada);
}

// -------------------- Mostrar temas e iniciar test --------------------
function mostrarTemasInterfaz(modalidad, materia, dificultad){
  const temasDiv = document.getElementById("temasDiv");
  temasDiv.innerHTML = "";

  const temas = obtenerTemasPorDificultad(modalidad, materia, dificultad);
  temas.forEach(t=>{
    const div = document.createElement("div");
    div.classList.add("temaItem");
    div.innerHTML = `
      <span>${t}</span>
      <button class="saberMasBtn" data-tema="${t}">Saber más</button>
    `;
    temasDiv.appendChild(div);
  });

  // Saber más
  document.querySelectorAll(".saberMasBtn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const tema = btn.getAttribute("data-tema");
      alert(getExplicacion(modalidad, materia, tema));
    });
  });

  // Botón para iniciar test
  const btnTest = document.createElement("button");
  btnTest.textContent = "Empezar Test";
  btnTest.style.marginTop = "15px";
  temasDiv.appendChild(btnTest);

  btnTest.addEventListener("click", ()=>{
    preguntasTest = generarPreguntas(modalidad, materia, dificultad, 5);
    preguntasRespondidas = Array(preguntasTest.length).fill(false);
    mostrarTestAvanzado();
  });
}

// -------------------- Test avanzado --------------------
function mostrarTestAvanzado(){
  const testDiv = document.getElementById("testDiv");
  testDiv.style.display = "block";
  testDiv.innerHTML = "";

  preguntasTest.forEach((p, idx)=>{
    const qDiv = document.createElement("div");
    qDiv.style.margin = "10px 0";
    qDiv.innerHTML = `<p>${idx+1}. ${p.pregunta}</p>`;
    p.opciones.forEach(op=>{
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `pregunta${idx}`;
      radio.value = op;
      const label = document.createElement("label");
      label.textContent = op;
      label.style.marginLeft = "5px";
      radio.addEventListener("click", ()=>{
        preguntasRespondidas[idx] = true; // Bloquear pregunta
        qDiv.querySelectorAll("input").forEach(r=>r.disabled = true);
      });
      qDiv.appendChild(radio);
      qDiv.appendChild(label);
      qDiv.appendChild(document.createElement("br"));
    });
    testDiv.appendChild(qDiv);
  });

  const finalizarBtn = document.createElement("button");
  finalizarBtn.textContent = "Finalizar Test";
  finalizarBtn.style.marginTop = "15px";
  testDiv.appendChild(finalizarBtn);

  finalizarBtn.addEventListener("click", mostrarResultadosTest);
}

// -------------------- Resultados --------------------
function mostrarResultadosTest(){
  if(preguntasRespondidas.includes(false)){
    alert("¡Faltan preguntas por responder, verifica!");
    return;
  }

  const total = preguntasTest.length;
  let correctas = 0;
  preguntasTest.forEach((p, idx)=>{
    const radios = document.getElementsByName(`pregunta${idx}`);
    radios.forEach(r=>{
      if(r.checked && r.value === p.correcta) correctas++;
    });
  });
  const incorrectas = total - correctas;
  const promedio = Math.round((correctas/total)*100);

  const resultadosDiv = document.getElementById("resultadosDiv");
  resultadosDiv.style.display = "block";
  resultadosDiv.innerHTML = "";

  // Mensaje arriba
  let mensaje = "";
  if(promedio >= 90) mensaje = "¡Felicidades!";
  else if(promedio >= 70) mensaje = "¡Lo hiciste bien!";
  else if(promedio >= 40) mensaje = "¿Saliste mal?";
  else mensaje = "¡Inténtalo nuevamente!";
  resultadosDiv.innerHTML += `<h3>${mensaje}</h3>`;

  // Círculo de promedio
  const canvas = document.createElement("canvas");
  canvas.width = 150;
  canvas.height = 150;
  resultadosDiv.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  // Fondo gris
  ctx.beginPath();
  ctx.arc(75,75,70,0,2*Math.PI);
  ctx.fillStyle = "#ddd";
  ctx.fill();

  // Porcentaje azul
  ctx.beginPath();
  ctx.moveTo(75,75);
  ctx.arc(75,75,70,-0.5*Math.PI,(-0.5+2*promedio/100)*Math.PI);
  ctx.fillStyle = "#3498db";
  ctx.fill();

  // Texto central
  ctx.fillStyle = "#fff";
  ctx.font = "20px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(`${promedio}%`, 75, 75);

  // Cantidad de correctas e incorrectas
  resultadosDiv.innerHTML += `<div style="display:flex;justify-content:space-between;margin-top:10px;">
    <span>Incorrectas: ${incorrectas}</span>
    <span>Correctas: ${correctas}</span>
  </div>`;

  // Botones ATRAS y REINTENTAR
  const btnAtras = document.createElement("button");
  btnAtras.textContent = "ATRÁS";
  btnAtras.style.marginRight = "10px";
  btnAtras.addEventListener("click", ()=>{
    mostrarTemasInterfaz(modalidadSeleccionada, materiaSeleccionada, dificultadSeleccionada);
    resultadosDiv.style.display = "none";

    // Añadir botón Cambiar materia
    const btnCambiar = document.createElement("button");
    btnCambiar.textContent = "Cambiar materia";
    btnCambiar.addEventListener("click", ()=>{
      materiasDiv.style.display = "block";
      botonesMateriasDiv.innerHTML = "";
      Object.keys(contenidoMaterias[modalidadSeleccionada]).forEach((mat,index)=>{
        const btn = document.createElement("button");
        btn.textContent = mat;
        btn.classList.add("matBtn");
        btn.addEventListener("click", ()=>{
          materiaSeleccionada = mat;
          mostrarTemasInterfaz(modalidadSeleccionada, materiaSeleccionada, dificultadSeleccionada);
          materiasDiv.style.display = "none";
        });
        botonesMateriasDiv.appendChild(btn);
      });
    });
    temasDiv.appendChild(btnCambiar);
  });

  const btnReintentar = document.createElement("button");
  btnReintentar.textContent = "REINTENTAR";
  btnReintentar.addEventListener("click", ()=>{
    preguntasTest = generarPreguntas(modalidadSeleccionada, materiaSeleccionada, dificultadSeleccionada, 5);
    preguntasRespondidas = Array(preguntasTest.length).fill(false);
    mostrarTestAvanzado();
    resultadosDiv.style.display = "none";
  });

  const botonesDiv = document.createElement("div");
  botonesDiv.style.marginTop = "15px";
  botonesDiv.appendChild(btnAtras);
  botonesDiv.appendChild(btnReintentar);
  resultadosDiv.appendChild(botonesDiv);

  testDiv.style.display = "none";
}

