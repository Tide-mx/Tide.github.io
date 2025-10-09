/* -------------------- quest_extremadamente_facil.js -------------------- */

// Preguntas muy fáciles por materia y tema
const questExtremadamenteFacil = [
  // ---------- PRIMARIA ----------
  // Matemáticas
  ...generarPreguntasMatematicas("Primaria","Matemáticas",["Suma","Resta","Multiplicación","División"],5,1,20),
  
  // Ciencias
  ...generarPreguntasGenericas("Primaria","Ciencias",{
    "Animales":["¿Cuál es el animal más grande del mundo?","Ballena azul","Elefante","Jirafa","Tiburón"],
    "Plantas":["¿Qué planta produce oxígeno?","Todas las plantas","Rosa","Cactus","Helecho"],
    "Cuerpo Humano":["¿Cuál es el órgano que bombea sangre?","Corazón","Pulmón","Hígado","Riñón"],
    "Ecosistemas":["¿Qué ecosistema tiene muchos árboles?","Bosque","Desierto","Océano","Pradera"]
  }),
  
  // Español
  ...generarPreguntasGenericas("Primaria","Español",{
    "Ortografía básica":["¿Cuál es correcta?","Casa","Kasa","Caza","Qasa"],
    "Gramática":["¿Cuál es un verbo?","Correr","Mesa","Rojo","Árbol"],
    "Lectura comprensiva":["¿Quién es el protagonista de un cuento?","El personaje principal","El narrador","El lector","El final"]
  }),

  // ---------- SECUNDARIA ----------
  // Álgebra
  ...generarPreguntasMatematicas("Secundaria","Álgebra",["Ecuaciones","Inecuaciones","Polinomios"],5,1,50),
  
  // Física
  ...generarPreguntasGenericas("Secundaria","Física",{
    "Mecánica":["¿Qué es la fuerza?","Es una acción que cambia el movimiento","Es un color","Es un sonido","Es una planta"],
    "Óptica":["¿Qué hace un espejo?","Refleja la luz","La absorbe","La crea","La destruye"],
    "Electricidad básica":["¿Qué transporta la corriente?","El cable","La madera","El agua","El vidrio"]
  }),

  // Química
  ...generarPreguntasGenericas("Secundaria","Química",{
    "Átomos":["¿Qué es un átomo?","La unidad básica de la materia","Una molécula","Un planeta","Un animal"],
    "Tabla periódica":["¿Qué representa la tabla periódica?","Los elementos químicos","Los animales","Los planetas","Las plantas"],
    "Reacciones químicas":["¿Qué ocurre en una reacción química?","Cambian las sustancias","No ocurre nada","Se hace frío","Se hace calor"]
  })
];

// ---------- FUNCIONES AUXILIARES ----------

// Genera preguntas de matemáticas con números aleatorios
function generarPreguntasMatematicas(modalidad,materia,temas,cantidad,minNum,maxNum){
  let preguntas=[];
  temas.forEach(tema=>{
    for(let i=0;i<cantidad;i++){
      let num1 = Math.floor(Math.random()*(maxNum-minNum+1))+minNum;
      let num2 = Math.floor(Math.random()*(maxNum-minNum+1))+minNum;
      let pregunta="", correcta=0, opciones=[];
      switch(tema){
        case "Suma":
          pregunta = `¿Cuál es ${num1} + ${num2}?`;
          correcta = num1+num2;
          opciones = [correcta, correcta+1, correcta-1, correcta+2];
          break;
        case "Resta":
          pregunta = `¿Cuál es ${num1} - ${num2}?`;
          correcta = num1-num2;
          opciones = [correcta, correcta+1, correcta-1, correcta+2];
          break;
        case "Multiplicación":
          pregunta = `¿Cuál es ${num1} × ${num2}?`;
          correcta = num1*num2;
          opciones = [correcta, correcta+num1, correcta-num2, correcta+2];
          break;
        case "División":
          correcta = num2===0?1:Math.floor(num1/num2);
          pregunta = `¿Cuál es ${num1} ÷ ${num2}?`;
          opciones = [correcta, correcta+1, correcta-1, correcta+2];
          break;
        default:
          pregunta = `Pregunta de ${tema}`;
          correcta = "Respuesta correcta";
          opciones = [correcta,"Opción 1","Opción 2","Opción 3"];
      }
      // Barajar opciones
      opciones.sort(()=>Math.random()-0.5);
      preguntas.push({modalidad,materia,tema,pregunta,opciones,correcta});
    }
  });
  return preguntas;
}

// Genera preguntas genéricas de temas
function generarPreguntasGenericas(modalidad,materia,temasObj){
  let preguntas=[];
  for(const tema in temasObj){
    const [pregunta, correcta, ...incorrectas] = temasObj[tema];
    for(let i=0;i<5;i++){ // 5 preguntas por tema
      let opciones = [correcta,...incorrectas];
      opciones.sort(()=>Math.random()-0.5);
      preguntas.push({modalidad,materia,tema,pregunta,opciones,correcta});
    }
  }
  return preguntas;
}

export default questExtremadamenteFacil;
