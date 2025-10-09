// QUEST_DIFICIL.JS - PRIMARIA

const questDificilPrimaria = {
  "Matemáticas": {
    "Suma": Array.from({length:5}, () => {
      const a = Math.floor(Math.random()*9900)+100;
      const b = Math.floor(Math.random()*9900)+100;
      const correcta = a+b;
      return {
        pregunta: `¿Cuál es el resultado de ${a} + ${b}?`,
        opciones: [correcta, correcta+Math.floor(Math.random()*100)+1, correcta-Math.floor(Math.random()*100)-1, correcta+Math.floor(Math.random()*500)+50].sort(()=>Math.random()-0.5),
        correcta
      };
    }),
    "Resta": Array.from({length:5}, () => {
      const a = Math.floor(Math.random()*9900)+100;
      const b = Math.floor(Math.random()*9900)+100;
      const correcta = a-b;
      return {
        pregunta: `¿Cuál es el resultado de ${a} - ${b}?`,
        opciones: [correcta, correcta+Math.floor(Math.random()*100), correcta-Math.floor(Math.random()*100), correcta+Math.floor(Math.random()*500)].sort(()=>Math.random()-0.5),
        correcta
      };
    }),
    "Multiplicación": Array.from({length:5}, () => {
      const a = Math.floor(Math.random()*200)+10;
      const b = Math.floor(Math.random()*200)+10;
      const correcta = a*b;
      return {
        pregunta: `¿Cuál es el resultado de ${a} × ${b}?`,
        opciones: [correcta, correcta+Math.floor(Math.random()*50)+1, correcta-Math.floor(Math.random()*50)-1, correcta+Math.floor(Math.random()*100)].sort(()=>Math.random()-0.5),
        correcta
      };
    }),
    "División": Array.from({length:5}, () => {
      const b = Math.floor(Math.random()*200)+10;
      const a = b*(Math.floor(Math.random()*50)+10);
      const correcta = a/b;
      return {
        pregunta: `¿Cuál es el resultado de ${a} ÷ ${b}?`,
        opciones: [correcta, correcta+Math.floor(Math.random()*10)+1, correcta-Math.floor(Math.random()*10)-1, correcta+Math.floor(Math.random()*20)].sort(()=>Math.random()-0.5),
        correcta
      };
    })
  },

  "Ciencias": {
    "Animales": [
      {pregunta:"¿Cuál de estos es un mamífero?", opciones:["Tiburón","Ballena","Pingüino","Cocodrilo"], correcta:"Ballena"},
      {pregunta:"¿Qué animal pone huevos?", opciones:["Gallina","Perro","Vaca","Gato"], correcta:"Gallina"},
      {pregunta:"¿Cuál es el principal hábitat del delfín?", opciones:["Mar","Selva","Desierto","Montaña"], correcta:"Mar"},
      {pregunta:"¿Qué animal es conocido por su cambio de color?", opciones:["Camaleón","León","Elefante","Tigre"], correcta:"Camaleón"},
      {pregunta:"¿Cuál es un animal nocturno?", opciones:["Búho","Gallo","Caballo","Tiburón"], correcta:"Búho"}
    ],
    "Plantas": [
      {pregunta:"¿Cuál planta produce oxígeno?", opciones:["Cactus","Pino","Rosa","Alga"], correcta:"Pino"},
      {pregunta:"¿Qué parte absorbe agua de la planta?", opciones:["Hoja","Raíz","Tallo","Flor"], correcta:"Raíz"},
      {pregunta:"¿Qué planta es comestible?", opciones:["Roble","Trébol","Lechuga","Pino"], correcta:"Lechuga"},
      {pregunta:"¿Qué planta tiene flores?", opciones:["Cactus","Rosa","Helecho","Pino"], correcta:"Rosa"},
      {pregunta:"¿Qué planta crece en agua?", opciones:["Lirio de agua","Cactus","Pino","Rosa"], correcta:"Lirio de agua"}
    ],
    "Cuerpo Humano": [
      {pregunta:"¿Cuál es el órgano principal del corazón?", opciones:["Pulmones","Corazón","Hígado","Riñón"], correcta:"Corazón"},
      {pregunta:"¿Cuántos huesos tiene un adulto aproximadamente?", opciones:["206","150","250","300"], correcta:"206"},
      {pregunta:"¿Qué órgano filtra la sangre?", opciones:["Riñón","Hígado","Estómago","Corazón"], correcta:"Riñón"},
      {pregunta:"¿Qué órgano se encarga de respirar?", opciones:["Pulmones","Corazón","Hígado","Riñón"], correcta:"Pulmones"},
      {pregunta:"¿Qué parte del cuerpo nos ayuda a pensar?", opciones:["Cerebro","Corazón","Hígado","Estómago"], correcta:"Cerebro"}
    ],
    "Ecosistemas": [
      {pregunta:"¿Qué ecosistema es desértico?", opciones:["Sahara","Amazonas","Antártida","Selva"], correcta:"Sahara"},
      {pregunta:"¿Qué ecosistema es acuático?", opciones:["Océano","Desierto","Bosque","Pradera"], correcta:"Océano"},
      {pregunta:"¿Qué ecosistema tiene muchos árboles?", opciones:["Selva","Desierto","Mar","Montaña"], correcta:"Selva"},
      {pregunta:"¿Qué ecosistema tiene nieve perpetua?", opciones:["Tundra","Selva","Desierto","Pradera"], correcta:"Tundra"},
      {pregunta:"¿Qué ecosistema es urbano?", opciones:["Ciudad","Selva","Desierto","Mar"], correcta:"Ciudad"}
    ]
  },

  "Español": {
    "Ortografía básica": [
      {pregunta:"¿Cuál es correcto?", opciones:["Casa","Kasa","Caza","Kaza"], correcta:"Casa"},
      {pregunta:"¿Cuál palabra lleva tilde?", opciones:["Cancion","Canción","Canciona","Cansion"], correcta:"Canción"},
      {pregunta:"¿Cuál es un sustantivo?", opciones:["Correr","Perro","Rápidamente","Y"], correcta:"Perro"},
      {pregunta:"¿Cuál es un verbo?", opciones:["Cantar","Mesa","Rojo","Perro"], correcta:"Cantar"},
      {pregunta:"¿Cuál es un adjetivo?", opciones:["Alto","Correr","Perro","Mesa"], correcta:"Alto"}
    ],
    "Gramática": [
      {pregunta:"¿Cuál es un pronombre?", opciones:["Él","Mesa","Corre","Rápido"], correcta:"Él"},
      {pregunta:"¿Cuál es un artículo?", opciones:["El","Corre","Alto","Perro"], correcta:"El"},
      {pregunta:"¿Cuál es un adverbio?", opciones:["Rápidamente","Perro","Mesa","Alto"], correcta:"Rápidamente"},
      {pregunta:"¿Cuál es un sustantivo?", opciones:["Casa","Corre","Rápido","Muy"], correcta:"Casa"},
      {pregunta:"¿Cuál es un verbo?", opciones:["Correr","Mesa","Rojo","Perro"], correcta:"Correr"}
    ],
    "Lectura comprensiva": [
      {pregunta:"¿Qué se debe hacer al leer un texto?", opciones:["Analizarlo","Ignorarlo","Bailar","Dormir"], correcta:"Analizarlo"},
      {pregunta:"¿Cuál es la idea principal?", opciones:["Idea central","Detalle","Palabra","Frase"], correcta:"Idea central"},
      {pregunta:"¿Qué se debe resumir?", opciones:["Contenido","Imagen","Música","Ropa"], correcta:"Contenido"},
      {pregunta:"¿Qué es inferir?", opciones:["Sacar conclusiones","Dormir","Correr","Saltar"], correcta:"Sacar conclusiones"},
      {pregunta:"¿Cómo se identifican personajes?", opciones:["Leyendo el texto","Escuchando música","Mirando TV","Jugando"], correcta:"Leyendo el texto"}
    ]
  },

  "Geografía": {
    "Capitales": [
      {pregunta:"¿Cuál es la capital de México?", opciones:["México DF","Monterrey","Guadalajara","Puebla"], correcta:"México DF"},
      {pregunta:"¿Cuál es la capital de Francia?", opciones:["París","Lyon","Marsella","Toulouse"], correcta:"París"},
      {pregunta:"¿Cuál es la capital de Japón?", opciones:["Tokio","Osaka","Kyoto","Nagasaki"], correcta:"Tokio"},
      {pregunta:"¿Cuál es la capital de España?", opciones:["Madrid","Barcelona","Valencia","Sevilla"], correcta:"Madrid"},
      {pregunta:"¿Cuál es la capital de Argentina?", opciones:["Buenos Aires","Córdoba","Rosario","Mendoza"], correcta:"Buenos Aires"}
    ]
  },

  "Historia": {
    "Historia General": [
      {pregunta:"¿Quién descubrió América?", opciones:["Cristóbal Colón","Magallanes","Newton","Einstein"], correcta:"Cristóbal Colón"},
      {pregunta:"¿En qué año llegó Colón a América?", opciones:["1492","1500","1600","1400"], correcta:"1492"},
      {pregunta:"¿Quién fue Hernán Cortés?", opciones:["Conquistador","Rey","Filósofo","Poeta"], correcta:"Conquistador"},
      {pregunta:"¿Qué civilización construyó pirámides en Egipto?", opciones:["Egipcia","Maya","Azteca","Inca"], correcta:"Egipcia"},
      {pregunta:"¿Qué evento ocurrió en 1789?", opciones:["Revolución Francesa","Independencia de México","Guerra Civil","Revolución Industrial"], correcta:"Revolución Francesa"}
    ]
  },

  "Inglés": {
    "Vocabulario básico": [
      {pregunta:"How do you say 'perro' in English?", opciones:["Dog","Cat","Bird","Mouse"], correcta:"Dog"},
      {pregunta:"How do you say 'casa' in English?", opciones:["House","Home","Car","Door"], correcta:"House"},
      {pregunta:"How do you say 'gato' in English?", opciones:["Cat","Dog","Horse","Bird"], correcta:"Cat"},
      {pregunta:"How do you say 'libro' in English?", opciones:["Book","Pen","Table","Chair"], correcta:"Book"},
      {pregunta:"How do you say 'agua' in English?", opciones:["Water","Fire","Earth","Air"], correcta:"Water"}
    ]
  },

  "Arte": {
    "Colores": [
      {pregunta:"¿Cuál es un color primario?", opciones:["Rojo","Verde","Morado","Naranja"], correcta:"Rojo"},
      {pregunta:"¿Cuál es un color secundario?", opciones:["Naranja","Azul","Rojo","Amarillo"], correcta:"Naranja"},
      {pregunta:"¿Qué color se obtiene mezclando rojo y azul?", opciones:["Morado","Verde","Naranja","Negro"], correcta:"Morado"},
      {pregunta:"¿Qué color se obtiene mezclando azul y amarillo?", opciones:["Verde","Naranja","Morado","Negro"], correcta:"Verde"},
      {pregunta:"¿Qué color se obtiene mezclando rojo y amarillo?", opciones:["Naranja","Verde","Morado","Azul"], correcta:"Naranja"}
    ]
  },

  "Educación Física": {
    "Ejercicio": [
      {pregunta:"¿Qué ejercicio fortalece brazos?", opciones:["Flexiones","Sentadillas","Abdominales","Correr"], correcta:"Flexiones"},
      {pregunta:"¿Qué ejercicio fortalece piernas?", opciones:["Sentadillas","Flexiones","Abdominales","Correr"], correcta:"Sentadillas"},
      {pregunta:"¿Qué ejercicio trabaja abdomen?", opciones:["Abdominales","Flexiones","Sentadillas","Correr"], correcta:"Abdominales"},
      {pregunta:"¿Qué ejercicio mejora la resistencia?", opciones:["Correr","Flexiones","Abdominales","Sentadillas"], correcta:"Correr"},
      {pregunta:"¿Qué ejercicio es de estiramiento?", opciones:["Yoga","Flexiones","Abdominales","Sentadillas"], correcta:"Yoga"}
    ]
  }
};

// Exportar si usas Node.js o en frontend puedes incluirlo como script
// module.exports = questDificilPrimaria;
// QUEST_DIFICIL.JS - SECUNDARIA

const questDificilSecundaria = {
  "Álgebra": {
    "Ecuaciones": Array.from({length:5}, () => {
      const a = Math.floor(Math.random()*1000)+10;
      const b = Math.floor(Math.random()*1000)+10;
      const correcta = -b/a;
      return {
        pregunta: `Resuelve la ecuación ${a}x + ${b} = 0. ¿Cuál es x?`,
        opciones: [correcta, correcta+Math.floor(Math.random()*10)-5, correcta+Math.floor(Math.random()*20)-10, correcta+Math.floor(Math.random()*15)-7].sort(()=>Math.random()-0.5),
        correcta
      };
    }),
    "Inecuaciones": [
      {pregunta:"Si x + 5 > 10, ¿qué valores puede tomar x?", opciones:[">5","<5","=5",">10"], correcta:">5"},
      {pregunta:"Si 2x - 3 < 7, ¿qué valores puede tomar x?", opciones:[">5","<5","=5","<10"], correcta:"<5"},
      {pregunta:"Si x/3 ≥ 4, ¿qué valores puede tomar x?", opciones:[">=12","<=12","=12","<4"], correcta:">=12"},
      {pregunta:"Si 5x + 2 ≤ 12, ¿qué valores puede tomar x?", opciones:["≤2","≥2","=2","≤10"], correcta:"≤2"},
      {pregunta:"Si 3x - 7 > 8, ¿qué valores puede tomar x?", opciones:[">5","<5","=5",">10"], correcta:">5"}
    ],
    "Polinomios": [
      {pregunta:"¿Cuál es un polinomio?", opciones:["x^2 + 3x + 2","√x","1/x","sin(x)"], correcta:"x^2 + 3x + 2"},
      {pregunta:"¿Cuál es un monomio?", opciones:["5x","x^2 + x","x+1","x^3 + 2x"], correcta:"5x"},
      {pregunta:"¿Cuál es un binomio?", opciones:["x+2","x^2","5","x^2+2x+1"], correcta:"x+2"},
      {pregunta:"¿Cuál es un trinomio?", opciones:["x^2+3x+2","x+2","x^3","5"], correcta:"x^2+3x+2"},
      {pregunta:"¿Cuál es el grado de 4x^3 + x^2 - 5?", opciones:["3","2","1","0"], correcta:"3"}
    ]
  },

  "Física": {
    "Mecánica": Array.from({length:5}, () => {
      const m = Math.floor(Math.random()*90)+10;
      const a = Math.floor(Math.random()*20)+1;
      const correcta = m*a;
      return {
        pregunta: `Una masa de ${m} kg es acelerada a ${a} m/s². ¿Cuál es la fuerza aplicada?`,
        opciones: [correcta, correcta+Math.floor(Math.random()*20)-10, correcta+Math.floor(Math.random()*50)-25, correcta+Math.floor(Math.random()*30)-15].sort(()=>Math.random()-0.5),
        correcta
      };
    }),
    "Óptica": [
      {pregunta:"¿Qué fenómeno describe la reflexión de la luz?", opciones:["Rebote de la luz","Difracción","Absorción","Refracción"], correcta:"Rebote de la luz"},
      {pregunta:"¿Qué es la refracción?", opciones:["Cambio de dirección al pasar por medios","Rebote","Absorción","Difracción"], correcta:"Cambio de dirección al pasar por medios"},
      {pregunta:"¿Qué instrumento usa lentes para ampliar objetos?", opciones:["Microscopio","Telescopio","Prisma","Regla"], correcta:"Microscopio"},
      {pregunta:"¿Qué color se refracta más en un prisma?", opciones:["Violeta","Rojo","Verde","Azul"], correcta:"Violeta"},
      {pregunta:"¿Qué tipo de espejo concentra la luz?", opciones:["Cóncavo","Convexo","Plano","Liso"], correcta:"Cóncavo"}
    ],
    "Electricidad básica": Array.from({length:5}, () => {
      const V = Math.floor(Math.random()*220)+10;
      const R = Math.floor(Math.random()*50)+1;
      const I = V/R;
      return {
        pregunta: `Si un voltaje de ${V} V atraviesa una resistencia de ${R} Ω, ¿cuál es la corriente (I=V/R)?`,
        opciones: [I, I+Math.floor(Math.random()*5)-2, I+Math.floor(Math.random()*10)-5, I+Math.floor(Math.random()*3)-1].sort(()=>Math.random()-0.5),
        correcta:I
      };
    })
  },

  "Química": {
    "Átomos": [
      {pregunta:"¿Cuál es la partícula con carga positiva?", opciones:["Protón","Neutrón","Electrón","Átomo"], correcta:"Protón"},
      {pregunta:"¿Cuál tiene carga negativa?", opciones:["Electrón","Protón","Neutrón","Núcleo"], correcta:"Electrón"},
      {pregunta:"¿Qué partícula no tiene carga?", opciones:["Neutrón","Protón","Electrón","Núcleo"], correcta:"Neutrón"},
      {pregunta:"¿Dónde se encuentra el electrón?", opciones:["Corteza","Núcleo","Protones","Neutrones"], correcta:"Corteza"},
      {pregunta:"¿Dónde se encuentra el protón?", opciones:["Núcleo","Corteza","Electrones","Neutrones"], correcta:"Núcleo"}
    ],
    "Tabla periódica": [
      {pregunta:"¿Cuál es el símbolo del hidrógeno?", opciones:["H","He","O","C"], correcta:"H"},
      {pregunta:"¿Cuál es el símbolo del oxígeno?", opciones:["O","H","C","N"], correcta:"O"},
      {pregunta:"¿Cuál es el símbolo del carbono?", opciones:["C","O","H","N"], correcta:"C"},
      {pregunta:"¿Cuál es el símbolo del nitrógeno?", opciones:["N","O","H","C"], correcta:"N"},
      {pregunta:"¿Cuál es el símbolo del sodio?", opciones:["Na","S","K","Cl"], correcta:"Na"}
    ],
    "Reacciones químicas": [
      {pregunta:"H2 + O2 → ?", opciones:["H2O","HO","O2H2","H2O2"], correcta:"H2O"},
      {pregunta:"Na + Cl → ?", opciones:["NaCl","Na2Cl","ClNa","NaCl2"], correcta:"NaCl"},
      {pregunta:"C + O2 → ?", opciones:["CO2","CO","O2C","C2O"], correcta:"CO2"},
      {pregunta:"Fe + O2 → ?", opciones:["Fe2O3","FeO","FeO2","Fe3O4"], correcta:"Fe2O3"},
      {pregunta:"Zn + HCl → ?", opciones:["ZnCl2 + H2","ZnCl + H2O","ZnH + Cl","Zn + Cl2"], correcta:"ZnCl2 + H2"}
    ]
  },

  "Historia Universal": [
    {pregunta:"¿Quién escribió la Ilíada?", opciones:["Homero","Virgilio","Cervantes","Shakespeare"], correcta:"Homero"},
    {pregunta:"¿En qué siglo cayó el Imperio Romano?", opciones:["V d.C.","IV d.C.","III d.C.","VI d.C."], correcta:"V d.C."},
    {pregunta:"¿Quién fue Alejandro Magno?", opciones:["Conquistador","Filósofo","Poeta","Rey de Roma"], correcta:"Conquistador"},
    {pregunta:"¿Qué ocurrió en 1492?", opciones:["Descubrimiento de América","Revolución Francesa","Independencia de México","Caída de Roma"], correcta:"Descubrimiento de América"},
    {pregunta:"¿Qué civilización construyó Machu Picchu?", opciones:["Inca","Maya","Azteca","Egipcia"], correcta:"Inca"}
  ],

  "Biología": [
    {pregunta:"¿Cuál es la unidad básica de la vida?", opciones:["Célula","Átomo","Molécula","Tejido"], correcta:"Célula"},
    {pregunta:"¿Qué organelo produce energía?", opciones:["Mitocondria","Núcleo","Cloroplasto","Ribosoma"], correcta:"Mitocondria"},
    {pregunta:"¿Qué ser vivo realiza fotosíntesis?", opciones:["Planta","Perro","Gato","Pez"], correcta:"Planta"},
    {pregunta:"¿Qué molécula almacena información genética?", opciones:["ADN","ARN","Proteína","Glucosa"], correcta:"ADN"},
    {pregunta:"¿Qué tipo de reproducción tienen los mamíferos?", opciones:["Sexual","Asexual","Binaria","Esporada"], correcta:"Sexual"}
  ],

  "Arte 2": [
    {pregunta:"¿Qué pintura es de Van Gogh?", opciones:["La noche estrellada","La Mona Lisa","Guernica","El Grito"], correcta:"La noche estrellada"},
    {pregunta:"¿Qué técnica usa acuarela?", opciones:["Pintura con agua","Oleo","Tempera","Grabado"], correcta:"Pintura con agua"},
    {pregunta:"¿Qué es un retrato?", opciones:["Imagen de persona","Paisaje","Animal","Objeto"], correcta:"Imagen de persona"},
    {pregunta:"¿Qué es un bodegón?", opciones:["Composición de objetos","Paisaje","Retrato","Figura humana"], correcta:"Composición de objetos"},
    {pregunta:"¿Quién pintó La Gioconda?", opciones:["Leonardo da Vinci","Picasso","Van Gogh","Dalí"], correcta:"Leonardo da Vinci"}
  ],

  "Inglés 2": [
    {pregunta:"Translate: 'I am happy'", opciones:["Estoy feliz","Estoy triste","Soy alto","Estoy cansado"], correcta:"Estoy feliz"},
    {pregunta:"Translate: 'She is reading'", opciones:["Ella está leyendo","Ella está corriendo","Él está leyendo","Ella come"], correcta:"Ella está leyendo"},
    {pregunta:"Translate: 'Good morning'", opciones:["Buenos días","Buenas noches","Hola","Adiós"], correcta:"Buenos días"},
    {pregunta:"Translate: 'Thank you'", opciones:["Gracias","Por favor","Hola","Adiós"], correcta:"Gracias"},
    {pregunta:"Translate: 'I like pizza'", opciones:["Me gusta la pizza","No me gusta la pizza","Me gusta la carne","Me gusta el pan"], correcta:"Me gusta la pizza"}
  ]
};

// Exportar si usas Node.js o incluirlo como script en frontend
// module.exports = questDificilSecundaria;
// QUEST_DIFICIL.JS - SECUNDARIA

const questDificilSecundaria = {
  "Álgebra": {
    "Ecuaciones": Array.from({length:5}, () => {
      const a = Math.floor(Math.random()*1000)+10;
      const b = Math.floor(Math.random()*1000)+10;
      const correcta = -b/a;
      return {
        pregunta: `Resuelve la ecuación ${a}x + ${b} = 0. ¿Cuál es x?`,
        opciones: [correcta, correcta+Math.floor(Math.random()*10)-5, correcta+Math.floor(Math.random()*20)-10, correcta+Math.floor(Math.random()*15)-7].sort(()=>Math.random()-0.5),
        correcta
      };
    }),
    "Inecuaciones": [
      {pregunta:"Si x + 5 > 10, ¿qué valores puede tomar x?", opciones:[">5","<5","=5",">10"], correcta:">5"},
      {pregunta:"Si 2x - 3 < 7, ¿qué valores puede tomar x?", opciones:[">5","<5","=5","<10"], correcta:"<5"},
      {pregunta:"Si x/3 ≥ 4, ¿qué valores puede tomar x?", opciones:[">=12","<=12","=12","<4"], correcta:">=12"},
      {pregunta:"Si 5x + 2 ≤ 12, ¿qué valores puede tomar x?", opciones:["≤2","≥2","=2","≤10"], correcta:"≤2"},
      {pregunta:"Si 3x - 7 > 8, ¿qué valores puede tomar x?", opciones:[">5","<5","=5",">10"], correcta:">5"}
    ],
    "Polinomios": [
      {pregunta:"¿Cuál es un polinomio?", opciones:["x^2 + 3x + 2","√x","1/x","sin(x)"], correcta:"x^2 + 3x + 2"},
      {pregunta:"¿Cuál es un monomio?", opciones:["5x","x^2 + x","x+1","x^3 + 2x"], correcta:"5x"},
      {pregunta:"¿Cuál es un binomio?", opciones:["x+2","x^2","5","x^2+2x+1"], correcta:"x+2"},
      {pregunta:"¿Cuál es un trinomio?", opciones:["x^2+3x+2","x+2","x^3","5"], correcta:"x^2+3x+2"},
      {pregunta:"¿Cuál es el grado de 4x^3 + x^2 - 5?", opciones:["3","2","1","0"], correcta:"3"}
    ]
  },

  "Física": {
    "Mecánica": Array.from({length:5}, () => {
      const m = Math.floor(Math.random()*90)+10;
      const a = Math.floor(Math.random()*20)+1;
      const correcta = m*a;
      return {
        pregunta: `Una masa de ${m} kg es acelerada a ${a} m/s². ¿Cuál es la fuerza aplicada?`,
        opciones: [correcta, correcta+Math.floor(Math.random()*20)-10, correcta+Math.floor(Math.random()*50)-25, correcta+Math.floor(Math.random()*30)-15].sort(()=>Math.random()-0.5),
        correcta
      };
    }),
    "Óptica": [
      {pregunta:"¿Qué fenómeno describe la reflexión de la luz?", opciones:["Rebote de la luz","Difracción","Absorción","Refracción"], correcta:"Rebote de la luz"},
      {pregunta:"¿Qué es la refracción?", opciones:["Cambio de dirección al pasar por medios","Rebote","Absorción","Difracción"], correcta:"Cambio de dirección al pasar por medios"},
      {pregunta:"¿Qué instrumento usa lentes para ampliar objetos?", opciones:["Microscopio","Telescopio","Prisma","Regla"], correcta:"Microscopio"},
      {pregunta:"¿Qué color se refracta más en un prisma?", opciones:["Violeta","Rojo","Verde","Azul"], correcta:"Violeta"},
      {pregunta:"¿Qué tipo de espejo concentra la luz?", opciones:["Cóncavo","Convexo","Plano","Liso"], correcta:"Cóncavo"}
    ],
    "Electricidad básica": Array.from({length:5}, () => {
      const V = Math.floor(Math.random()*220)+10;
      const R = Math.floor(Math.random()*50)+1;
      const I = V/R;
      return {
        pregunta: `Si un voltaje de ${V} V atraviesa una resistencia de ${R} Ω, ¿cuál es la corriente (I=V/R)?`,
        opciones: [I, I+Math.floor(Math.random()*5)-2, I+Math.floor(Math.random()*10)-5, I+Math.floor(Math.random()*3)-1].sort(()=>Math.random()-0.5),
        correcta:I
      };
    })
  },

  "Química": {
    "Átomos": [
      {pregunta:"¿Cuál es la partícula con carga positiva?", opciones:["Protón","Neutrón","Electrón","Átomo"], correcta:"Protón"},
      {pregunta:"¿Cuál tiene carga negativa?", opciones:["Electrón","Protón","Neutrón","Núcleo"], correcta:"Electrón"},
      {pregunta:"¿Qué partícula no tiene carga?", opciones:["Neutrón","Protón","Electrón","Núcleo"], correcta:"Neutrón"},
      {pregunta:"¿Dónde se encuentra el electrón?", opciones:["Corteza","Núcleo","Protones","Neutrones"], correcta:"Corteza"},
      {pregunta:"¿Dónde se encuentra el protón?", opciones:["Núcleo","Corteza","Electrones","Neutrones"], correcta:"Núcleo"}
    ],
    "Tabla periódica": [
      {pregunta:"¿Cuál es el símbolo del hidrógeno?", opciones:["H","He","O","C"], correcta:"H"},
      {pregunta:"¿Cuál es el símbolo del oxígeno?", opciones:["O","H","C","N"], correcta:"O"},
      {pregunta:"¿Cuál es el símbolo del carbono?", opciones:["C","O","H","N"], correcta:"C"},
      {pregunta:"¿Cuál es el símbolo del nitrógeno?", opciones:["N","O","H","C"], correcta:"N"},
      {pregunta:"¿Cuál es el símbolo del sodio?", opciones:["Na","S","K","Cl"], correcta:"Na"}
    ],
    "Reacciones químicas": [
      {pregunta:"H2 + O2 → ?", opciones:["H2O","HO","O2H2","H2O2"], correcta:"H2O"},
      {pregunta:"Na + Cl → ?", opciones:["NaCl","Na2Cl","ClNa","NaCl2"], correcta:"NaCl"},
      {pregunta:"C + O2 → ?", opciones:["CO2","CO","O2C","C2O"], correcta:"CO2"},
      {pregunta:"Fe + O2 → ?", opciones:["Fe2O3","FeO","FeO2","Fe3O4"], correcta:"Fe2O3"},
      {pregunta:"Zn + HCl → ?", opciones:["ZnCl2 + H2","ZnCl + H2O","ZnH + Cl","Zn + Cl2"], correcta:"ZnCl2 + H2"}
    ]
  },

  "Historia Universal": [
    {pregunta:"¿Quién escribió la Ilíada?", opciones:["Homero","Virgilio","Cervantes","Shakespeare"], correcta:"Homero"},
    {pregunta:"¿En qué siglo cayó el Imperio Romano?", opciones:["V d.C.","IV d.C.","III d.C.","VI d.C."], correcta:"V d.C."},
    {pregunta:"¿Quién fue Alejandro Magno?", opciones:["Conquistador","Filósofo","Poeta","Rey de Roma"], correcta:"Conquistador"},
    {pregunta:"¿Qué ocurrió en 1492?", opciones:["Descubrimiento de América","Revolución Francesa","Independencia de México","Caída de Roma"], correcta:"Descubrimiento de América"},
    {pregunta:"¿Qué civilización construyó Machu Picchu?", opciones:["Inca","Maya","Azteca","Egipcia"], correcta:"Inca"}
  ],

  "Biología": [
    {pregunta:"¿Cuál es la unidad básica de la vida?", opciones:["Célula","Átomo","Molécula","Tejido"], correcta:"Célula"},
    {pregunta:"¿Qué organelo produce energía?", opciones:["Mitocondria","Núcleo","Cloroplasto","Ribosoma"], correcta:"Mitocondria"},
    {pregunta:"¿Qué ser vivo realiza fotosíntesis?", opciones:["Planta","Perro","Gato","Pez"], correcta:"Planta"},
    {pregunta:"¿Qué molécula almacena información genética?", opciones:["ADN","ARN","Proteína","Glucosa"], correcta:"ADN"},
    {pregunta:"¿Qué tipo de reproducción tienen los mamíferos?", opciones:["Sexual","Asexual","Binaria","Esporada"], correcta:"Sexual"}
  ],

  "Arte 2": [
    {pregunta:"¿Qué pintura es de Van Gogh?", opciones:["La noche estrellada","La Mona Lisa","Guernica","El Grito"], correcta:"La noche estrellada"},
    {pregunta:"¿Qué técnica usa acuarela?", opciones:["Pintura con agua","Oleo","Tempera","Grabado"], correcta:"Pintura con agua"},
    {pregunta:"¿Qué es un retrato?", opciones:["Imagen de persona","Paisaje","Animal","Objeto"], correcta:"Imagen de persona"},
    {pregunta:"¿Qué es un bodegón?", opciones:["Composición de objetos","Paisaje","Retrato","Figura humana"], correcta:"Composición de objetos"},
    {pregunta:"¿Quién pintó La Gioconda?", opciones:["Leonardo da Vinci","Picasso","Van Gogh","Dalí"], correcta:"Leonardo da Vinci"}
  ],

  "Inglés 2": [
    {pregunta:"Translate: 'I am happy'", opciones:["Estoy feliz","Estoy triste","Soy alto","Estoy cansado"], correcta:"Estoy feliz"},
    {pregunta:"Translate: 'She is reading'", opciones:["Ella está leyendo","Ella está corriendo","Él está leyendo","Ella come"], correcta:"Ella está leyendo"},
    {pregunta:"Translate: 'Good morning'", opciones:["Buenos días","Buenas noches","Hola","Adiós"], correcta:"Buenos días"},
    {pregunta:"Translate: 'Thank you'", opciones:["Gracias","Por favor","Hola","Adiós"], correcta:"Gracias"},
    {pregunta:"Translate: 'I like pizza'", opciones:["Me gusta la pizza","No me gusta la pizza","Me gusta la carne","Me gusta el pan"], correcta:"Me gusta la pizza"}
  ]
};

// Exportar si usas Node.js o incluirlo como script en frontend
// module.exports = questDificilSecundaria;
// QUEST_DIFICIL.JS - UNIVERSIDAD

const questDificilUni = {
  "Programación": {
    "Variables y Tipos": [
      {pregunta:"¿Qué tipo de dato es 'true' en JavaScript?", opciones:["Boolean","String","Number","Undefined"], correcta:"Boolean"},
      {pregunta:"¿Qué valor tiene null?", opciones:["Null","0","False","Undefined"], correcta:"Null"},
      {pregunta:"¿Cuál es un tipo de dato entero?", opciones:["Integer","Boolean","Float","String"], correcta:"Integer"},
      {pregunta:"¿Qué tipo de dato representa texto?", opciones:["String","Number","Boolean","Object"], correcta:"String"},
      {pregunta:"¿Qué significa NaN?", opciones:["Not a Number","New Array Number","Null and Number","Nothing"], correcta:"Not a Number"}
    ],
    "Funciones": [
      {pregunta:"¿Qué palabra clave se usa para definir una función en JS?", opciones:["function","def","func","lambda"], correcta:"function"},
      {pregunta:"¿Cómo se llama una función anónima?", opciones:["Lambda","Function","Anon","Callback"], correcta:"Lambda"},
      {pregunta:"¿Qué hace 'return' en una función?", opciones:["Devuelve valor","Imprime valor","Detiene programa","Suma valores"], correcta:"Devuelve valor"},
      {pregunta:"¿Se puede llamar a una función antes de declararla?", opciones:["Sí, con hoisting","No","Solo en Python","Solo en C"], correcta:"Sí, con hoisting"},
      {pregunta:"¿Qué es un parámetro?", opciones:["Variable de entrada","Variable global","Variable temporal","Valor de retorno"], correcta:"Variable de entrada"}
    ]
  },

  "Economía": {
    "Microeconomía": [
      {pregunta:"¿Qué estudia la microeconomía?", opciones:["Decisiones individuales","Economía global","Dinero","Finanzas"], correcta:"Decisiones individuales"},
      {pregunta:"Ley de la oferta:", opciones:["A mayor precio, mayor cantidad","A mayor precio, menor cantidad","Siempre constante","No aplica"], correcta:"A mayor precio, mayor cantidad"},
      {pregunta:"Ley de la demanda:", opciones:["A mayor precio, menor cantidad","A mayor precio, mayor cantidad","Siempre constante","No aplica"], correcta:"A mayor precio, menor cantidad"},
      {pregunta:"¿Qué es el equilibrio de mercado?", opciones:["Oferta = Demanda","Oferta > Demanda","Demanda > Oferta","No aplica"], correcta:"Oferta = Demanda"},
      {pregunta:"Producto marginal:", opciones:["Aumento de producción por unidad adicional","Costo fijo","Ingreso total","Pérdida"], correcta:"Aumento de producción por unidad adicional"}
    ],
    "Macroeconomía": [
      {pregunta:"PIB significa:", opciones:["Producto Interno Bruto","Producto Industrial Básico","Producción Internacional Bruta","Plan Interno Básico"], correcta:"Producto Interno Bruto"},
      {pregunta:"Inflación:", opciones:["Aumento generalizado de precios","Baja de precios","Estabilidad de precios","Ninguna"], correcta:"Aumento generalizado de precios"},
      {pregunta:"Desempleo estructural:", opciones:["Falta de habilidades","Renuncia voluntaria","Cambio de gobierno","Temporal"], correcta:"Falta de habilidades"},
      {pregunta:"Política monetaria:", opciones:["Control de dinero en circulación","Establecer impuestos","Gastar presupuesto","Nada"], correcta:"Control de dinero en circulación"},
      {pregunta:"Déficit fiscal:", opciones:["Gasto > Ingreso","Ingreso > Gasto","Estable","Neutral"], correcta:"Gasto > Ingreso"}
    ]
  },

  "Ingeniería": {
    "Mecánica": Array.from({length:5}, () => {
      const m = Math.floor(Math.random()*1000)+100;
      const a = Math.floor(Math.random()*50)+5;
      return {
        pregunta: `Una masa de ${m} kg se mueve con aceleración de ${a} m/s². ¿Cuál es la fuerza aplicada?`,
        opciones: [m*a, m*a+Math.floor(Math.random()*100)-50, m*a+Math.floor(Math.random()*200)-100, m*a+Math.floor(Math.random()*150)-75].sort(()=>Math.random()-0.5),
        correcta: m*a
      };
    }),
    "Electricidad": Array.from({length:5}, () => {
      const V = Math.floor(Math.random()*220)+110;
      const R = Math.floor(Math.random()*50)+10;
      return {
        pregunta: `Si la resistencia es ${R}Ω y el voltaje es ${V}V, ¿cuál es la corriente I?`,
        opciones: [V/R, V/R+1, V/R+2, V/R-1].sort(()=>Math.random()-0.5),
        correcta: V/R
      };
    })
  },

  "Cálculo Integral": Array.from({length:5}, () => {
    const a = Math.floor(Math.random()*100)+1;
    return {
      pregunta: `Calcula ∫${a}x dx`,
      opciones: [`${a/2}x^2 + C`, `${a}x + C`, `${a}x^2 + C`, `${a}x^3 + C`].sort(()=>Math.random()-0.5),
      correcta: `${a/2}x^2 + C`
    };
  }),

  "Estadística": {
    "Probabilidad": Array.from({length:5}, () => {
      const p = Math.floor(Math.random()*50)+1;
      return {
        pregunta: `Si lanzas un dado ${p} veces, ¿probabilidad de sacar 6 al menos una vez?`,
        opciones: ["0.167","0.5","0.833","0.25"].sort(()=>Math.random()-0.5),
        correcta:"0.833"
      };
    }),
    "Media y Desviación": Array.from({length:5}, () => {
      const nums = Array.from({length:5}, ()=>Math.floor(Math.random()*100)+1);
      const media = (nums.reduce((a,b)=>a+b,0)/nums.length).toFixed(1);
      return {
        pregunta: `Calcula la media de ${nums.join(", ")}.`,
        opciones: [media, media+1, media-1, media+2].sort(()=>Math.random()-0.5),
        correcta: media
      };
    })
  },

  "Diseño": [
    {pregunta:"¿Qué es UX?", opciones:["Experiencia de usuario","Diseño gráfico","Programación","Marketing"], correcta:"Experiencia de usuario"},
    {pregunta:"¿Qué es UI?", opciones:["Interfaz de usuario","Unidad de información","Interacción","Usuario interno"], correcta:"Interfaz de usuario"},
    {pregunta:"Color complementario de rojo:", opciones:["Verde","Azul","Amarillo","Naranja"], correcta:"Verde"},
    {pregunta:"Tipografía serif vs sans-serif:", opciones:["Con remates / sin remates","Grande / pequeña","Claro / Oscuro","Nada"], correcta:"Con remates / sin remates"},
    {pregunta:"Formato PNG vs JPG:", opciones:["PNG sin pérdida / JPG con pérdida","JPG sin pérdida / PNG con pérdida","Ambos iguales","Ninguno"], correcta:"PNG sin pérdida / JPG con pérdida"}
  ],

  "Psicología": [
    {pregunta:"¿Qué estudia la psicología?", opciones:["Comportamiento y mente","Física","Matemática","Historia"], correcta:"Comportamiento y mente"},
    {pregunta:"Teoría del condicionamiento clásico:", opciones:["Pavlov","Freud","Skinner","Piaget"], correcta:"Pavlov"},
    {pregunta:"Psicología cognitiva se centra en:", opciones:["Procesos mentales","Emociones","Hormonas","Sociedad"], correcta:"Procesos mentales"},
    {pregunta:"Trastorno de ansiedad:", opciones:["Ataques de pánico","Fiebre","Hipertensión","Insomnio"], correcta:"Ataques de pánico"},
    {pregunta:"Memoria a corto plazo:", opciones:["7 ± 2 elementos","1 elemento","100 elementos","50 elementos"], correcta:"7 ± 2 elementos"}
  ]
};

// module.exports = questDificilUni; // si usas Node.js
// QUEST_DIFICIL.JS - POSTGRADO

const questDificilPostgrado = {
  "Gestión de Proyectos": {
    "Planificación": [
      {pregunta:"¿Qué herramienta se usa para planificar proyectos?", opciones:["Diagrama de Gantt","Gráfico de Barras","Tabla periódica","Mapa mental"], correcta:"Diagrama de Gantt"},
      {pregunta:"¿Qué es un hito en un proyecto?", opciones:["Evento clave","Empleado","Cliente","Recurso"], correcta:"Evento clave"},
      {pregunta:"¿Qué representa el alcance?", opciones:["Todo lo que se entregará","Solo el presupuesto","Solo los riesgos","Solo el tiempo"], correcta:"Todo lo que se entregará"},
      {pregunta:"¿Qué es el cronograma?", opciones:["Secuencia de tareas","Lista de clientes","Informe financiero","Manual de usuario"], correcta:"Secuencia de tareas"},
      {pregunta:"¿Qué es la ruta crítica?", opciones:["Secuencia de tareas más larga","Empleado importante","Recurso limitado","Presupuesto total"], correcta:"Secuencia de tareas más larga"}
    ],
    "Riesgos": [
      {pregunta:"¿Qué es un riesgo en proyecto?", opciones:["Evento que puede afectar objetivos","Tarea completada","Recurso extra","Documento legal"], correcta:"Evento que puede afectar objetivos"},
      {pregunta:"¿Cómo se clasifica un riesgo?", opciones:["Alto, Medio, Bajo","Fácil, Normal, Difícil","Rápido, Lento, Medio","Activo, Pasivo"], correcta:"Alto, Medio, Bajo"},
      {pregunta:"Mitigación de riesgo:", opciones:["Reducir impacto o probabilidad","Aumentar presupuesto","Eliminar tareas","Contratar más personal"], correcta:"Reducir impacto o probabilidad"},
      {pregunta:"Plan de contingencia:", opciones:["Acción ante riesgo materializado","Lista de tareas","Informe financiero","Evaluación de desempeño"], correcta:"Acción ante riesgo materializado"},
      {pregunta:"Probabilidad de riesgo:", opciones:["Posibilidad de que ocurra","Impacto económico","Tiempo estimado","Número de recursos"], correcta:"Posibilidad de que ocurra"}
    ]
  },

  "Investigación Avanzada": {
    "Metodología": [
      {pregunta:"¿Qué es investigación cualitativa?", opciones:["Analiza percepciones y opiniones","Usa números y estadísticas","Se basa en fórmulas","Solo revisa literatura"], correcta:"Analiza percepciones y opiniones"},
      {pregunta:"¿Qué es investigación cuantitativa?", opciones:["Analiza datos numéricos","Analiza opiniones","Solo hace entrevistas","No usa datos"], correcta:"Analiza datos numéricos"},
      {pregunta:"Pregunta de hipótesis:", opciones:["Predicción sobre resultados","Pregunta de encuestas","Pregunta abierta","Pregunta cerrada"], correcta:"Predicción sobre resultados"},
      {pregunta:"Muestra representativa:", opciones:["Subgrupo que refleja población","Todo el país","Solo voluntarios","Solo expertos"], correcta:"Subgrupo que refleja población"},
      {pregunta:"Validez interna:", opciones:["Resultados confiables en estudio","Opinión general","Cantidad de encuestados","Duración del estudio"], correcta:"Resultados confiables en estudio"}
    ],
    "Análisis de Datos": [
      {pregunta:"¿Qué es estadística descriptiva?", opciones:["Resumen de datos","Pronóstico futuro","Ecuaciones","Estudio de casos"], correcta:"Resumen de datos"},
      {pregunta:"¿Qué es estadística inferencial?", opciones:["Inferir conclusiones","Solo sumar","Hacer gráficas","Nada"], correcta:"Inferir conclusiones"},
      {pregunta:"Prueba t:", opciones:["Comparar medias de dos grupos","Contar elementos","Generar gráficos","Definir población"], correcta:"Comparar medias de dos grupos"},
      {pregunta:"Correlación:", opciones:["Relación entre variables","Promedio","Mediana","Moda"], correcta:"Relación entre variables"},
      {pregunta:"P-valor:", opciones:["Probabilidad de observar resultados si H0 es verdadera","Número de sujetos","Cantidad de datos","Tiempo de estudio"], correcta:"Probabilidad de observar resultados si H0 es verdadera"}
    ]
  },

  "Filosofía Aplicada": {
    "Ética": [
      {pregunta:"¿Qué estudia la ética?", opciones:["Conducta humana y moral","Física","Química","Matemáticas"], correcta:"Conducta humana y moral"},
      {pregunta:"Consecuencialismo:", opciones:["Evalúa acciones por resultados","Evalúa acciones por intención","Evalúa solo reglas","Evalúa solo historia"], correcta:"Evalúa acciones por resultados"},
      {pregunta:"Deontología:", opciones:["Evalúa acciones por deber","Evalúa por placer","Evalúa por costo","Evalúa por tiempo"], correcta:"Evalúa acciones por deber"},
      {pregunta:"Virtud:", opciones:["Cualidad moral positiva","Instrumento","Número","Fórmula"], correcta:"Cualidad moral positiva"},
      {pregunta:"Ética aplicada:", opciones:["Aplicación de principios éticos a casos","Estudio teórico","Solo filosofía antigua","Solo religión"], correcta:"Aplicación de principios éticos a casos"}
    ],
    "Filosofía de la Ciencia": [
      {pregunta:"¿Qué estudia la filosofía de la ciencia?", opciones:["Fundamentos y método científico","Matemáticas","Historia","Literatura"], correcta:"Fundamentos y método científico"},
      {pregunta:"Paradigma:", opciones:["Modelo de referencia","Experimento","Tarea","Instrumento"], correcta:"Modelo de referencia"},
      {pregunta:"Ciencia empírica:", opciones:["Basada en observación","Basada en opinión","Basada en filosofía","Basada en religión"], correcta:"Basada en observación"},
      {pregunta:"Teoría:", opciones:["Explicación fundamentada","Idea sin prueba","Hipótesis aleatoria","Dato aislado"], correcta:"Explicación fundamentada"},
      {pregunta:"Método científico:", opciones:["Observación, hipótesis, experimentación, conclusión","Solo observar","Solo experimentar","Solo leer libros"], correcta:"Observación, hipótesis, experimentación, conclusión"}
    ]
  },

  "Educación Superior": {
    "Gestión Educativa": [
      {pregunta:"¿Qué es planificación educativa?", opciones:["Organizar actividades y recursos","Solo dar clases","Solo evaluar","Nada"], correcta:"Organizar actividades y recursos"},
      {pregunta:"Evaluación formativa:", opciones:["Retroalimentación continua","Examen final","Solo asistencia","Nada"], correcta:"Retroalimentación continua"},
      {pregunta:"Currículo:", opciones:["Conjunto de contenidos y objetivos","Solo libros","Solo profesores","Solo estudiantes"], correcta:"Conjunto de contenidos y objetivos"},
      {pregunta:"Innovación educativa:", opciones:["Nuevas estrategias de enseñanza","Repetir métodos antiguos","Copiar exámenes","Nada"], correcta:"Nuevas estrategias de enseñanza"},
      {pregunta:"Inclusión educativa:", opciones:["Garantizar acceso a todos","Exclusión selectiva","Solo excelencia","Solo alumnos talentosos"], correcta:"Garantizar acceso a todos"}
    ],
    "Políticas Educativas": [
      {pregunta:"¿Qué busca una política educativa?", opciones:["Regular y mejorar educación","Reducir impuestos","Solo infraestructura","Nada"], correcta:"Regular y mejorar educación"},
      {pregunta:"Financiamiento educativo:", opciones:["Recursos para educación","Recursos para ejército","Recursos para salud","Recursos para transporte"], correcta:"Recursos para educación"},
      {pregunta:"Equidad educativa:", opciones:["Igualdad de oportunidades","Solo excelencia","Solo infraestructura","Nada"], correcta:"Igualdad de oportunidades"},
      {pregunta:"Sistema de evaluación:", opciones:["Medir aprendizaje","Medir economía","Medir infraestructura","Medir población"], correcta:"Medir aprendizaje"},
      {pregunta:"Innovación curricular:", opciones:["Actualizar contenidos y métodos","Dejar igual","Eliminar asignaturas","Nada"], correcta:"Actualizar contenidos y métodos"}
    ]
  }
};

// module.exports = questDificilPostgrado; // si usas Node.js

