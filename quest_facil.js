// quest_facil.js
// Preguntas nivel "Fácil" para todas las modalidades y materias
// 5 preguntas por tema

const questFacil = {};

// Función auxiliar de números aleatorios
function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

// ================== PRIMARIA ==================
questFacil["Primaria"] = {
  "Matemáticas": [], "Ciencias": [], "Geografía": [], "Español": [], "Historia": [],
  "Inglés": [], "Arte": [], "Educación Física": []
};

// Matemáticas Primaria
["Suma","Resta","Multiplicación","División"].forEach(tema => {
  for(let i=0;i<5;i++){
    const n1=randInt(1,50), n2=randInt(1,50);
    let pregunta, correcta, opciones;
    switch(tema){
      case "Suma":
        pregunta=`¿Cuánto es ${n1} + ${n2}?`;
        correcta=n1+n2;
        opciones=[correcta,correcta+randInt(1,5),correcta-randInt(1,5),correcta+randInt(6,10)];
        break;
      case "Resta":
        pregunta=`¿Cuánto es ${n1} - ${n2}?`;
        correcta=n1-n2;
        opciones=[correcta,correcta+randInt(1,5),correcta-randInt(1,5),correcta+randInt(6,10)];
        break;
      case "Multiplicación":
        pregunta=`¿Cuánto es ${n1} × ${n2}?`;
        correcta=n1*n2;
        opciones=[correcta,correcta+randInt(1,10),correcta-randInt(1,10),correcta+randInt(11,20)];
        break;
      case "División":
        const n3=n1*n2;
        pregunta=`¿Cuánto es ${n3} ÷ ${n2}?`;
        correcta=n3/n2;
        opciones=[correcta,correcta+randInt(1,5),correcta-randInt(1,5),correcta+randInt(6,10)];
        break;
    }
    opciones.sort(()=>Math.random()-0.5);
    questFacil["Primaria"]["Matemáticas"].push({tema,pregunta,opciones,correcta});
  }
});

// Ciencias Primaria
["Animales","Plantas","Cuerpo Humano","Ecosistemas"].forEach(tema => {
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta sobre ${tema}: ¿Cuál es un dato importante de ${tema}?`;
    const correcta=`Dato correcto ${i+1}`;
    const opciones=[correcta,`Falso dato A`,`Falso dato B`,`Falso dato C`].sort(()=>Math.random()-0.5);
    questFacil["Primaria"]["Ciencias"].push({tema,pregunta,opciones,correcta});
  }
});

// Geografía Primaria
["Países","Ríos","Montañas","Continentes"].forEach(tema => {
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta sobre ${tema}: Ejemplo de ${tema}?`;
    const correcta=`Ejemplo correcto ${i+1}`;
    const opciones=[correcta,`Incorrecto A`,`Incorrecto B`,`Incorrecto C`].sort(()=>Math.random()-0.5);
    questFacil["Primaria"]["Geografía"].push({tema,pregunta,opciones,correcta});
  }
});

// Español Primaria
["Ortografía básica","Gramática","Lectura comprensiva"].forEach(tema => {
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta sobre ${tema}: ¿Cuál es correcto?`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Incorrecta A`,`Incorrecta B`,`Incorrecta C`].sort(()=>Math.random()-0.5);
    questFacil["Primaria"]["Español"].push({tema,pregunta,opciones,correcta});
  }
});

// Historia Primaria
["Historia de México","Historia del Mundo"].forEach(tema => {
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Incorrecto A`,`Incorrecto B`,`Incorrecto C`].sort(()=>Math.random()-0.5);
    questFacil["Primaria"]["Historia"].push({tema,pregunta,opciones,correcta});
  }
});

// Inglés Primaria
["Vocabulario","Gramática","Frases básicas"].forEach(tema => {
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de inglés sobre ${tema}:`;
    const correcta=`Correct answer ${i+1}`;
    const opciones=[correcta,`Wrong A`,`Wrong B`,`Wrong C`].sort(()=>Math.random()-0.5);
    questFacil["Primaria"]["Inglés"].push({tema,pregunta,opciones,correcta});
  }
});

// Arte Primaria
["Pintura","Música","Escultura"].forEach(tema => {
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de arte sobre ${tema}:`;
    const correcta=`Ejemplo correcto ${i+1}`;
    const opciones=[correcta,`Falso A`,`Falso B`,`Falso C`].sort(()=>Math.random()-0.5);
    questFacil["Primaria"]["Arte"].push({tema,pregunta,opciones,correcta});
  }
});

// Educación Física Primaria
["Ejercicio","Deportes","Hábitos saludables"].forEach(tema => {
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de educación física sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Incorrecto A`,`Incorrecto B`,`Incorrecto C`].sort(()=>Math.random()-0.5);
    questFacil["Primaria"]["Educación Física"].push({tema,pregunta,opciones,correcta});
  }
});

// ================== SECUNDARIA ==================
questFacil["Secundaria"] = {
  "Álgebra": [], "Física": [], "Química": [], "Historia Universal": [], 
  "Biología": [], "Arte 2": [], "Inglés 2": []
};

// Álgebra
["Ecuaciones","Inecuaciones","Polinomios"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const a=randInt(1,20),b=randInt(1,20);
    const pregunta=`Resuelve ${a}x + ${b} = 0`;
    const correcta=`x=${(-b/a).toFixed(2)}`;
    const opciones=[correcta,`x=${randInt(1,10)}`,`x=${randInt(-10,10)}`,`x=${randInt(0,20)}`].sort(()=>Math.random()-0.5);
    questFacil["Secundaria"]["Álgebra"].push({tema,pregunta,opciones,correcta});
  }
});

// Física
["Mecánica","Óptica","Electricidad básica"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Física sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falsa A`,`Falsa B`,`Falsa C`].sort(()=>Math.random()-0.5);
    questFacil["Secundaria"]["Física"].push({tema,pregunta,opciones,correcta});
  }
});

// Química
["Átomos","Tabla periódica","Reacciones químicas"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Química sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falsa A`,`Falsa B`,`Falsa C`].sort(()=>Math.random()-0.5);
    questFacil["Secundaria"]["Química"].push({tema,pregunta,opciones,correcta});
  }
});

// Historia Universal
["Edad Antigua","Edad Media","Edad Moderna"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Historia Universal sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falso A`,`Falso B`,`Falso C`].sort(()=>Math.random()-0.5);
    questFacil["Secundaria"]["Historia Universal"].push({tema,pregunta,opciones,correcta});
  }
});

// Biología
["Genética","Ecosistemas","Celular"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Biología sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falsa A`,`Falsa B`,`Falsa C`].sort(()=>Math.random()-0.5);
    questFacil["Secundaria"]["Biología"].push({tema,pregunta,opciones,correcta});
  }
});

// Arte 2
["Pintura Moderna","Música Moderna","Escultura Moderna"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Arte 2 sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falsa A`,`Falsa B`,`Falsa C`].sort(()=>Math.random()-0.5);
    questFacil["Secundaria"]["Arte 2"].push({tema,pregunta,opciones,correcta});
  }
});

// Inglés 2
["Vocabulario Avanzado","Gramática Avanzada","Frases Avanzadas"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Inglés 2 sobre ${tema}:`;
    const correcta=`Correct answer ${i+1}`;
    const opciones=[correcta,`Wrong A`,`Wrong B`,`Wrong C`].sort(()=>Math.random()-0.5);
    questFacil["Secundaria"]["Inglés 2"].push({tema,pregunta,opciones,correcta});
  }
});

// ================== PREPARATORIA ==================
questFacil["Preparatoria"] = {
  "Cálculo": [], "Física Avanzada": [], "Literatura": [], "Química": [], 
  "Historia Moderna": [], "Filosofía": [], "Idiomas": []
};

// Cálculo Prepa
["Derivadas","Integrales","Límites"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const a=randInt(1,20), b=randInt(1,20);
    const pregunta=`Calcula la derivada de ${a}x^2 + ${b}x`;
    const correcta=`${2*a}x + ${b}`;
    const opciones=[correcta,`${a}x + ${b}`,`${a}x^2 + ${b}`,`${2*b}x + ${a}`].sort(()=>Math.random()-0.5);
    questFacil["Preparatoria"]["Cálculo"].push({tema,pregunta,opciones,correcta});
  }
});

// Física Avanzada Prepa
["Termodinámica","Electromagnetismo","Ondas"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Física Avanzada sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falsa A`,`Falsa B`,`Falsa C`].sort(()=>Math.random()-0.5);
    questFacil["Preparatoria"]["Física Avanzada"].push({tema,pregunta,opciones,correcta});
  }
});

// Literatura
["Poemas","Novelas","Cuentos"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Literatura sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Incorrecta A`,`Incorrecta B`,`Incorrecta C`].sort(()=>Math.random()-0.5);
    questFacil["Preparatoria"]["Literatura"].push({tema,pregunta,opciones,correcta});
  }
});

// Química Prepa
["Termoquímica","Reacciones","Enlaces Químicos"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Química sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falsa A`,`Falsa B`,`Falsa C`].sort(()=>Math.random()-0.5);
    questFacil["Preparatoria"]["Química"].push({tema,pregunta,opciones,correcta});
  }
});

// Historia Moderna
["Revolución Francesa","Revolución Industrial","Guerras Mundiales"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Historia Moderna sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falso A`,`Falso B`,`Falso C`].sort(()=>Math.random()-0.5);
    questFacil["Preparatoria"]["Historia Moderna"].push({tema,pregunta,opciones,correcta});
  }
});

// Filosofía
["Ética","Lógica","Metafísica"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Filosofía sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Incorrecta A`,`Incorrecta B`,`Incorrecta C`].sort(()=>Math.random()-0.5);
    questFacil["Preparatoria"]["Filosofía"].push({tema,pregunta,opciones,correcta});
  }
});

// Idiomas
["Inglés Avanzado","Francés","Alemán"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Idiomas sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falsa A`,`Falsa B`,`Falsa C`].sort(()=>Math.random()-0.5);
    questFacil["Preparatoria"]["Idiomas"].push({tema,pregunta,opciones,correcta});
  }
});

// ================== UNIVERSIDAD ==================
questFacil["Universidad"]={
  "Programación": [], "Economía": [], "Ingeniería": [], 
  "Cálculo Integral": [], "Estadística": [], "Diseño": [], "Psicología": []
};

// Programación
["Variables","Funciones","Algoritmos"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Programación sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Incorrecta A`,`Incorrecta B`,`Incorrecta C`].sort(()=>Math.random()-0.5);
    questFacil["Universidad"]["Programación"].push({tema,pregunta,opciones,correcta});
  }
});

// Economía
["Microeconomía","Macroeconomía","Finanzas"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Economía sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Incorrecta A`,`Incorrecta B`,`Incorrecta C`].sort(()=>Math.random()-0.5);
    questFacil["Universidad"]["Economía"].push({tema,pregunta,opciones,correcta});
  }
});

// Ingeniería
["Mecánica","Electrónica","Diseño"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Ingeniería sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Incorrecta A`,`Incorrecta B`,`Incorrecta C`].sort(()=>Math.random()-0.5);
    questFacil["Universidad"]["Ingeniería"].push({tema,pregunta,opciones,correcta});
  }
});

// Cálculo Integral
["Integrales Simples","Integrales por Partes","Integrales Definidas"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const a=randInt(1,20);
    const pregunta=`Calcula la integral ∫ ${a}x dx`;
    const correcta=`${a}x^2/2 + C`;
    const opciones=[correcta,`${a}x^2 + C`,`${a}x + C`,`x^2 + C`].sort(()=>Math.random()-0.5);
    questFacil["Universidad"]["Cálculo Integral"].push({tema,pregunta,opciones,correcta});
  }
});

// Estadística
["Medias","Desviación","Probabilidades"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Estadística sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falsa A`,`Falsa B`,`Falsa C`].sort(()=>Math.random()-0.5);
    questFacil["Universidad"]["Estadística"].push({tema,pregunta,opciones,correcta});
  }
});

// Diseño
["Gráfico","Industrial","UX/UI"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Diseño sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Incorrecta A`,`Incorrecta B`,`Incorrecta C`].sort(()=>Math.random()-0.5);
    questFacil["Universidad"]["Diseño"].push({tema,pregunta,opciones,correcta});
  }
});

// Psicología
["Cognitiva","Social","Desarrollo"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Psicología sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Incorrecta A`,`Incorrecta B`,`Incorrecta C`].sort(()=>Math.random()-0.5);
    questFacil["Universidad"]["Psicología"].push({tema,pregunta,opciones,correcta});
  }
});

// ================== POSTGRADO ==================
questFacil["Postgrado"]={
  "Gestión de Proyectos": [], "Investigación Avanzada": [], 
  "Filosofía Aplicada": [], "Educación Superior": []
};

// Gestión de Proyectos
["Planificación","Control","Evaluación"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Gestión de Proyectos sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Incorrecta A`,`Incorrecta B`,`Incorrecta C`].sort(()=>Math.random()-0.5);
    questFacil["Postgrado"]["Gestión de Proyectos"].push({tema,pregunta,opciones,correcta});
  }
});

// Investigación Avanzada
["Métodos","Análisis","Resultados"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Investigación Avanzada sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falsa A`,`Falsa B`,`Falsa C`].sort(()=>Math.random()-0.5);
    questFacil["Postgrado"]["Investigación Avanzada"].push({tema,pregunta,opciones,correcta});
  }
});

// Filosofía Aplicada
["Ética Profesional","Lógica Aplicada","Metodología"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Filosofía Aplicada sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falsa A`,`Falsa B`,`Falsa C`].sort(()=>Math.random()-0.5);
    questFacil["Postgrado"]["Filosofía Aplicada"].push({tema,pregunta,opciones,correcta});
  }
});

// Educación Superior
["Políticas","Evaluación","Gestión Académica"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Educación Superior sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Incorrecta A`,`Incorrecta B`,`Incorrecta C`].sort(()=>Math.random()-0.5);
    questFacil["Postgrado"]["Educación Superior"].push({tema,pregunta,opciones,correcta});
  }
});

// Export
if(typeof module!=="undefined"){ module.exports=questFacil; }

