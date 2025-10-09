// QUEST_EXTREMO_PRIMARIA.JS

const questExtremoPrimaria = {
  "Matemáticas": {
    "Suma": Array.from({length:5},()=>{
      const a = Math.floor(Math.random()*100000+999);
      const b = Math.floor(Math.random()*100000+999);
      const correcta = a+b;
      let opciones = [correcta, correcta+Math.floor(Math.random()*5000), correcta-Math.floor(Math.random()*5000), correcta+Math.floor(Math.random()*10000)];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Calcula: ${a} + ${b}`, opciones, correcta};
    }),
    "Resta": Array.from({length:5},()=>{
      const a = Math.floor(Math.random()*100000+999);
      const b = Math.floor(Math.random()*99999+100);
      const correcta = a-b;
      let opciones = [correcta, correcta+Math.floor(Math.random()*5000), correcta-Math.floor(Math.random()*5000), correcta+Math.floor(Math.random()*10000)];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Calcula: ${a} - ${b}`, opciones, correcta};
    }),
    "Multiplicación": Array.from({length:5},()=>{
      const a = Math.floor(Math.random()*1000+100);
      const b = Math.floor(Math.random()*1000+100);
      const correcta = a*b;
      let opciones = [correcta, correcta+Math.floor(Math.random()*10000), correcta-Math.floor(Math.random()*10000), correcta+Math.floor(Math.random()*20000)];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Calcula: ${a} x ${b}`, opciones, correcta};
    }),
    "División": Array.from({length:5},()=>{
      const a = Math.floor(Math.random()*100000+1000);
      const b = Math.floor(Math.random()*900+10);
      const correcta = Math.floor(a/b);
      let opciones = [correcta, correcta+Math.floor(Math.random()*500), correcta-Math.floor(Math.random()*500), correcta+Math.floor(Math.random()*1000)];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Calcula: ${a} ÷ ${b}`, opciones, correcta};
    })
  },
  "Ciencias": {
    "Animales": [
      {pregunta:"¿Cuál mamífero puede volar?", opciones:["Murciélago","Perro","Gato","Conejo"], correcta:"Murciélago"},
      {pregunta:"¿Qué animal es ovíparo?", opciones:["Gallina","Tigre","Perro","Vaca"], correcta:"Gallina"},
      {pregunta:"¿Cuál de estos es un invertebrado?", opciones:["Pulpo","Tigre","León","Oso"], correcta:"Pulpo"},
      {pregunta:"¿Qué animal realiza metamorfosis completa?", opciones:["Mariposa","Perro","Gato","Elefante"], correcta:"Mariposa"},
      {pregunta:"¿Cuál es un reptil?", opciones:["Cocodrilo","Perro","Gato","Conejo"], correcta:"Cocodrilo"}
    ],
    "Plantas": [
      {pregunta:"¿Qué planta produce flores?", opciones:["Rosa","Cactus","Pino","Musgo"], correcta:"Rosa"},
      {pregunta:"¿Qué planta es un árbol?", opciones:["Roble","Tulipán","Helecho","Orquídea"], correcta:"Roble"},
      {pregunta:"¿Qué planta es medicinal?", opciones:["Manzanilla","Cactus","Pino","Musgo"], correcta:"Manzanilla"},
      {pregunta:"¿Qué planta necesita poca agua?", opciones:["Cactus","Rosa","Tulipán","Orquídea"], correcta:"Cactus"},
      {pregunta:"¿Qué planta produce frutos?", opciones:["Manzano","Helecho","Musgo","Cactus"], correcta:"Manzano"}
    ],
    "Cuerpo Humano": [
      {pregunta:"¿Cuál es el órgano que bombea sangre?", opciones:["Corazón","Pulmón","Estómago","Hígado"], correcta:"Corazón"},
      {pregunta:"¿Qué órgano filtra la sangre?", opciones:["Riñón","Hígado","Estómago","Pulmón"], correcta:"Riñón"},
      {pregunta:"¿Cuál es el hueso más largo?", opciones:["Fémur","Tibia","Húmero","Radio"], correcta:"Fémur"},
      {pregunta:"¿Qué sistema controla movimientos?", opciones:["Nervioso","Digestivo","Respiratorio","Circulatorio"], correcta:"Nervioso"},
      {pregunta:"¿Qué órgano procesa los alimentos?", opciones:["Estómago","Pulmón","Corazón","Hígado"], correcta:"Estómago"}
    ],
    "Ecosistemas": [
      {pregunta:"¿Qué ecosistema tiene árboles altos y mucha lluvia?", opciones:["Selva","Desierto","Pradera","Tundra"], correcta:"Selva"},
      {pregunta:"¿Qué ecosistema tiene poca agua?", opciones:["Desierto","Selva","Bosque","Pantano"], correcta:"Desierto"},
      {pregunta:"¿Qué ecosistema es frío y con hielo?", opciones:["Tundra","Selva","Desierto","Bosque"], correcta:"Tundra"},
      {pregunta:"¿Qué ecosistema tiene hierba y animales grandes?", opciones:["Pradera","Selva","Desierto","Tundra"], correcta:"Pradera"},
      {pregunta:"¿Qué ecosistema es húmedo y pantanoso?", opciones:["Pantano","Desierto","Selva","Bosque"], correcta:"Pantano"}
    ]
  },
  "Español": {
    "Ortografía básica": [
      {pregunta:"¿Cómo se escribe correctamente?", opciones:["Casa","Kasa","Caza","Cassa"], correcta:"Casa"},
      {pregunta:"Selecciona la palabra correcta:", opciones:["Amigo","Amígo","Amigó","AmiGo"], correcta:"Amigo"},
      {pregunta:"Elige la correcta:", opciones:["Niño","Nino","Ñino","Niyo"], correcta:"Niño"},
      {pregunta:"Elige la correcta:", opciones:["Perro","Peró","Perroa","Perró"], correcta:"Perro"},
      {pregunta:"Elige la correcta:", opciones:["Sol","Sóll","Sól","Sohl"], correcta:"Sol"}
    ],
    "Gramática": [
      {pregunta:"Selecciona el sujeto de la frase: 'El gato duerme'", opciones:["El gato","Duerme","El","Gato"], correcta:"El gato"},
      {pregunta:"Selecciona el verbo de la frase: 'El niño corre'", opciones:["corre","El","niño","El niño"], correcta:"corre"},
      {pregunta:"Selecciona el adjetivo: 'La casa grande'", opciones:["grande","La","casa","casa grande"], correcta:"grande"},
      {pregunta:"Selecciona el pronombre: 'Ella canta'", opciones:["Ella","canta","E","lla"], correcta:"Ella"},
      {pregunta:"Selecciona el artículo: 'El perro'", opciones:["El","perro","Pe","rro"], correcta:"El"}
    ],
    "Lectura comprensiva": [
      {pregunta:"¿Qué personaje es principal en un cuento?", opciones:["Protagonista","Villano","Animal","Objeto"], correcta:"Protagonista"},
      {pregunta:"¿Qué indica el título de un texto?", opciones:["Tema","Personaje","Lugar","Tiempo"], correcta:"Tema"},
      {pregunta:"¿Qué indica el párrafo introductorio?", opciones:["Presenta la idea principal","Describe el final","Cuenta otra historia","No importa"], correcta:"Presenta la idea principal"},
      {pregunta:"¿Qué indica la conclusión de un texto?", opciones:["Cierra la idea","Comienza la historia","Cambia personaje","Ignora"], correcta:"Cierra la idea"},
      {pregunta:"¿Qué es un resumen?", opciones:["Síntesis de un texto","Texto completo","Idea secundaria","Parrafo al azar"], correcta:"Síntesis de un texto"}
    ]
  },
  "Geografía": {
    "Capitales": [
      {pregunta:"¿Cuál es la capital de México?", opciones:["Ciudad de México","Guadalajara","Monterrey","Cancún"], correcta:"Ciudad de México"},
      {pregunta:"¿Cuál es la capital de Francia?", opciones:["París","Lyon","Marsella","Burdeos"], correcta:"París"},
      {pregunta:"¿Cuál es la capital de Japón?", opciones:["Tokio","Osaka","Kioto","Hiroshima"], correcta:"Tokio"},
      {pregunta:"¿Cuál es la capital de España?", opciones:["Madrid","Barcelona","Valencia","Sevilla"], correcta:"Madrid"},
      {pregunta:"¿Cuál es la capital de Alemania?", opciones:["Berlín","Munich","Hamburgo","Colonia"], correcta:"Berlín"}
    ]
  },
  "Historia": {
    "Historia general": [
      {pregunta:"¿Quién descubrió América?", opciones:["Cristóbal Colón","Magallanes","Napoleón","Marco Polo"], correcta:"Cristóbal Colón"},
      {pregunta:"¿En qué año llegó Colón a América?", opciones:["1492","1500","1600","1400"], correcta:"1492"},
      {pregunta:"¿Qué civilización construyó pirámides en Egipto?", opciones:["Egipcia","Romana","Griega","Maya"], correcta:"Egipcia"},
      {pregunta:"¿Quién fue Napoleón?", opciones:["Emperador de Francia","Rey de España","General Egipcio","Filósofo"], correcta:"Emperador de Francia"},
      {pregunta:"¿Qué invento revolucionó la comunicación en el siglo XIX?", opciones:["Telégrafo","Internet","Teléfono","Radio"], correcta:"Telégrafo"}
    ]
  },
  "Inglés": {
    "Básico": [
      {pregunta:"Translate 'Hola' to English", opciones:["Hello","Hi","Goodbye","Bye"], correcta:"Hello"},
      {pregunta:"Translate 'Perro' to English", opciones:["Dog","Cat","Bird","Fish"], correcta:"Dog"},
      {pregunta:"Translate 'Casa' to English", opciones:["House","Home","Car","Tree"], correcta:"House"},
      {pregunta:"Translate 'Rojo' to English", opciones:["Red","Blue","Green","Yellow"], correcta:"Red"},
      {pregunta:"Translate 'Agua' to English", opciones:["Water","Juice","Milk","Soda"], correcta:"Water"}
    ]
  },
  "Arte": {
    "Pintura": [
      {pregunta:"¿Quién pintó la Mona Lisa?", opciones:["Leonardo da Vinci","Picasso","Van Gogh","Michelangelo"], correcta:"Leonardo da Vinci"},
      {pregunta:"¿Qué es un fresco?", opciones:["Pintura en muro húmedo","Pintura en lienzo","Escultura","Grabado"], correcta:"Pintura en muro húmedo"},
      {pregunta:"¿Qué es un óleo?", opciones:["Pintura con aceite","Pintura con agua","Escultura","Dibujo"], correcta:"Pintura con aceite"},
      {pregunta:"¿Quién pintó 'La noche estrellada'?", opciones:["Van Gogh","Picasso","Da Vinci","Michelangelo"], correcta:"Van Gogh"},
      {pregunta:"¿Qué es un retrato?", opciones:["Imagen de una persona","Paisaje","Naturaleza muerta","Escultura"], correcta:"Imagen de una persona"}
    ]
  },
  "Educación Física": {
    "Deportes": [
      {pregunta:"¿Cuántos jugadores tiene un equipo de fútbol?", opciones:["11","10","9","12"], correcta:"11"},
      {pregunta:"¿Cuánto dura un partido de fútbol?", opciones:["90 minutos","60 minutos","120 minutos","80 minutos"], correcta:"90 minutos"},
      {pregunta:"¿Qué deporte usa raqueta y pelota pequeña?", opciones:["Tenis","Fútbol","Básquet","Voleibol"], correcta:"Tenis"},
      {pregunta:"¿Qué deporte se juega en una piscina?", opciones:["Natación","Béisbol","Fútbol","Balonmano"], correcta:"Natación"},
      {pregunta:"¿Qué ejercicio fortalece brazos?", opciones:["Flexiones","Sentadillas","Abdominales","Saltos"], correcta:"Flexiones"}
    ]
  }
};

// module.exports = questExtremoPrimaria;
// QUEST_EXTREMO_SECUNDARIA.JS

const questExtremoSecundaria = {
  "Álgebra": {
    "Ecuaciones": Array.from({length:5},()=>{
      const a = Math.floor(Math.random()*500+1);
      const b = Math.floor(Math.random()*500+1);
      const c = Math.floor(Math.random()*500+1);
      const correcta = (c-b)/a;
      let opciones = [correcta, correcta+Math.floor(Math.random()*50), correcta-Math.floor(Math.random()*50), correcta+Math.floor(Math.random()*100)];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Resuelve la ecuación: ${a}x + ${b} = ${c}`, opciones, correcta};
    }),
    "Inecuaciones": Array.from({length:5},()=>{
      const a = Math.floor(Math.random()*50+1);
      const b = Math.floor(Math.random()*50+1);
      const c = Math.floor(Math.random()*100+1);
      const correcta = (c-b)/a;
      let opciones = [correcta, correcta+Math.floor(Math.random()*20), correcta-Math.floor(Math.random()*20), correcta+Math.floor(Math.random()*50)];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Resuelve la inecuación: ${a}x + ${b} > ${c}`, opciones, correcta};
    }),
    "Polinomios": Array.from({length:5},()=>{
      const a = Math.floor(Math.random()*10+1);
      const b = Math.floor(Math.random()*10+1);
      const c = Math.floor(Math.random()*10+1);
      const d = Math.floor(Math.random()*10+1);
      const correcta = a+b+c+d;
      let opciones = [correcta, correcta+Math.floor(Math.random()*10), correcta-Math.floor(Math.random()*10), correcta+Math.floor(Math.random()*20)];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Suma los coeficientes del polinomio ${a}x^3 + ${b}x^2 + ${c}x + ${d}`, opciones, correcta};
    })
  },
  "Física": {
    "Mecánica": Array.from({length:5},()=>{
      const m = Math.floor(Math.random()*1000+500);
      const a = Math.floor(Math.random()*20+5);
      const correcta = m*a;
      let opciones = [correcta, correcta+Math.floor(Math.random()*100), correcta-Math.floor(Math.random()*100), correcta+Math.floor(Math.random()*200)];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Calcula la fuerza: masa = ${m} kg, aceleración = ${a} m/s² (F=ma)`, opciones, correcta};
    }),
    "Óptica": Array.from({length:5},()=>{
      const f = Math.floor(Math.random()*200+50);
      const d = Math.floor(Math.random()*200+50);
      const correcta = Math.floor(f*d/(f+d));
      let opciones = [correcta, correcta+Math.floor(Math.random()*20), correcta-Math.floor(Math.random()*20), correcta+Math.floor(Math.random()*40)];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Distancia de la imagen de una lente: f=${f}cm, d=${d}cm (1/f = 1/d + 1/d_i)`, opciones, correcta};
    }),
    "Electricidad básica": Array.from({length:5},()=>{
      const V = Math.floor(Math.random()*220+110);
      const R = Math.floor(Math.random()*100+10);
      const correcta = Math.floor(V/R);
      let opciones = [correcta, correcta+Math.floor(Math.random()*10), correcta-Math.floor(Math.random()*10), correcta+Math.floor(Math.random()*20)];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Calcula la corriente: V=${V}V, R=${R}Ω (I=V/R)`, opciones, correcta};
    })
  },
  "Química": {
    "Átomos": Array.from({length:5},()=>{
      const A = Math.floor(Math.random()*100+1);
      const Z = Math.floor(Math.random()*50+1);
      const correcta = A-Z;
      let opciones = [correcta, correcta+Math.floor(Math.random()*10), correcta-Math.floor(Math.random()*10), correcta+Math.floor(Math.random()*20)];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Número de neutrones: A=${A}, Z=${Z}`, opciones, correcta};
    }),
    "Tabla periódica": Array.from({length:5},()=>{
      const elemento = ["Hidrógeno","Oxígeno","Carbono","Nitrógeno","Sodio"][Math.floor(Math.random()*5)];
      const correcta = ["1","8","6","7","11"][["Hidrógeno","Oxígeno","Carbono","Nitrógeno","Sodio"].indexOf(elemento)];
      let opciones = ["1","2","6","7","8","11"];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Número atómico de ${elemento}`, opciones, correcta};
    }),
    "Reacciones químicas": Array.from({length:5},()=>{
      const a = Math.floor(Math.random()*5+1);
      const b = Math.floor(Math.random()*5+1);
      const correcta = a+b;
      let opciones = [correcta, correcta+Math.floor(Math.random()*3), correcta-Math.floor(Math.random()*3), correcta+Math.floor(Math.random()*5)];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Balancea: ${a}H2 + ${b}O2 → ?H2O`, opciones, correcta};
    })
  },
  "Historia Universal": [
    {pregunta:"¿En qué año cayó el Imperio Romano de Occidente?", opciones:["476","500","450","400"], correcta:"476"},
    {pregunta:"¿Quién lideró la Revolución Francesa?", opciones:["Robespierre","Napoleón","Luis XVI","Voltaire"], correcta:"Robespierre"},
    {pregunta:"¿Qué guerra ocurrió entre 1914-1918?", opciones:["Primera Guerra Mundial","Segunda Guerra Mundial","Guerra Fría","Revolución Industrial"], correcta:"Primera Guerra Mundial"},
    {pregunta:"¿Quién escribió 'La Ilíada'?", opciones:["Homero","Sócrates","Platón","Aristóteles"], correcta:"Homero"},
    {pregunta:"¿Qué imperio construyó la Gran Muralla?", opciones:["Chino","Romano","Persa","Mongol"], correcta:"Chino"}
  ],
  "Biología": [
    {pregunta:"¿Cuál es la célula básica de los seres vivos?", opciones:["Célula","Tejido","Órgano","Sistema"], correcta:"Célula"},
    {pregunta:"¿Qué organelo produce energía?", opciones:["Mitocondria","Núcleo","Cloroplasto","Ribosoma"], correcta:"Mitocondria"},
    {pregunta:"¿Qué es la fotosíntesis?", opciones:["Proceso de producir alimento usando luz","Respirar","Reproducirse","Moverse"], correcta:"Proceso de producir alimento usando luz"},
    {pregunta:"¿Qué es un mamífero?", opciones:["Animal que tiene pelo y amamanta","Ave","Reptil","Pez"], correcta:"Animal que tiene pelo y amamanta"},
    {pregunta:"¿Qué tipo de sangre es universal?", opciones:["O-","A+","B+","AB+"], correcta:"O-"}
  ],
  "Arte 2": [
    {pregunta:"¿Qué movimiento artístico pintó Picasso?", opciones:["Cubismo","Impresionismo","Barroco","Renacimiento"], correcta:"Cubismo"},
    {pregunta:"¿Qué es un retrato?", opciones:["Imagen de una persona","Paisaje","Escultura","Fresco"], correcta:"Imagen de una persona"},
    {pregunta:"¿Qué es una acuarela?", opciones:["Pintura con agua","Óleo","Fresco","Dibujo"], correcta:"Pintura con agua"},
    {pregunta:"¿Quién pintó 'Guernica'?", opciones:["Picasso","Van Gogh","Da Vinci","Michelangelo"], correcta:"Picasso"},
    {pregunta:"¿Qué es un mural?", opciones:["Pintura en pared","Lienzo","Escultura","Grabado"], correcta:"Pintura en pared"}
  ],
  "Inglés 2": [
    {pregunta:"Translate 'Felicidad' to English", opciones:["Happiness","Sadness","Anger","Fear"], correcta:"Happiness"},
    {pregunta:"Translate 'Correr' to English", opciones:["Run","Walk","Jump","Sleep"], correcta:"Run"},
    {pregunta:"Translate 'Escuela' to English", opciones:["School","House","Office","University"], correcta:"School"},
    {pregunta:"Translate 'Comida' to English", opciones:["Food","Drink","Meal","Snack"], correcta:"Food"},
    {pregunta:"Translate 'Amigo' to English", opciones:["Friend","Enemy","Brother","Sister"], correcta:"Friend"}
  ]
};

// module.exports = questExtremoSecundaria;
// QUEST_EXTREMO_PREPARATORIA.JS

const questExtremoPrepa = {
  "Cálculo": {
    "Derivadas": Array.from({length:5},()=>{
      const coef = Math.floor(Math.random()*1000+100);
      const exp = Math.floor(Math.random()*10+2);
      const correcta = coef*exp;
      let opciones = [correcta, correcta+Math.floor(Math.random()*50), correcta-Math.floor(Math.random()*50), correcta+Math.floor(Math.random()*100)];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Deriva la función f(x) = ${coef}x^${exp}`, opciones, correcta};
    }),
    "Integrales": Array.from({length:5},()=>{
      const coef = Math.floor(Math.random()*500+50);
      const exp = Math.floor(Math.random()*10+1);
      const correcta = coef/(exp+1);
      let opciones = [correcta, correcta+Math.floor(Math.random()*20), correcta-Math.floor(Math.random()*20), correcta+Math.floor(Math.random()*50)];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Integra la función f(x) = ${coef}x^${exp} dx`, opciones, correcta};
    }),
    "Límites": Array.from({length:5},()=>{
      const a = Math.floor(Math.random()*100+1);
      const b = Math.floor(Math.random()*100+1);
      const correcta = a/b;
      let opciones = [correcta, correcta+Math.random()*5, correcta-Math.random()*5, correcta+Math.random()*10];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Calcula el límite cuando x→∞ de (${a}x + ${b})/x`, opciones, correcta};
    })
  },
  "Física Avanzada": {
    "Mecánica": Array.from({length:5},()=>{
      const m = Math.floor(Math.random()*2000+500);
      const a = Math.floor(Math.random()*50+10);
      const correcta = m*a;
      let opciones = [correcta, correcta+Math.floor(Math.random()*200), correcta-Math.floor(Math.random()*200), correcta+Math.floor(Math.random()*400)];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Fuerza: masa = ${m} kg, aceleración = ${a} m/s²`, opciones, correcta};
    }),
    "Óptica": Array.from({length:5},()=>{
      const f = Math.floor(Math.random()*500+100);
      const d = Math.floor(Math.random()*500+100);
      const correcta = Math.floor(f*d/(f+d));
      let opciones = [correcta, correcta+Math.floor(Math.random()*50), correcta-Math.floor(Math.random()*50), correcta+Math.floor(Math.random()*100)];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Distancia imagen de lente: f=${f}cm, d=${d}cm (1/f=1/d+1/d_i)`, opciones, correcta};
    }),
    "Electromagnetismo": Array.from({length:5},()=>{
      const V = Math.floor(Math.random()*500+100);
      const R = Math.floor(Math.random()*200+50);
      const correcta = Math.floor(V/R);
      let opciones = [correcta, correcta+Math.floor(Math.random()*20), correcta-Math.floor(Math.random()*20), correcta+Math.floor(Math.random()*50)];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Corriente: V=${V}V, R=${R}Ω (I=V/R)`, opciones, correcta};
    })
  },
  "Literatura": [
    {pregunta:"¿Quién escribió 'Cien años de soledad'?", opciones:["Gabriel García Márquez","Pablo Neruda","Octavio Paz","Mario Vargas Llosa"], correcta:"Gabriel García Márquez"},
    {pregunta:"¿Qué es un soneto?", opciones:["Poema de 14 versos","Cuento corto","Novela","Ensayo"], correcta:"Poema de 14 versos"},
    {pregunta:"¿Quién escribió 'Don Quijote de la Mancha'?", opciones:["Miguel de Cervantes","Lope de Vega","Gustavo Adolfo Bécquer","Juan Rulfo"], correcta:"Miguel de Cervantes"},
    {pregunta:"¿Qué movimiento literario es el Romanticismo?", opciones:["Literatura centrada en emociones","Ciencia ficción","Literatura medieval","Barroco"], correcta:"Literatura centrada en emociones"},
    {pregunta:"¿Qué es la narrativa?", opciones:["Relato de hechos","Poema","Ensayo","Teatro"], correcta:"Relato de hechos"}
  ],
  "Química": {
    "Estequiometría": Array.from({length:5},()=>{
      const a = Math.floor(Math.random()*10+1);
      const b = Math.floor(Math.random()*10+1);
      const correcta = a*b;
      let opciones = [correcta, correcta+Math.floor(Math.random()*5), correcta-Math.floor(Math.random()*5), correcta+Math.floor(Math.random()*10)];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Calcula los moles de un compuesto si a=${a}, b=${b}`, opciones, correcta};
    }),
    "Reacciones Avanzadas": Array.from({length:5},()=>{
      const a = Math.floor(Math.random()*5+1);
      const b = Math.floor(Math.random()*5+1);
      const correcta = a+b;
      let opciones = [correcta, correcta+Math.floor(Math.random()*3), correcta-Math.floor(Math.random()*3), correcta+Math.floor(Math.random()*5)];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Balancea: ${a}H2 + ${b}O2 → ?H2O`, opciones, correcta};
    }),
    "Tabla periódica avanzada": [
      {pregunta:"Número atómico del Uranio", opciones:["92","90","88","94"], correcta:"92"},
      {pregunta:"Número atómico del Mercurio", opciones:["80","82","79","78"], correcta:"80"},
      {pregunta:"Número atómico del Plomo", opciones:["82","81","83","80"], correcta:"82"},
      {pregunta:"Número atómico del Oro", opciones:["79","78","80","81"], correcta:"79"},
      {pregunta:"Número atómico del Platino", opciones:["78","76","77","79"], correcta:"78"}
    ]
  },
  "Historia Moderna": [
    {pregunta:"¿En qué año comenzó la Revolución Industrial?", opciones:["1760","1800","1700","1750"], correcta:"1760"},
    {pregunta:"¿Qué tratado puso fin a la Primera Guerra Mundial?", opciones:["Versalles","Ginebra","Paz de París","Niza"], correcta:"Versalles"},
    {pregunta:"¿Quién fue Napoleón Bonaparte?", opciones:["Emperador francés","Rey inglés","General romano","César griego"], correcta:"Emperador francés"},
    {pregunta:"¿Qué evento sucedió en 1492?", opciones:["Descubrimiento de América","Revolución Francesa","Guerra de los Cien Años","Independencia de EE. UU."], correcta:"Descubrimiento de América"},
    {pregunta:"¿Quién escribió 'El Príncipe'?", opciones:["Maquiavelo","Locke","Voltaire","Rousseau"], correcta:"Maquiavelo"}
  ],
  "Filosofía": [
    {pregunta:"¿Quién es el padre de la filosofía occidental?", opciones:["Sócrates","Platón","Aristóteles","Descartes"], correcta:"Sócrates"},
    {pregunta:"¿Qué estudia la ética?", opciones:["Moral y conducta","Naturaleza","Matemáticas","Lenguaje"], correcta:"Moral y conducta"},
    {pregunta:"¿Qué es el racionalismo?", opciones:["Uso de la razón","Emoción","Instinto","Tradición"], correcta:"Uso de la razón"},
    {pregunta:"¿Quién escribió 'Meditaciones'?", opciones:["Marco Aurelio","Nietzsche","Kant","Hume"], correcta:"Marco Aurelio"},
    {pregunta:"¿Qué es la metafísica?", opciones:["Estudio de la realidad","Física","Química","Biología"], correcta:"Estudio de la realidad"}
  ],
  "Idiomas": [
    {pregunta:"Traduce 'Amor' al inglés", opciones:["Love","Hate","Fear","Joy"], correcta:"Love"},
    {pregunta:"Traduce 'Casa' al inglés", opciones:["House","Home","Building","School"], correcta:"House"},
    {pregunta:"Traduce 'Escuela' al inglés", opciones:["School","University","College","Class"], correcta:"School"},
    {pregunta:"Traduce 'Perro' al inglés", opciones:["Dog","Cat","Bird","Fish"], correcta:"Dog"},
    {pregunta:"Traduce 'Feliz' al inglés", opciones:["Happy","Sad","Angry","Tired"], correcta:"Happy"}
  ]
};

// module.exports = questExtremoPrepa;
// QUEST_EXTREMO_PREPARATORIA.JS

const questExtremoPrepa = {
  "Cálculo": {
    "Derivadas": Array.from({length:5},()=>{
      const coef = Math.floor(Math.random()*1000+100);
      const exp = Math.floor(Math.random()*10+2);
      const correcta = coef*exp;
      let opciones = [correcta, correcta+Math.floor(Math.random()*50), correcta-Math.floor(Math.random()*50), correcta+Math.floor(Math.random()*100)];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Deriva la función f(x) = ${coef}x^${exp}`, opciones, correcta};
    }),
    "Integrales": Array.from({length:5},()=>{
      const coef = Math.floor(Math.random()*500+50);
      const exp = Math.floor(Math.random()*10+1);
      const correcta = coef/(exp+1);
      let opciones = [correcta, correcta+Math.floor(Math.random()*20), correcta-Math.floor(Math.random()*20), correcta+Math.floor(Math.random()*50)];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Integra la función f(x) = ${coef}x^${exp} dx`, opciones, correcta};
    }),
    "Límites": Array.from({length:5},()=>{
      const a = Math.floor(Math.random()*100+1);
      const b = Math.floor(Math.random()*100+1);
      const correcta = a/b;
      let opciones = [correcta, correcta+Math.random()*5, correcta-Math.random()*5, correcta+Math.random()*10];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Calcula el límite cuando x→∞ de (${a}x + ${b})/x`, opciones, correcta};
    })
  },
  "Física Avanzada": {
    "Mecánica": Array.from({length:5},()=>{
      const m = Math.floor(Math.random()*2000+500);
      const a = Math.floor(Math.random()*50+10);
      const correcta = m*a;
      let opciones = [correcta, correcta+Math.floor(Math.random()*200), correcta-Math.floor(Math.random()*200), correcta+Math.floor(Math.random()*400)];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Fuerza: masa = ${m} kg, aceleración = ${a} m/s²`, opciones, correcta};
    }),
    "Óptica": Array.from({length:5},()=>{
      const f = Math.floor(Math.random()*500+100);
      const d = Math.floor(Math.random()*500+100);
      const correcta = Math.floor(f*d/(f+d));
      let opciones = [correcta, correcta+Math.floor(Math.random()*50), correcta-Math.floor(Math.random()*50), correcta+Math.floor(Math.random()*100)];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Distancia imagen de lente: f=${f}cm, d=${d}cm (1/f=1/d+1/d_i)`, opciones, correcta};
    }),
    "Electromagnetismo": Array.from({length:5},()=>{
      const V = Math.floor(Math.random()*500+100);
      const R = Math.floor(Math.random()*200+50);
      const correcta = Math.floor(V/R);
      let opciones = [correcta, correcta+Math.floor(Math.random()*20), correcta-Math.floor(Math.random()*20), correcta+Math.floor(Math.random()*50)];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Corriente: V=${V}V, R=${R}Ω (I=V/R)`, opciones, correcta};
    })
  },
  "Literatura": [
    {pregunta:"¿Quién escribió 'Cien años de soledad'?", opciones:["Gabriel García Márquez","Pablo Neruda","Octavio Paz","Mario Vargas Llosa"], correcta:"Gabriel García Márquez"},
    {pregunta:"¿Qué es un soneto?", opciones:["Poema de 14 versos","Cuento corto","Novela","Ensayo"], correcta:"Poema de 14 versos"},
    {pregunta:"¿Quién escribió 'Don Quijote de la Mancha'?", opciones:["Miguel de Cervantes","Lope de Vega","Gustavo Adolfo Bécquer","Juan Rulfo"], correcta:"Miguel de Cervantes"},
    {pregunta:"¿Qué movimiento literario es el Romanticismo?", opciones:["Literatura centrada en emociones","Ciencia ficción","Literatura medieval","Barroco"], correcta:"Literatura centrada en emociones"},
    {pregunta:"¿Qué es la narrativa?", opciones:["Relato de hechos","Poema","Ensayo","Teatro"], correcta:"Relato de hechos"}
  ],
  "Química": {
    "Estequiometría": Array.from({length:5},()=>{
      const a = Math.floor(Math.random()*10+1);
      const b = Math.floor(Math.random()*10+1);
      const correcta = a*b;
      let opciones = [correcta, correcta+Math.floor(Math.random()*5), correcta-Math.floor(Math.random()*5), correcta+Math.floor(Math.random()*10)];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Calcula los moles de un compuesto si a=${a}, b=${b}`, opciones, correcta};
    }),
    "Reacciones Avanzadas": Array.from({length:5},()=>{
      const a = Math.floor(Math.random()*5+1);
      const b = Math.floor(Math.random()*5+1);
      const correcta = a+b;
      let opciones = [correcta, correcta+Math.floor(Math.random()*3), correcta-Math.floor(Math.random()*3), correcta+Math.floor(Math.random()*5)];
      opciones = opciones.sort(()=>Math.random()-0.5);
      return {pregunta:`Balancea: ${a}H2 + ${b}O2 → ?H2O`, opciones, correcta};
    }),
    "Tabla periódica avanzada": [
      {pregunta:"Número atómico del Uranio", opciones:["92","90","88","94"], correcta:"92"},
      {pregunta:"Número atómico del Mercurio", opciones:["80","82","79","78"], correcta:"80"},
      {pregunta:"Número atómico del Plomo", opciones:["82","81","83","80"], correcta:"82"},
      {pregunta:"Número atómico del Oro", opciones:["79","78","80","81"], correcta:"79"},
      {pregunta:"Número atómico del Platino", opciones:["78","76","77","79"], correcta:"78"}
    ]
  },
  "Historia Moderna": [
    {pregunta:"¿En qué año comenzó la Revolución Industrial?", opciones:["1760","1800","1700","1750"], correcta:"1760"},
    {pregunta:"¿Qué tratado puso fin a la Primera Guerra Mundial?", opciones:["Versalles","Ginebra","Paz de París","Niza"], correcta:"Versalles"},
    {pregunta:"¿Quién fue Napoleón Bonaparte?", opciones:["Emperador francés","Rey inglés","General romano","César griego"], correcta:"Emperador francés"},
    {pregunta:"¿Qué evento sucedió en 1492?", opciones:["Descubrimiento de América","Revolución Francesa","Guerra de los Cien Años","Independencia de EE. UU."], correcta:"Descubrimiento de América"},
    {pregunta:"¿Quién escribió 'El Príncipe'?", opciones:["Maquiavelo","Locke","Voltaire","Rousseau"], correcta:"Maquiavelo"}
  ],
  "Filosofía": [
    {pregunta:"¿Quién es el padre de la filosofía occidental?", opciones:["Sócrates","Platón","Aristóteles","Descartes"], correcta:"Sócrates"},
    {pregunta:"¿Qué estudia la ética?", opciones:["Moral y conducta","Naturaleza","Matemáticas","Lenguaje"], correcta:"Moral y conducta"},
    {pregunta:"¿Qué es el racionalismo?", opciones:["Uso de la razón","Emoción","Instinto","Tradición"], correcta:"Uso de la razón"},
    {pregunta:"¿Quién escribió 'Meditaciones'?", opciones:["Marco Aurelio","Nietzsche","Kant","Hume"], correcta:"Marco Aurelio"},
    {pregunta:"¿Qué es la metafísica?", opciones:["Estudio de la realidad","Física","Química","Biología"], correcta:"Estudio de la realidad"}
  ],
  "Idiomas": [
    {pregunta:"Traduce 'Amor' al inglés", opciones:["Love","Hate","Fear","Joy"], correcta:"Love"},
    {pregunta:"Traduce 'Casa' al inglés", opciones:["House","Home","Building","School"], correcta:"House"},
    {pregunta:"Traduce 'Escuela' al inglés", opciones:["School","University","College","Class"], correcta:"School"},
    {pregunta:"Traduce 'Perro' al inglés", opciones:["Dog","Cat","Bird","Fish"], correcta:"Dog"},
    {pregunta:"Traduce 'Feliz' al inglés", opciones:["Happy","Sad","Angry","Tired"], correcta:"Happy"}
  ]
};

// module.exports = questExtremoPrepa;
// QUEST_EXTREMO_POSTGRADO.JS

const questExtremoPostgrado = {
  "Gestión de Proyectos": {
    "Planeación Estratégica": [
      {pregunta:"¿Cuál es la técnica PERT usada para?", opciones:["Analizar duración de tareas y su secuencia","Asignar presupuesto","Contratar personal","Diseñar gráficos"], correcta:"Analizar duración de tareas y su secuencia"},
      {pregunta:"Método del camino crítico (CPM) identifica:", opciones:["Tareas críticas que determinan duración total","Solo tareas opcionales","Recursos humanos","Solo costos"], correcta:"Tareas críticas que determinan duración total"},
      {pregunta:"PMBOK es:", opciones:["Guía de buenas prácticas en gestión de proyectos","Software de control","Base de datos","Manual contable"], correcta:"Guía de buenas prácticas en gestión de proyectos"},
      {pregunta:"Stakeholders primarios se refieren a:", opciones:["Partes interesadas principales del proyecto","Todos los empleados","Clientes solo","Proveedor externo"], correcta:"Partes interesadas principales del proyecto"},
      {pregunta:"Análisis de riesgos cuantitativo implica:", opciones:["Cuantificar impacto y probabilidad","Solo identificar riesgos","Eliminar riesgos","Revisar presupuesto"], correcta:"Cuantificar impacto y probabilidad"}
    ],
    "Gestión de Recursos": [
      {pregunta:"Teoría de restricciones busca:", opciones:["Identificar el cuello de botella del proceso","Aumentar costos","Disminuir calidad","Reducir personal"], correcta:"Identificar el cuello de botella del proceso"},
      {pregunta:"Asignación de recursos en software de gestión implica:", opciones:["Optimizar disponibilidad y carga","Eliminar recursos","Reducir tareas","Ignorar dependencias"], correcta:"Optimizar disponibilidad y carga"},
      {pregunta:"Matriz RACI define:", opciones:["Responsables, Aprobadores, Consultados, Informados","Solo responsables","Solo aprobadores","Solo consultados"], correcta:"Responsables, Aprobadores, Consultados, Informados"},
      {pregunta:"Recurso crítico se determina por:", opciones:["Disponibilidad limitada que impacta el proyecto","Costo total","Cantidad de empleados","Duración total"], correcta:"Disponibilidad limitada que impacta el proyecto"},
      {pregunta:"Curva de aprendizaje indica:", opciones:["Tiempo requerido para alcanzar eficiencia completa","Cantidad de errores","Número de tareas","Presupuesto"], correcta:"Tiempo requerido para alcanzar eficiencia completa"}
    ]
  },
  "Investigación Avanzada": {
    "Metodología Cualitativa": [
      {pregunta:"Triangulación en investigación significa:", opciones:["Combinar múltiples fuentes o métodos","Usar un solo cuestionario","Ignorar datos contradictorios","Repetir la misma encuesta"], correcta:"Combinar múltiples fuentes o métodos"},
      {pregunta:"Codificación abierta es:", opciones:["Identificación de categorías en datos","Un tipo de estadística","Examen físico","Diseño experimental"], correcta:"Identificación de categorías en datos"},
      {pregunta:"Muestreo teórico se usa para:", opciones:["Seleccionar casos relevantes para teoría emergente","Elegir al azar","Evaluar presupuesto","Controlar variables"], correcta:"Seleccionar casos relevantes para teoría emergente"},
      {pregunta:"Saturación de datos ocurre cuando:", opciones:["No emergen nuevos hallazgos","Se llena base de datos","Termina presupuesto","Se completan encuestas"], correcta:"No emergen nuevos hallazgos"},
      {pregunta:"Estudio de caso instrumental sirve para:", opciones:["Comprender un fenómeno más amplio","Solo un individuo","Experimento cuantitativo","Revisión bibliográfica"], correcta:"Comprender un fenómeno más amplio"}
    ],
    "Metodología Cuantitativa": [
      {pregunta:"Prueba ANOVA se usa para:", opciones:["Comparar medias de múltiples grupos","Solo dos grupos","Medir correlación","Determinar varianza exacta"], correcta:"Comparar medias de múltiples grupos"},
      {pregunta:"Coeficiente de determinación R² indica:", opciones:["Proporción de varianza explicada por modelo","Errores de predicción","Media de datos","Número de muestras"], correcta:"Proporción de varianza explicada por modelo"},
      {pregunta:"Hipótesis nula se rechaza si:", opciones:["p < α","p > α","Siempre","Nunca"], correcta:"p < α"},
      {pregunta:"Regresión múltiple permite:", opciones:["Evaluar influencia simultánea de varias variables independientes","Solo una variable","Analizar correlación simple","Comparar medias"], correcta:"Evaluar influencia simultánea de varias variables independientes"},
      {pregunta:"Muestreo estratificado busca:", opciones:["Dividir población en subgrupos homogéneos","Seleccionar aleatorio simple","Elegir al azar sin criterios","Solo muestras grandes"], correcta:"Dividir población en subgrupos homogéneos"}
    ]
  },
  "Filosofía Aplicada": {
    "Ética Profesional": [
      {pregunta:"Principio de no maleficencia significa:", opciones:["No causar daño","Buscar beneficio","Seguir reglas","Maximizar ganancias"], correcta:"No causar daño"},
      {pregunta:"Deontología estudia:", opciones:["Deberes y normas éticas","Consecuencias","Valores económicos","Leyes civiles"], correcta:"Deberes y normas éticas"},
      {pregunta:"Ética utilitarista evalúa:", opciones:["Maximizar bienestar general","Decisiones personales","Reglas absolutas","Obligaciones legales"], correcta:"Maximizar bienestar general"},
      {pregunta:"Ética de la virtud se enfoca en:", opciones:["Desarrollo del carácter","Consecuencias","Reglas externas","Costos y beneficios"], correcta:"Desarrollo del carácter"},
      {pregunta:"Dilema ético profesional:", opciones:["Situación de conflicto entre valores y deberes","Problema técnico","Problema administrativo","Solo cuestión de dinero"], correcta:"Situación de conflicto entre valores y deberes"}
    ],
    "Filosofía de la Ciencia": [
      {pregunta:"Falsacionismo según Popper indica:", opciones:["Teoría científicamente válida si es falsable","Toda teoría es verdadera","Teoría exacta","Ciencia pura sin errores"], correcta:"Teoría científicamente válida si es falsable"},
      {pregunta:"Paradigma según Kuhn:", opciones:["Conjunto de prácticas aceptadas en ciencia","Experimento individual","Hipótesis única","Descubrimiento casual"], correcta:"Conjunto de prácticas aceptadas en ciencia"},
      {pregunta:"Ley de demarcación distingue:", opciones:["Ciencia de pseudociencia","Verdadero de falso","Ley civil","Experimento de laboratorio"], correcta:"Ciencia de pseudociencia"},
      {pregunta:"Inducción científica se basa en:", opciones:["Observaciones y generalizaciones","Experimentos falsos","Solo teoría","Adivinación"], correcta:"Observaciones y generalizaciones"},
      {pregunta:"Razonamiento abductivo busca:", opciones:["Mejor explicación posible","Conclusión exacta","Inferencia lógica perfecta","Errores"], correcta:"Mejor explicación posible"}
    ]
  },
  "Educación Superior": {
    "Políticas Educativas": [
      {pregunta:"Bologna Process busca:", opciones:["Homogeneizar educación superior en Europa","Solo educación básica","Privatizar universidades","Evaluación laboral"], correcta:"Homogeneizar educación superior en Europa"},
      {pregunta:"Créditos ECTS representan:", opciones:["Carga académica estandarizada","Número de materias","Horas de asistencia","Años de estudio"], correcta:"Carga académica estandarizada"},
      {pregunta:"Evaluación por competencias significa:", opciones:["Medir habilidades y conocimientos aplicables","Solo calificaciones","Número de exámenes","Solo asistencia"], correcta:"Medir habilidades y conocimientos aplicables"},
      {pregunta:"Modelo de enseñanza centrado en el estudiante implica:", opciones:["El alumno como protagonista del aprendizaje","Profesor como único emisor","Solo libros","Solo teoría"], correcta:"El alumno como protagonista del aprendizaje"},
      {pregunta:"Acceso equitativo a educación superior busca:", opciones:["Igualdad de oportunidades","Seleccionar por dinero","Exclusión social","Solo mérito académico"], correcta:"Igualdad de oportunidades"}
    ],
    "Innovación Académica": [
      {pregunta:"Aprendizaje basado en proyectos fomenta:", opciones:["Resolución de problemas reales","Memorización","Exámenes tradicionales","Solo teoría"], correcta:"Resolución de problemas reales"},
      {pregunta:"Gamificación en educación se basa en:", opciones:["Uso de mecánicas de juego","Castigos","Evaluación rígida","Solo teoría"], correcta:"Uso de mecánicas de juego"},
      {pregunta:"Educación híbrida combina:", opciones:["Presencial y online","Solo online","Solo presencial","Laboratorio"], correcta:"Presencial y online"},
      {pregunta:"Evaluación formativa busca:", opciones:["Mejorar proceso de aprendizaje","Sancionar al estudiante","Solo calificación final","Ignorar errores"], correcta:"Mejorar proceso de aprendizaje"},
      {pregunta:"Aprendizaje autónomo implica:", opciones:["Responsabilidad del estudiante en su formación","Solo guía del profesor","Solo exámenes","Solo tareas"], correcta:"Responsabilidad del estudiante en su formación"}
    ]
  }
};

// module.exports = questExtremoPostgrado;
export default questExtremo;
