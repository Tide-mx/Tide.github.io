// Referencias
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

// Pantalla de estudio
const pantallaEstudio = document.getElementById("pantallaEstudio");
const bienvenida = document.getElementById("bienvenida");
const verContenidoBtn = document.getElementById("verContenidoBtn");
const contenidoTemasDiv = document.getElementById("contenidoTemas");
const empezarTestBtn = document.getElementById("empezarTestBtn");
const testArea = document.getElementById("testArea");

let nombreUsuario = "", modalidadSeleccionada = "", materiaSeleccionada = "", dificultadSeleccionada = "";

// Dificultades
const dificultades = [
  "Extremadamente Fácil","Muy Fácil","Fácil","Normal","Difícil","Muy Difícil","Extremo","Imposible 💀"
];

// Eventos iniciales
inputNombre.addEventListener("input", ()=>{ botonListo.disabled = inputNombre.value.trim()===""; });

botonListo.addEventListener("click", ()=>{
  nombreUsuario = inputNombre.value.trim();
  const palabrasBloqueadas = ["tonto","idiota","puto","fuck","shit","mierda"];
  if (palabrasBloqueadas.some(p=>nombreUsuario.toLowerCase().includes(p))){
    alert("⚠️ Ese nombre no está permitido."); return;
  }
  saludo.textContent = `¡Hola, ${nombreUsuario}! Bienvenido/a.`;
  saludo.classList.add("fadeIn");
  document.getElementById("ingresoNombre").style.display="none";
  modalidadDiv.style.display="block";
  modalidadDiv.classList.add("fadeIn");
});

// Botones modalidad
document.querySelectorAll(".modBtn").forEach(button=>{
  button.addEventListener("click", ()=>{
    modalidadSeleccionada = button.textContent;
    seleccion.textContent = `Has seleccionado: ${modalidadSeleccionada}`;
    seleccion.classList.add("fadeIn");

    botonesMateriasDiv.innerHTML = ""; materiaSeleccionada=""; dificultadSeleccionada="";
    resumenFinal.innerHTML=""; materiasDiv.style.display="block";

    materiasPorModalidad[modalidadSeleccionada].forEach((mat,index)=>{
      const btn = document.createElement("button");
      btn.classList.add("matBtn","fadeIn"); btn.innerHTML=`<span>${mat}</span>`;
      btn.setAttribute("data-materia",mat); btn.style.animationDelay=`${index*0.1}s`;
      btn.addEventListener("click", ()=>{
        materiaSeleccionada = mat;
        seleccionMateria.textContent=`Materia seleccionada: ${materiaSeleccionada}`;
        seleccionMateria.classList.add("fadeIn"); 
        dificultadSeleccionada=""; botonesDificultadDiv.innerHTML=""; resumenFinal.innerHTML="";
        mostrarDificultades();
      });
      botonesMateriasDiv.appendChild(btn);
    });
  });
});

function mostrarDificultades(){
  botonesDificultadDiv.innerHTML="";
  dificultades.forEach((dif,index)=>{
    const btn=document.createElement("button");
    btn.classList.add("difBtn","fadeIn"); btn.textContent=dif; btn.style.animationDelay=`${index*0.1}s`;
    btn.addEventListener("click", ()=>{
      dificultadSeleccionada=dif; mostrarResumenFinal();
    });
    botonesDificultadDiv.appendChild(btn);
  });
  dificultadesDiv.style.display="block"; dificultadesDiv.classList.add("fadeIn");
}

function mostrarResumenFinal(){
  resumenFinal.innerHTML=`
    <div class="fadeIn" style="margin-top:20px;padding:15px;background:rgba(255,255,255,0.9);border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,0.2);max-width:500px;margin-inline:auto;">
      <h3>📘 Resumen de tu selección</h3>
      <p><strong>Nombre:</strong> ${nombreUsuario}</p>
      <p><strong>Modalidad:</strong> ${modalidadSeleccionada}</p>
      <p><strong>Materia:</strong> ${materiaSeleccionada}</p>
      <p><strong>Dificultad:</strong> ${dificultadSeleccionada}</p>
      <button id="comenzarBtn" style="margin-top:10px;">Comenzar</button>
    </div>
  `;
  document.getElementById("comenzarBtn").addEventListener("click", comenzarEstudio);
}

function comenzarEstudio(){
  modalidadDiv.style.display="none"; materiasDiv.style.display="none"; dificultadesDiv.style.display="none";
  resumenFinal.style.display="none"; pantallaEstudio.style.display="block";

  bienvenida.innerHTML=`<strong>¡Bienvenid@, ${nombreUsuario}!</strong><br>
    Modalidad: ${modalidadSeleccionada} | Materia: ${materiaSeleccionada} | Dificultad: ${dificultadSeleccionada}`;
}

// Ver contenido
verContenidoBtn.addEventListener("click", ()=>{
  contenidoTemasDiv.innerHTML="";
  const temas = contenidos[modalidadSeleccionada]?.[materiaSeleccionada]?.temas || [];
  temas.forEach((tema,index)=>{
    const div = document.createElement("div");
    div.classList.add("temaBloque","fadeIn");
    div.style.marginBottom="10px"; div.style.background="rgba(255,255,255,0.85)";
    div.style.padding="10px"; div.style.borderRadius="8px";
    div.innerHTML=`<strong>${tema.titulo}</strong> <button class="saberMasBtn">Saber más</button>
      <div class="infoTema" style="display:none;margin-top:5px;">${tema.info}</div>`;
    div.querySelector(".saberMasBtn").addEventListener("click", ()=>{
      const infoDiv = div.querySelector(".infoTema");
      infoDiv.style.display = infoDiv.style.display==="none"?"block":"none";
    });
    contenidoTemasDiv.appendChild(div);
  });
  empezarTestBtn.style.display="inline-block";
});

// Botón empezar test
empezarTestBtn.addEventListener("click", ()=>{
  testArea.innerHTML="";
  const temas = contenidos[modalidadSeleccionada]?.[materiaSeleccionada]?.temas || [];
  const numPreguntas = dificultadSeleccionada==="Fácil"?20:50; // Simplicación
  for(let i=1;i<=numPreguntas;i++){
    const p = document.createElement("p");
    p.textContent = `Pregunta ${i}: (Simulación) sobre ${temas[Math.floor(Math.random()*temas.length)].titulo}`;
    testArea.appendChild(p);
  }
});

