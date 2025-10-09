// quest_normal.js
// Preguntas nivel "Normal" para todas las modalidades y materias
// 5 preguntas por tema, con dificultad media

const questNormal = {};

// Función auxiliar de números aleatorios
function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

// ================== PRIMARIA ==================
questNormal["Primaria"] = {
  "Matemáticas": [], "Ciencias": [], "Geografía": [], "Español": [], "Historia": [],
  "Inglés": [], "Arte": [], "Educación Física": []
};

// Matemáticas Primaria
["Suma","Resta","Multiplicación","División"].forEach(tema => {
  for(let i=0;i<5;i++){
    const n1=randInt(20,200), n2=randInt(20,200);
    let pregunta, correcta, opciones;
    switch(tema){
      case "Suma":
        pregunta=`¿Cuánto es ${n1} + ${n2}?`;
        correcta=n1+n2;
        opciones=[correcta,correcta+randInt(5,20),correcta-randInt(5,20),correcta+randInt(21,40)];
        break;
      case "Resta":
        pregunta=`¿Cuánto es ${n1} - ${n2}?`;
        correcta=n1-n2;
        opciones=[correcta,correcta+randInt(5,20),correcta-randInt(5,20),correcta+randInt(21,40)];
        break;
      case "Multiplicación":
        pregunta=`¿Cuánto es ${n1} × ${n2}?`;
        correcta=n1*n2;
        opciones=[correcta,correcta+randInt(10,50),correcta-randInt(10,50),correcta+randInt(51,100)];
        break;
      case "División":
        const n3=n1*n2;
        pregunta=`¿Cuánto es ${n3} ÷ ${n2}?`;
        correcta=n3/n2;
        opciones=[correcta,correcta+randInt(5,20),correcta-randInt(5,20),correcta+randInt(21,40)];
        break;
    }
    opciones.sort(()=>Math.random()-0.5);
    questNormal["Primaria"]["Matemáticas"].push({tema,pregunta,opciones,correcta});
  }
});

// Ciencias Primaria
["Animales","Plantas","Cuerpo Humano","Ecosistemas"].forEach(tema => {
  for(let i=0;i<5;i++){
    const pregunta=`Sobre ${tema}: ¿Cuál es una característica relevante de ${tema}?`;
    const correcta=`Dato correcto ${i+1}`;
    const opciones=[correcta,`Falsa alternativa A`,`Falsa alternativa B`,`Falsa alternativa C`].sort(()=>Math.random()-0.5);
    questNormal["Primaria"]["Ciencias"].push({tema,pregunta,opciones,correcta});
  }
});

// Geografía Primaria
["Países","Ríos","Montañas","Continentes"].forEach(tema => {
  for(let i=0;i<5;i++){
    const pregunta=`¿Cuál es un ejemplo correcto de ${tema}?`;
    const correcta=`Ejemplo correcto ${i+1}`;
    const opciones=[correcta,`Incorrecto A`,`Incorrecto B`,`Incorrecto C`].sort(()=>Math.random()-0.5);
    questNormal["Primaria"]["Geografía"].push({tema,pregunta,opciones,correcta});
  }
});

// Español Primaria
["Ortografía básica","Gramática","Lectura comprensiva"].forEach(tema => {
  for(let i=0;i<5;i++){
    const pregunta=`Indica la opción correcta sobre ${tema}:`;
    const correcta=`Correcto ${i+1}`;
    const opciones=[correcta,`Incorrecta A`,`Incorrecta B`,`Incorrecta C`].sort(()=>Math.random()-0.5);
    questNormal["Primaria"]["Español"].push({tema,pregunta,opciones,correcta});
  }
});

// Historia Primaria
["Historia de México","Historia del Mundo"].forEach(tema => {
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta histórica sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Incorrecta A`,`Incorrecta B`,`Incorrecta C`].sort(()=>Math.random()-0.5);
    questNormal["Primaria"]["Historia"].push({tema,pregunta,opciones,correcta});
  }
});

// Inglés Primaria
["Vocabulario","Gramática","Frases básicas"].forEach(tema => {
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de inglés sobre ${tema}:`;
    const correcta=`Correct answer ${i+1}`;
    const opciones=[correcta,`Wrong A`,`Wrong B`,`Wrong C`].sort(()=>Math.random()-0.5);
    questNormal["Primaria"]["Inglés"].push({tema,pregunta,opciones,correcta});
  }
});

// Arte Primaria
["Pintura","Música","Escultura"].forEach(tema => {
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de arte sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falsa A`,`Falsa B`,`Falsa C`].sort(()=>Math.random()-0.5);
    questNormal["Primaria"]["Arte"].push({tema,pregunta,opciones,correcta});
  }
});

// Educación Física Primaria
["Ejercicio","Deportes","Hábitos saludables"].forEach(tema => {
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de educación física sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falsa A`,`Falsa B`,`Falsa C`].sort(()=>Math.random()-0.5);
    questNormal["Primaria"]["Educación Física"].push({tema,pregunta,opciones,correcta});
  }
});

// ================== SECUNDARIA ==================
questNormal["Secundaria"] = {
  "Álgebra": [], "Física": [], "Química": [], "Historia Universal": [], 
  "Biología": [], "Arte 2": [], "Inglés 2": []
};

// Álgebra
["Ecuaciones","Inecuaciones","Polinomios"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const a=randInt(5,50),b=randInt(1,50);
    const pregunta=`Resuelve ${a}x + ${b} = 0`;
    const correcta=`x=${(-b/a).toFixed(2)}`;
    const opciones=[correcta,`x=${randInt(-10,10)}`,`x=${randInt(0,20)}`,`x=${randInt(-20,20)}`].sort(()=>Math.random()-0.5);
    questNormal["Secundaria"]["Álgebra"].push({tema,pregunta,opciones,correcta});
  }
});

// Física
["Mecánica","Óptica","Electricidad básica"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Física sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falsa A`,`Falsa B`,`Falsa C`].sort(()=>Math.random()-0.5);
    questNormal["Secundaria"]["Física"].push({tema,pregunta,opciones,correcta});
  }
});

// Química
["Átomos","Tabla periódica","Reacciones químicas"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Química sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falsa A`,`Falsa B`,`Falsa C`].sort(()=>Math.random()-0.5);
    questNormal["Secundaria"]["Química"].push({tema,pregunta,opciones,correcta});
  }
});

// Historia Universal
["Edad Antigua","Edad Media","Edad Moderna"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Historia Universal sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falsa A`,`Falsa B`,`Falsa C`].sort(()=>Math.random()-0.5);
    questNormal["Secundaria"]["Historia Universal"].push({tema,pregunta,opciones,correcta});
  }
});

// Biología
["Genética","Ecosistemas","Celular"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Biología sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falsa A`,`Falsa B`,`Falsa C`].sort(()=>Math.random()-0.5);
    questNormal["Secundaria"]["Biología"].push({tema,pregunta,opciones,correcta});
  }
});

// Arte 2
["Pintura Moderna","Música Moderna","Escultura Moderna"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Arte 2 sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falsa A`,`Falsa B`,`Falsa C`].sort(()=>Math.random()-0.5);
    questNormal["Secundaria"]["Arte 2"].push({tema,pregunta,opciones,correcta});
  }
});

// Inglés 2
["Vocabulario Avanzado","Gramática Avanzada","Frases Avanzadas"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Inglés 2 sobre ${tema}:`;
    const correcta=`Correct answer ${i+1}`;
    const opciones=[correcta,`Wrong A`,`Wrong B`,`Wrong C`].sort(()=>Math.random()-0.5);
    questNormal["Secundaria"]["Inglés 2"].push({tema,pregunta,opciones,correcta});
  }
});

// ================== PREPARATORIA ==================
// (Aquí seguiría el mismo patrón que en el quest_facil, aumentando números y complejidad)

// ================== PREPARATORIA ==================
questNormal["Preparatoria"] = {
  "Cálculo": [], "Física Avanzada": [], "Literatura": [],
  "Química": [], "Historia Moderna": [], "Filosofía": [], "Idiomas": []
};

// Cálculo
["Derivadas","Integrales","Límites"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const x=randInt(1,20);
    let pregunta, correcta, opciones;
    switch(tema){
      case "Derivadas":
        pregunta=`¿Cuál es la derivada de f(x) = ${x}x^2?`;
        correcta=`f'(x) = ${2*x}x`;
        opciones=[correcta,`f'(x) = ${x}^2`,`f'(x) = ${x*3}x`,`f'(x) = ${x}`].sort(()=>Math.random()-0.5);
        break;
      case "Integrales":
        pregunta=`Calcula ∫${x} dx`;
        correcta=`${x}x + C`;
        opciones=[correcta,`${x} + C`,`x^2 + C`,`${x*2}x + C`].sort(()=>Math.random()-0.5);
        break;
      case "Límites":
        pregunta=`Calcula el límite cuando x→${x} de (2x+3)`;
        correcta=`${2*x+3}`;
        opciones=[correcta,`${x+3}`,`${2*x}`,`${x*3}`].sort(()=>Math.random()-0.5);
        break;
    }
    questNormal["Preparatoria"]["Cálculo"].push({tema,pregunta,opciones,correcta});
  }
});

// Física Avanzada
["Electromagnetismo","Ondas","Termodinámica"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Física Avanzada sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falsa A`,`Falsa B`,`Falsa C`].sort(()=>Math.random()-0.5);
    questNormal["Preparatoria"]["Física Avanzada"].push({tema,pregunta,opciones,correcta});
  }
});

// Literatura
["Poemas","Cuentos","Novelas"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Literatura sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Incorrecta A`,`Incorrecta B`,`Incorrecta C`].sort(()=>Math.random()-0.5);
    questNormal["Preparatoria"]["Literatura"].push({tema,pregunta,opciones,correcta});
  }
});

// Química
["Reacciones","Compuestos","Estequiometría"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Química sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falsa A`,`Falsa B`,`Falsa C`].sort(()=>Math.random()-0.5);
    questNormal["Preparatoria"]["Química"].push({tema,pregunta,opciones,correcta});
  }
});

// Historia Moderna
["Revoluciones","Imperios","Conflictos"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Historia Moderna sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falsa A`,`Falsa B`,`Falsa C`].sort(()=>Math.random()-0.5);
    questNormal["Preparatoria"]["Historia Moderna"].push({tema,pregunta,opciones,correcta});
  }
});

// Filosofía
["Ética","Metafísica","Lógica"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Filosofía sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falsa A`,`Falsa B`,`Falsa C`].sort(()=>Math.random()-0.5);
    questNormal["Preparatoria"]["Filosofía"].push({tema,pregunta,opciones,correcta});
  }
});

// Idiomas
["Vocabulario","Gramática Avanzada","Frases Complejas"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Idiomas sobre ${tema}:`;
    const correcta=`Correct answer ${i+1}`;
    const opciones=[correcta,`Wrong A`,`Wrong B`,`Wrong C`].sort(()=>Math.random()-0.5);
    questNormal["Preparatoria"]["Idiomas"].push({tema,pregunta,opciones,correcta});
  }
});

// ================== UNIVERSIDAD ==================
questNormal["Universidad"] = {
  "Programación": [], "Economía": [], "Ingeniería": [],
  "Cálculo Integral": [], "Estadística": [], "Diseño": [], "Psicología": []
};

// Programación
["Variables","Funciones","Bucles"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Programación sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Incorrecta A`,`Incorrecta B`,`Incorrecta C`].sort(()=>Math.random()-0.5);
    questNormal["Universidad"]["Programación"].push({tema,pregunta,opciones,correcta});
  }
});

// Economía
["Oferta","Demanda","Inflación"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Economía sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falsa A`,`Falsa B`,`Falsa C`].sort(()=>Math.random()-0.5);
    questNormal["Universidad"]["Economía"].push({tema,pregunta,opciones,correcta});
  }
});

// Ingeniería
["Mecánica","Electrónica","Materiales"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Ingeniería sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falsa A`,`Falsa B`,`Falsa C`].sort(()=>Math.random()-0.5);
    questNormal["Universidad"]["Ingeniería"].push({tema,pregunta,opciones,correcta});
  }
});

// Cálculo Integral
["Integrales definidas","Integrales indefinidas","Métodos de integración"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Cálculo Integral sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falsa A`,`Falsa B`,`Falsa C`].sort(()=>Math.random()-0.5);
    questNormal["Universidad"]["Cálculo Integral"].push({tema,pregunta,opciones,correcta});
  }
});

// Estadística
["Probabilidad","Distribuciones","Promedios"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Estadística sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falsa A`,`Falsa B`,`Falsa C`].sort(()=>Math.random()-0.5);
    questNormal["Universidad"]["Estadística"].push({tema,pregunta,opciones,correcta});
  }
});

// Diseño
["Gráfico","Industrial","Digital"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Diseño sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falsa A`,`Falsa B`,`Falsa C`].sort(()=>Math.random()-0.5);
    questNormal["Universidad"]["Diseño"].push({tema,pregunta,opciones,correcta});
  }
});

// Psicología
["Cognitiva","Social","Desarrollo"].forEach(tema=>{
  for(let i=0;i<5;i++){
    const pregunta=`Pregunta de Psicología sobre ${tema}:`;
    const correcta=`Respuesta correcta ${i+1}`;
    const opciones=[correcta,`Falsa A`,`Falsa B`,`Falsa C`].sort(()=>Math.random()-0.5);
    questNormal["Universidad"]["Psicología"].push({tema,pregunta,opciones,correcta});
  }
});

// ================== POSTGRADO ==================
questNormal["Postgrado"] = {
  "Gestión de Proyectos": [], "Investigación Avanzada": [], "Filosofía Aplicada": [], "Educación Superior": []
};

["Gestión de Proyectos","Investigación Avanzada","Filosofía Aplicada","Educación Superior"].forEach(materia=>{
  ["Tema 1","Tema 2","Tema 3"].forEach(tema=>{
    for(let i=0;i<5;i++){
      const pregunta=`Pregunta de ${materia} sobre ${tema}:`;
      const correcta=`Respuesta correcta ${i+1}`;
      const opciones=[correcta,`Falsa A`,`Falsa B`,`Falsa C`].sort(()=>Math.random()-0.5);
      questNormal["Postgrado"][materia].push({tema,pregunta,opciones,correcta});
    }
  });
});

// Exportar para usar en tu script principal
// En navegador puedes usar: <script src="quest_normal.js"></script>
console.log("questNormal listo:", questNormal);
