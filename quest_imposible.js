// QUEST_IMPOSIBLE_PRIMARIA.js

const questImposiblePrimaria = {
  "Matemáticas": {
    "Suma": [
      (() => {
        const a = Math.floor(Math.random() * (1000000000 - 100000 + 1)) + 100000;
        const b = Math.floor(Math.random() * (1000000000 - 100000 + 1)) + 100000;
        return {
          pregunta: `¿Cuál es la suma de ${a} + ${b}?`,
          opciones: [a+b, a+b+Math.floor(Math.random()*1000), a+b-Math.floor(Math.random()*1000), a+b+Math.floor(Math.random()*5000)],
          correcta: a+b
        };
      })(),
      (() => {
        const a = Math.floor(Math.random() * (1000000000 - 100000 + 1)) + 100000;
        const b = Math.floor(Math.random() * (1000000000 - 100000 + 1)) + 100000;
        return {
          pregunta: `Suma estos números: ${a} + ${b}`,
          opciones: [a+b, a-b, b-a, a+b+Math.floor(Math.random()*2000)],
          correcta: a+b
        };
      })(),
      (() => {
        const a = Math.floor(Math.random() * (1000000000 - 100000 + 1)) + 100000;
        const b = Math.floor(Math.random() * (1000000000 - 100000 + 1)) + 100000;
        return {
          pregunta: `Calcula la suma: ${a} + ${b}`,
          opciones: [a+b, a*b, a/b, a+b+Math.floor(Math.random()*3000)],
          correcta: a+b
        };
      })(),
      (() => {
        const a = Math.floor(Math.random() * (1000000000 - 100000 + 1)) + 100000;
        const b = Math.floor(Math.random() * (1000000000 - 100000 + 1)) + 100000;
        return {
          pregunta: `Encuentra el total de ${a} + ${b}`,
          opciones: [a+b, b-a, a-b, a+b+Math.floor(Math.random()*4000)],
          correcta: a+b
        };
      })(),
      (() => {
        const a = Math.floor(Math.random() * (1000000000 - 100000 + 1)) + 100000;
        const b = Math.floor(Math.random() * (1000000000 - 100000 + 1)) + 100000;
        return {
          pregunta: `Suma gigantes: ${a} + ${b}`,
          opciones: [a+b, a+b+Math.floor(Math.random()*5000), Math.abs(a-b), a*b],
          correcta: a+b
        };
      })()
    ],
    "Resta": [
      (() => {
        const a = Math.floor(Math.random() * (1000000000 - 500000000)) + 500000000;
        const b = Math.floor(Math.random() * (100000000 - 100000 + 1)) + 100000;
        return {
          pregunta: `¿Cuál es la resta de ${a} - ${b}?`,
          opciones: [a-b, a+b, b-a, a-b+Math.floor(Math.random()*10000)],
          correcta: a-b
        };
      })(),
      (() => {
        const a = Math.floor(Math.random() * (1000000000 - 500000000)) + 500000000;
        const b = Math.floor(Math.random() * (100000000 - 100000 + 1)) + 100000;
        return {
          pregunta: `Calcula: ${a} - ${b}`,
          opciones: [a-b, b-a, a*b, a/b],
          correcta: a-b
        };
      })(),
      (() => {
        const a = Math.floor(Math.random() * (1000000000 - 500000000)) + 500000000;
        const b = Math.floor(Math.random() * (100000000 - 100000 + 1)) + 100000;
        return {
          pregunta: `Encuentra la diferencia: ${a} - ${b}`,
          opciones: [a-b, a+b, b-a, a-b+Math.floor(Math.random()*5000)],
          correcta: a-b
        };
      })(),
      (() => {
        const a = Math.floor(Math.random() * (1000000000 - 500000000)) + 500000000;
        const b = Math.floor(Math.random() * (100000000 - 100000 + 1)) + 100000;
        return {
          pregunta: `Resta extrema: ${a} - ${b}`,
          opciones: [a-b, a*b, a/b, a-b+Math.floor(Math.random()*8000)],
          correcta: a-b
        };
      })(),
      (() => {
        const a = Math.floor(Math.random() * (1000000000 - 500000000)) + 500000000;
        const b = Math.floor(Math.random() * (100000000 - 100000 + 1)) + 100000;
        return {
          pregunta: `Diferencia gigante: ${a} - ${b}`,
          opciones: [a-b, a+b, b-a, a-b+Math.floor(Math.random()*10000)],
          correcta: a-b
        };
      })()
    ],
    "Multiplicación": [
      (() => {
        const a = Math.floor(Math.random() * 1000) + 100;
        const b = Math.floor(Math.random() * 1000) + 100;
        return {
          pregunta: `Multiplica estos números: ${a} × ${b}`,
          opciones: [a*b, a+b, a-b, a*b + Math.floor(Math.random()*1000)],
          correcta: a*b
        };
      })(),
      (() => {
        const a = Math.floor(Math.random() * 2000) + 500;
        const b = Math.floor(Math.random() * 500) + 100;
        return {
          pregunta: `Producto gigante: ${a} × ${b}`,
          opciones: [a*b, a+b, b-a, a*b + Math.floor(Math.random()*2000)],
          correcta: a*b
        };
      })(),
      (() => {
        const a = Math.floor(Math.random() * 5000) + 1000;
        const b = Math.floor(Math.random() * 300) + 50;
        return {
          pregunta: `Calcula la multiplicación: ${a} × ${b}`,
          opciones: [a*b, a+b, a-b, a*b + Math.floor(Math.random()*5000)],
          correcta: a*b
        };
      })(),
      (() => {
        const a = Math.floor(Math.random() * 8000) + 2000;
        const b = Math.floor(Math.random() * 1000) + 100;
        return {
          pregunta: `Multiplicación extrema: ${a} × ${b}`,
          opciones: [a*b, a+b, b-a, a*b + Math.floor(Math.random()*10000)],
          correcta: a*b
        };
      })(),
      (() => {
        const a = Math.floor(Math.random() * 10000) + 5000;
        const b = Math.floor(Math.random() * 2000) + 100;
        return {
          pregunta: `Multiplica números gigantes: ${a} × ${b}`,
          opciones: [a*b, a+b, a-b, a*b + Math.floor(Math.random()*15000)],
          correcta: a*b
        };
      })()
    ],
    "División": [
      (() => {
        const b = Math.floor(Math.random() * 900) + 100;
        const a = b * (Math.floor(Math.random() * 1000) + 100);
        return {
          pregunta: `¿Cuál es el resultado de ${a} ÷ ${b}?`,
          opciones: [a/b, b, a-b, a+b],
          correcta: a/b
        };
      })(),
      (() => {
        const b = Math.floor(Math.random() * 800) + 100;
        const a = b * (Math.floor(Math.random() * 500) + 50);
        return {
          pregunta: `Divide: ${a} ÷ ${b}`,
          opciones: [a/b, b, a-b, a+b],
          correcta: a/b
        };
      })(),
      (() => {
        const b = Math.floor(Math.random() * 1000) + 200;
        const a = b * (Math.floor(Math.random() * 700) + 100);
        return {
          pregunta: `Cálculo de división extrema: ${a} ÷ ${b}`,
          opciones: [a/b, b, a+b, a-b],
          correcta: a/b
        };
      })(),
      (() => {
        const b = Math.floor(Math.random() * 500) + 50;
        const a = b * (Math.floor(Math.random() * 1200) + 200);
        return {
          pregunta: `División gigantesca: ${a} ÷ ${b}`,
          opciones: [a/b, b, a-b, a+b],
          correcta: a/b
        };
      })(),
      (() => {
        const b = Math.floor(Math.random() * 900) + 100;
        const a = b * (Math.floor(Math.random() * 1500) + 300);
        return {
          pregunta: `Divide estos números enormes: ${a} ÷ ${b}`,
          opciones: [a/b, b, a+b, a-b],
          correcta: a/b
        };
      })()
    ]
  },
  "Ciencias": {
    "Animales": [
      {pregunta:"¿Cuál es el mamífero más grande del planeta?", opciones:["Ballena azul","Elefante africano","Jirafa","Oso polar"], correcta:"Ballena azul"},
      {pregunta:"¿Qué tipo de animal es un pulpo?", opciones:["Molusco","Crustáceo","Anfibio","Pez"], correcta:"Molusco"},
      {pregunta:"Los murciélagos son:", opciones:["Mamíferos voladores","Aves","Reptiles","Insectos"], correcta:"Mamíferos voladores"},
      {pregunta:"Los tiburones pertenecen a:", opciones:["Peces cartilaginosos","Peces óseos","Mamíferos","Moluscos"], correcta:"Peces cartilaginosos"},
      {pregunta:"La reproducción de las ranas es:", opciones:["Ovípara","Vivípara","Asexual","Marsupial"], correcta:"Ovípara"}
    ],
        "Plantas": [
      {pregunta:"¿Cuál es la función principal de las raíces?", opciones:["Absorber agua y nutrientes","Producir semillas","Fotosintetizar","Producir frutos"], correcta:"Absorber agua y nutrientes"},
      {pregunta:"Fotosíntesis ocurre principalmente en:", opciones:["Hojas","Raíces","Tallo","Flores"], correcta:"Hojas"},
      {pregunta:"La polinización de las plantas es realizada por:", opciones:["Insectos y viento","Solamente por humanos","Solo animales grandes","Agua de lluvia"], correcta:"Insectos y viento"},
      {pregunta:"El xilema transporta:", opciones:["Agua y minerales desde raíces","Nutrientes hacia raíces","O2 a la planta","Dióxido de carbono"], correcta:"Agua y minerales desde raíces"},
      {pregunta:"Las plantas que producen semillas se llaman:", opciones:["Espermatofitas","Briofitas","Helechos","Algas"], correcta:"Espermatofitas"}
    ],
    "Cuerpo Humano": [
      {pregunta:"El corazón tiene cuántas cavidades?", opciones:["4","2","3","5"], correcta:"4"},
      {pregunta:"Los pulmones sirven para:", opciones:["Intercambio de gases","Digestión","Filtrar sangre","Producción de hormonas"], correcta:"Intercambio de gases"},
      {pregunta:"El cerebro pertenece a:", opciones:["Sistema nervioso","Sistema digestivo","Sistema circulatorio","Sistema respiratorio"], correcta:"Sistema nervioso"},
      {pregunta:"Los huesos se unen mediante:", opciones:["Articulaciones","Músculos","Tendones","Ligamentos"], correcta:"Articulaciones"},
      {pregunta:"El alimento se digiere principalmente en:", opciones:["Estómago","Boca","Intestino grueso","Esófago"], correcta:"Estómago"}
    ],
    "Ecosistemas": [
      {pregunta:"¿Qué es un ecosistema?", opciones:["Conjunto de seres vivos y su ambiente","Solo animales","Solo plantas","Solo agua y suelo"], correcta:"Conjunto de seres vivos y su ambiente"},
      {pregunta:"Los productores en un ecosistema son:", opciones:["Plantas y algas","Animales","Hongos","Bacterias"], correcta:"Plantas y algas"},
      {pregunta:"Los depredadores controlan:", opciones:["Poblaciones de presas","El clima","El suelo","La fotosíntesis"], correcta:"Poblaciones de presas"},
      {pregunta:"La materia orgánica se descompone por:", opciones:["Descomponedores","Productores","Consumidores primarios","Consumidores secundarios"], correcta:"Descomponedores"},
      {pregunta:"Un bioma se define por:", opciones:["Clima y vegetación predominante","Número de animales","Solo temperatura","Solo humedad"], correcta:"Clima y vegetación predominante"}
    ]
  },
  "Español": {
    "Ortografía básica": [
      {pregunta:"Selecciona la palabra correctamente escrita:", opciones:["Murciélago","Murcielago","Mursiélago","Murciélagoo"], correcta:"Murciélago"},
      {pregunta:"Acentúa correctamente:", opciones:["Canción","Cancion","Canciónn","Cansion"], correcta:"Canción"},
      {pregunta:"Plural de 'luz' es:", opciones:["luces","luzes","luzs","luzes"], correcta:"luces"},
      {pregunta:"La palabra 'rápido' es un:", opciones:["Adverbio","Sustantivo","Verbo","Adjetivo"], correcta:"Adjetivo"},
      {pregunta:"El antónimo de 'alto' es:", opciones:["Bajo","Grande","Pequeño","Largo"], correcta:"Bajo"}
    ],
    "Gramática": [
      {pregunta:"¿Cuál es el sujeto en: 'El perro corre rápido'?", opciones:["El perro","corre","rápido","El perro corre"], correcta:"El perro"},
      {pregunta:"Verbo en la oración: 'María canta una canción'", opciones:["canta","María","una","canción"], correcta:"canta"},
      {pregunta:"Plural de 'lápiz' es:", opciones:["lápices","lapices","lápizs","lapizs"], correcta:"lápices"},
      {pregunta:"Pronombre en: 'Ella juega en el parque'", opciones:["Ella","juega","parque","en"], correcta:"Ella"},
      {pregunta:"Adjetivo en: 'El cielo azul es bonito'", opciones:["azul","cielo","bonito","es"], correcta:"azul"}
    ],
    "Lectura comprensiva": [
      {pregunta:"Si un texto dice 'El sol brilla y hace calor', ¿qué estación probablemente es?", opciones:["Verano","Invierno","Otoño","Primavera"], correcta:"Verano"},
      {pregunta:"¿Qué idea principal expresa un párrafo sobre ahorro de agua?", opciones:["Cuidar el agua","Plantas","Animales","Ropa"], correcta:"Cuidar el agua"},
      {pregunta:"Si un personaje está triste, ¿cómo se siente?", opciones:["Triste","Feliz","Enojado","Sorprendido"], correcta:"Triste"},
      {pregunta:"Inferir: 'Juan corrió rápido para alcanzar el autobús', ¿qué podemos deducir?", opciones:["Llegó tarde","Está corriendo","Está durmiendo","Está comiendo"], correcta:"Está corriendo"},
      {pregunta:"Un título adecuado para un texto sobre reciclaje sería:", opciones:["Reciclaje y medio ambiente","Cantar canciones","Comida rápida","Viajes"], correcta:"Reciclaje y medio ambiente"}
    ]
  }
};

const questImposibleSecundaria = {
  "Álgebra": {
    "Ecuaciones": [
      {pregunta:"Resuelve para x: 54321x + 98765 = 1234567", opciones:["22","23","24","25"], correcta:"22"},
      {pregunta:"Si 8765x - 4321 = 98765, ¿x es?", opciones:["12","13","14","15"], correcta:"13"},
      {pregunta:"2x + 3x - 7 = 19876, x = ?", opciones:["3975","3976","3977","3978"], correcta:"3975"},
      {pregunta:"(12345x)/5 + 6789 = 98765, x = ?", opciones:["37","38","39","40"], correcta:"37"},
      {pregunta:"5x - 4321 = 87654, x = ?", opciones:["17595","17596","17597","17598"], correcta:"17595"}
    ],
    "Inecuaciones": [
      {pregunta:"Resuelve: 12345x + 54321 > 98765", opciones:[">3",">4",">5",">6"], correcta:">3"},
      {pregunta:"Si 2x - 9876 ≤ 54321, x ≤ ?", opciones:["32148","32149","32150","32151"], correcta:"32148"},
      {pregunta:"5x + 1234 ≥ 98765, x ≥ ?", opciones:["19406","19407","19408","19409"], correcta:"19406"},
      {pregunta:"876x - 5432 < 98765, x < ?", opciones:["116","117","118","119"], correcta:"116"},
      {pregunta:"(54321 + x)/123 < 987, x < ?", opciones:["121500","121501","121502","121503"], correcta:"121500"}
    ],
    "Polinomios": [
      {pregunta:"Multiplica: (x+1234)(x+5678)", opciones:["x² + 6912x + 7006652","x² + 6912x + 7006650","x² + 6912x + 7006648","x² + 6912x + 7006654"], correcta:"x² + 6912x + 7006652"},
      {pregunta:"Suma: 2345x² + 6789x²", opciones:["9134x²","9124x²","9130x²","9140x²"], correcta:"9134x²"},
      {pregunta:"Resta: 9876x³ - 5432x³", opciones:["4444x³","4445x³","4443x³","4446x³"], correcta:"4444x³"},
      {pregunta:"Factoriza: x² + 15x + 56", opciones:["(x+7)(x+8)","(x+5)(x+11)","(x+8)(x+7)","(x+6)(x+9)"], correcta:"(x+7)(x+8)"},
      {pregunta:"Evalúa x=2: 3x³ + 2x² - x + 5", opciones:["31","30","32","33"], correcta:"31"}
    ]
  },
  "Física": {
    "Mecánica": [
      {pregunta:"Si un objeto de 500kg acelera 9.8m/s², fuerza = ?", opciones:["4900N","4800N","5000N","4950N"], correcta:"4900N"},
      {pregunta:"Velocidad final de 0 a 100 m/s en 10s, aceleración = ?", opciones:["10 m/s²","9.5 m/s²","10.5 m/s²","11 m/s²"], correcta:"10 m/s²"},
      {pregunta:"Trabajo = fuerza x distancia, si F=200N y d=50m, W = ?", opciones:["10000J","1000J","20000J","5000J"], correcta:"10000J"},
      {pregunta:"Momento = masa x velocidad, si m=80kg y v=20 m/s, p=?", opciones:["1600 kg·m/s","1500 kg·m/s","1650 kg·m/s","1700 kg·m/s"], correcta:"1600 kg·m/s"},
      {pregunta:"Potencia = trabajo/t, W=5000J, t=25s, P = ?", opciones:["200 W","190 W","210 W","205 W"], correcta:"200 W"}
    ],
    "Óptica": [
      {pregunta:"Índice de refracción n = c/v, si v=2.25x10^8 m/s, n = ?", opciones:["1.33","1.44","1.5","1.2"], correcta:"1.33"},
      {pregunta:"Ley de Snell: n1sinθ1=n2sinθ2, θ1=30°, n1=1, n2=1.5, θ2=?", opciones:["19.47°","20°","18°","21°"], correcta:"19.47°"},
      {pregunta:"Reflexión: ángulo de incidencia 45°, ángulo de reflexión = ?", opciones:["45°","40°","50°","55°"], correcta:"45°"},
      {pregunta:"Distancia focal f = 10cm, objeto a 30cm, imagen a ?", opciones:["15 cm","20 cm","25 cm","12 cm"], correcta:"15 cm"},
      {pregunta:"Lente convergente produce imagen real si el objeto está a?", opciones:["Mayor f","Menor f","Exactamente f","No importa"], correcta:"Mayor f"}
    ],
    "Electricidad básica": [
      {pregunta:"V=IR, si V=220V y R=44Ω, I=?", opciones:["5A","4.5A","5.1A","5.2A"], correcta:"5A"},
      {pregunta:"Potencia P=VI, si V=110V, I=2A, P=?", opciones:["220W","200W","210W","215W"], correcta:"220W"},
      {pregunta:"Resistencia total de dos resistencias en serie R1=10Ω,R2=15Ω es ?", opciones:["25Ω","20Ω","30Ω","22Ω"], correcta:"25Ω"},
      {pregunta:"Resistencia total de dos resistencias en paralelo R1=10Ω,R2=20Ω es ?", opciones:["6.67Ω","7Ω","5Ω","8Ω"], correcta:"6.67Ω"},
      {pregunta:"Carga Q=It, I=2A, t=3s, Q=?", opciones:["6C","5C","7C","4C"], correcta:"6C"}
    ]
  },
  "Química": {
    "Átomos": [
      {pregunta:"Número de protones en carbono?", opciones:["6","12","14","8"], correcta:"6"},
      {pregunta:"Número de neutrones en C-14?", opciones:["8","6","7","14"], correcta:"8"},
      {pregunta:"Electrones en Na⁺?", opciones:["10","11","12","9"], correcta:"10"},
      {pregunta:"Símbolo del oxígeno?", opciones:["O","Ox","Oxg","O2"], correcta:"O"},
      {pregunta:"Elemento más ligero?", opciones:["Hidrógeno","Helio","Carbono","Litio"], correcta:"Hidrógeno"}
    ],
    "Tabla periódica": [
      {pregunta:"Elemento con símbolo 'Fe'?", opciones:["Hierro","Flúor","Fósforo","Francio"], correcta:"Hierro"},
      {pregunta:"Número atómico del Oxígeno?", opciones:["8","6","16","12"], correcta:"8"},
      {pregunta:"Elemento gaseoso?", opciones:["Neón","Sodio","Hierro","Cobre"], correcta:"Neón"},
      {pregunta:"Grupo de los alcalinos?", opciones:["1","2","17","18"], correcta:"1"},
      {pregunta:"Elemento más electronegativo?", opciones:["Flúor","Oxígeno","Nitrógeno","Carbono"], correcta:"Flúor"}
    ],
    "Reacciones químicas": [
      {pregunta:"Combustión del metano, producto principal?", opciones:["CO2 y H2O","CO y H2","CH4","O2"], correcta:"CO2 y H2O"},
      {pregunta:"Oxidación es:", opciones:["Pérdida de electrones","Ganancia de electrones","Neutralización","Combustión"], correcta:"Pérdida de electrones"},
      {pregunta:"Reducción es:", opciones:["Ganancia de electrones","Pérdida de electrones","Combustión","Disolución"], correcta:"Ganancia de electrones"},
      {pregunta:"HCl + NaOH → ?", opciones:["NaCl + H2O","H2 + Cl2","H2O2","NaOH2"], correcta:"NaCl + H2O"},
      {pregunta:"Reacción endotérmica:", opciones:["Absorbe energía","Libera energía","Es neutra","No ocurre"], correcta:"Absorbe energía"}
    ]
  },
  "Historia Universal": {
    "Edad Antigua": [
      {pregunta:"Civilización que construyó pirámides?", opciones:["Egipto","Roma","Grecia","Mesopotamia"], correcta:"Egipto"},
      {pregunta:"Escritura cuneiforme pertenece a?", opciones:["Mesopotamia","Egipto","China","India"], correcta:"Mesopotamia"},
      {pregunta:"Filósofo griego conocido como padre de la filosofía?", opciones:["Sócrates","Platón","Aristóteles","Pitágoras"], correcta:"Sócrates"},
      {pregunta:"Imperio con leyendas de samuráis?", opciones:["Japón","China","Egipto","Roma"], correcta:"Japón"},
      {pregunta:"Año aproximado de la caída de Roma?", opciones:["476","500","450","400"], correcta:"476"}
    ],
    "Edad Media": [
      {pregunta:"Evento clave de 1096?", opciones:["Primera Cruzada","Caída de Roma","Revolución Francesa","Independencia de EE.UU."], correcta:"Primera Cruzada"},
      {pregunta:"Imperio que dominaba Europa Occidental?", opciones:["Imperio Carolingio","Imperio Romano","Imperio Bizantino","Imperio Otomano"], correcta:"Imperio Carolingio"},
      {pregunta:"Sistema feudal se basaba en?", opciones:["Relaciones de vasallaje","Democracia","Capitalismo","Comercio"], correcta:"Relaciones de vasallaje"},
      {pregunta:"La peste negra ocurrió en?", opciones:["Siglo XIV","Siglo XIII","Siglo XV","Siglo XVI"], correcta:"Siglo XIV"},
      {pregunta:"Castillos eran típicos de?", opciones:["Edad Media","Edad Moderna","Edad Antigua","Edad Contemporánea"], correcta:"Edad Media"}
    ]
  }
};

// quest_imposible_prepa.js
const questImposiblePrepa = {
  "Preparatoria": {
    "Cálculo": [
      {
        tema: "Derivadas",
        preguntas: [
          {
            pregunta: "Halla la derivada de f(x) = 5x^100 - 3x^50 + 7",
            opciones: [
              "500x^99 - 150x^49",
              "500x^99 - 150x^51",
              "5x^99 - 3x^49",
              "50x^99 - 150x^49"
            ],
            correcta: "500x^99 - 150x^49"
          },
          {
            pregunta: "Encuentra la derivada de f(x) = ln(x^5 + 3x^3 + 7)",
            opciones: [
              "(5x^4 + 9x^2) / (x^5 + 3x^3 + 7)",
              "(5x^4 + 9x^2) / (x^5 + 3x^3)",
              "5x^4 / (x^5 + 3x^3 + 7)",
              "No se puede derivar"
            ],
            correcta: "(5x^4 + 9x^2) / (x^5 + 3x^3 + 7)"
          },
          {
            pregunta: "Calcula la derivada de f(x) = e^(x^4 + 2x^2)",
            opciones: [
              "(4x^3 + 4x)e^(x^4 + 2x^2)",
              "(4x^3 + 2x)e^(x^4 + 2x^2)",
              "(x^4 + 2x^2)e^(x^4 + 2x^2)",
              "e^(x^4 + 2x^2)"
            ],
            correcta: "(4x^3 + 4x)e^(x^4 + 2x^2)"
          },
          {
            pregunta: "Encuentra f'(x) si f(x) = sin(x^3 + x)",
            opciones: [
              "(3x^2 + 1)cos(x^3 + x)",
              "cos(x^3 + x)",
              "(3x^2 + 1)sin(x^3 + x)",
              "No se puede derivar"
            ],
            correcta: "(3x^2 + 1)cos(x^3 + x)"
          },
          {
            pregunta: "Calcula la derivada de f(x) = (x^5 + 2x^3 + 7)^4",
            opciones: [
              "4(x^5 + 2x^3 + 7)^3 (5x^4 + 6x^2)",
              "4(x^5 + 2x^3 + 7)^3 (5x^4 + 2x^2)",
              "(x^5 + 2x^3 + 7)^3",
              "No se puede derivar"
            ],
            correcta: "4(x^5 + 2x^3 + 7)^3 (5x^4 + 6x^2)"
          }
        ]
      },
      {
        tema: "Integrales",
        preguntas: [
          {
            pregunta: "Calcula ∫ (5x^4 + 2x^2) dx",
            opciones: [
              "x^5 + (2/3)x^3 + C",
              "5x^5 + 2x^3 + C",
              "x^5 + 2x^3 + C",
              "No se puede integrar"
            ],
            correcta: "x^5 + (2/3)x^3 + C"
          },
          {
            pregunta: "Calcula ∫ e^(3x) dx",
            opciones: [
              "1/3 e^(3x) + C",
              "e^(3x) + C",
              "3e^(3x) + C",
              "No se puede integrar"
            ],
            correcta: "1/3 e^(3x) + C"
          },
          {
            pregunta: "∫ (x^2 + 5x + 6) dx",
            opciones: [
              "x^3/3 + 5x^2/2 + 6x + C",
              "x^3 + 5x^2 + 6x + C",
              "x^3/3 + 5x^2 + 6 + C",
              "No se puede integrar"
            ],
            correcta: "x^3/3 + 5x^2/2 + 6x + C"
          },
          {
            pregunta: "Calcula ∫ 1/(x^2 + 1) dx",
            opciones: [
              "arctan(x) + C",
              "ln|x| + C",
              "1/(x^2 + 1) + C",
              "No se puede integrar"
            ],
            correcta: "arctan(x) + C"
          },
          {
            pregunta: "∫ (2x^3 - x + 1) dx",
            opciones: [
              "x^4/2 - x^2/2 + x + C",
              "x^4/2 - x^2 + x + C",
              "x^4 - x^2/2 + x + C",
              "No se puede integrar"
            ],
            correcta: "x^4/2 - x^2/2 + x + C"
          }
        ]
      }
    ],
    "Física Avanzada": [
      {
        tema: "Cinemática",
        preguntas: [
          {
            pregunta: "Un objeto se mueve con aceleración constante 9.8 m/s². Calcula su velocidad después de 15 s si partió del reposo.",
            opciones: [
              "147 m/s",
              "150 m/s",
              "138 m/s",
              "No se puede calcular"
            ],
            correcta: "147 m/s"
          },
          {
            pregunta: "Una pelota cae desde 100 m. Calcula el tiempo que tarda en llegar al suelo.",
            opciones: [
              "4.52 s",
              "5 s",
              "4 s",
              "No se puede calcular"
            ],
            correcta: "4.52 s"
          },
          {
            pregunta: "Un coche recorre 200 m en 10 s acelerando uniformemente desde 0. Calcula su aceleración.",
            opciones: [
              "4 m/s²",
              "5 m/s²",
              "3 m/s²",
              "No se puede calcular"
            ],
            correcta: "4 m/s²"
          },
          {
            pregunta: "Si un objeto con masa 10 kg recibe una fuerza de 50 N, calcula su aceleración.",
            opciones: [
              "5 m/s²",
              "10 m/s²",
              "50 m/s²",
              "No se puede calcular"
            ],
            correcta: "5 m/s²"
          },
          {
            pregunta: "Una partícula tiene velocidad inicial 20 m/s y acelera a 2 m/s² durante 5 s. Calcula la distancia recorrida.",
            opciones: [
              "75 m",
              "50 m",
              "100 m",
              "No se puede calcular"
            ],
            correcta: "75 m"
          }
        ]
      }
      // Agregar más temas de Física avanzada si quieres
    ],
    "Literatura": [
      {
        tema: "Análisis literario",
        preguntas: [
          {
            pregunta: "¿Cuál es la técnica narrativa principal en 'Cien años de soledad'?",
            opciones: ["Realismo mágico", "Naturalismo", "Surrealismo", "Modernismo"],
            correcta: "Realismo mágico"
          },
          {
            pregunta: "El concepto de 'Stream of consciousness' se refiere a:",
            opciones: ["Fluir de conciencia", "Diálogo interno", "Narración objetiva", "Monólogo externo"],
            correcta: "Fluir de conciencia"
          },
          {
            pregunta: "¿Qué autor es conocido por la poesía vanguardista?",
            opciones: ["Vicente Huidobro", "Pablo Neruda", "Octavio Paz", "Gabriel García Márquez"],
            correcta: "Vicente Huidobro"
          },
          {
            pregunta: "La obra 'La Odisea' pertenece a:",
            opciones: ["Literatura griega", "Literatura romana", "Literatura medieval", "Literatura renacentista"],
            correcta: "Literatura griega"
          },
          {
            pregunta: "El recurso literario 'hipérbole' consiste en:",
            opciones: ["Exageración", "Contradicción", "Metáfora", "Ironía"],
            correcta: "Exageración"
          }
        ]
      }
    ],
    "Química": [
      {
        tema: "Reacciones químicas",
        preguntas: [
          {
            pregunta: "¿Cuál es el producto principal de la reacción de combustión del metano CH4?",
            opciones: ["CO2 y H2O", "CO y H2", "CH3OH", "O2 y H2O"],
            correcta: "CO2 y H2O"
          },
          {
            pregunta: "El pH de una solución neutra es:",
            opciones: ["7", "0", "14", "1"],
            correcta: "7"
          },
          {
            pregunta: "¿Qué tipo de enlace tiene el NaCl?",
            opciones: ["Iónico", "Covalente", "Metálico", "Polar"],
            correcta: "Iónico"
          },
          {
            pregunta: "¿Cuál es el número de Avogadro?",
            opciones: ["6.022e23", "3.14", "9.8", "1e5"],
            correcta: "6.022e23"
          },
          {
            pregunta: "La electronegatividad mide:",
            opciones: ["Atracción de electrones", "Masa atómica", "Radio atómico", "Energía de enlace"],
            correcta: "Atracción de electrones"
          }
        ]
      }
    ],
    "Historia Moderna": [
      {
        tema: "Revoluciones",
        preguntas: [
          {
            pregunta: "En qué año comenzó la Revolución Francesa?",
            opciones: ["1789", "1776", "1804", "1812"],
            correcta: "1789"
          },
          {
            pregunta: "¿Quién lideró la independencia de México?",
            opciones: ["Miguel Hidalgo", "Simón Bolívar", "José de San Martín", "Benito Juárez"],
            correcta: "Miguel Hidalgo"
          },
          {
            pregunta: "El Tratado de Versalles terminó la Primera Guerra Mundial en:",
            opciones: ["1919", "1918", "1920", "1917"],
            correcta: "1919"
          },
          {
            pregunta: "¿Cuál fue la causa principal de la Revolución Industrial?",
            opciones: ["Innovación tecnológica", "Guerras", "Religión", "Colonización"],
            correcta: "Innovación tecnológica"
          },
          {
            pregunta: "La caída del Imperio Romano de Occidente fue en:",
            opciones: ["476 d.C.", "500 d.C.", "410 d.C.", "395 d.C."],
            correcta: "476 d.C."
          }
        ]
      }
    ],
    "Filosofía": [
      {
        tema: "Ramas de la filosofía",
        preguntas: [
          {
            pregunta: "La ética estudia:",
            opciones: ["El bien y el mal", "La física", "La economía", "La gramática"],
            correcta: "El bien y el mal"
          },
          {
            pregunta: "La metafísica trata sobre:",
            opciones: ["La naturaleza de la realidad", "La política", "El lenguaje", "La historia"],
            correcta: "La naturaleza de la realidad"
          },
          {
            pregunta: "El racionalismo defiende:",
            opciones: ["La razón como fuente de conocimiento", "La experiencia", "La emoción", "La fe"],
            correcta: "La razón como fuente de conocimiento"
          },
          {
            pregunta: "El empirismo se basa en:",
            opciones: ["La experiencia", "La lógica pura", "El arte", "La historia"],
            correcta: "La experiencia"
          },
          {
            pregunta: "El existencialismo se centra en:",
            opciones: ["La libertad individual y responsabilidad", "La física", "La matemática", "La sociología"],
            correcta: "La libertad individual y responsabilidad"
          }
        ]
      }
    ],
    "Idiomas": [
      {
        tema: "Gramática inglesa",
        preguntas: [
          {
            pregunta: "Selecciona la forma correcta del verbo 'to be' en presente para 'he':",
            opciones: ["is", "am", "are", "be"],
            correcta: "is"
          },
          {
            pregunta: "El plural de 'mouse' es:",
            opciones: ["mice", "mouses", "mouse", "mices"],
            correcta: "mice"
          },
          {
            pregunta: "Selecciona la oración correcta:",
            opciones: ["She has a book.", "She have a book.", "She is has a book.", "She are a book."],
            correcta: "She has a book."
          },
          {
            pregunta: "Traduce al inglés: 'Ellos están corriendo'",
            opciones: ["They are running", "They is running", "They running", "They runned"],
            correcta: "They are running"
          },
          {
            pregunta: "Selecciona el adjetivo en la oración: 'The red car is fast.'",
            opciones: ["red", "car", "fast", "is"],
            correcta: "red"
          }
        ]
      }
    ]
  }
};

// quest_imposible_universidad.js
const questImposibleUniversidad = {
  "Universidad": {
    "Programación": [
      {
        tema: "Algoritmos avanzados",
        preguntas: [
          {
            pregunta: "¿Cuál es la complejidad de tiempo promedio del Quicksort?",
            opciones: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
            correcta: "O(n log n)"
          },
          {
            pregunta: "En programación dinámica, ¿qué se almacena normalmente en la tabla?",
            opciones: ["Subproblemas resueltos", "Variables globales", "Funciones externas", "Banderas de control"],
            correcta: "Subproblemas resueltos"
          },
          {
            pregunta: "¿Qué estructura de datos se utiliza para implementar un BFS?",
            opciones: ["Cola", "Pila", "Árbol binario", "Lista enlazada"],
            correcta: "Cola"
          },
          {
            pregunta: "En complejidad, P vs NP se refiere a:",
            opciones: ["Problemas solucionables en tiempo polinómico", "Problemas resueltos con memoria infinita", "Problemas en tiempo exponencial", "Problemas irresolubles"],
            correcta: "Problemas solucionables en tiempo polinómico"
          },
          {
            pregunta: "¿Qué lenguaje de programación es conocido por manejo avanzado de concurrencia?",
            opciones: ["Go", "HTML", "CSS", "SQL"],
            correcta: "Go"
          }
        ]
      }
    ],
    "Economía": [
      {
        tema: "Microeconomía",
        preguntas: [
          {
            pregunta: "En un mercado perfectamente competitivo, ¿qué determina el precio?",
            opciones: ["Oferta y demanda", "Gobierno", "Monopolio", "Intervención externa"],
            correcta: "Oferta y demanda"
          },
          {
            pregunta: "Elasticidad-precio de la demanda mide:",
            opciones: ["Sensibilidad de la demanda ante cambios de precio", "Costos de producción", "Utilidad marginal", "Ingreso total"],
            correcta: "Sensibilidad de la demanda ante cambios de precio"
          },
          {
            pregunta: "El excedente del consumidor representa:",
            opciones: ["Beneficio recibido por los consumidores", "Pérdida de empresa", "Costo total", "Inflación"],
            correcta: "Beneficio recibido por los consumidores"
          },
          {
            pregunta: "La función de producción mide:",
            opciones: ["Relación entre insumos y productos", "Ganancias de empresa", "Demanda agregada", "Inflación"],
            correcta: "Relación entre insumos y productos"
          },
          {
            pregunta: "Ceteris paribus significa:",
            opciones: ["Manteniendo todo lo demás constante", "Inflación ajustada", "Cálculo de costos", "Eficiencia marginal"],
            correcta: "Manteniendo todo lo demás constante"
          }
        ]
      }
    ],
    "Ingeniería": [
      {
        tema: "Circuitos eléctricos",
        preguntas: [
          {
            pregunta: "Ley de Ohm establece:",
            opciones: ["V = IR", "P = VI", "I = V/P", "V = I^2 R"],
            correcta: "V = IR"
          },
          {
            pregunta: "Un condensador almacena:",
            opciones: ["Carga eléctrica", "Energía mecánica", "Calor", "Magnetismo"],
            correcta: "Carga eléctrica"
          },
          {
            pregunta: "Potencia en corriente alterna se calcula con:",
            opciones: ["P = VI cos φ", "P = V/I", "P = I^2 R", "P = V + I"],
            correcta: "P = VI cos φ"
          },
          {
            pregunta: "Ley de Kirchhoff de corrientes se basa en:",
            opciones: ["Conservación de carga", "Conservación de energía", "Resistencia total", "Voltaje"],
            correcta: "Conservación de carga"
          },
          {
            pregunta: "Impedancia de un circuito RC en serie:",
            opciones: ["Z = √(R² + (1/ωC)²)", "Z = R + 1/C", "Z = R - 1/ωC", "Z = R² + C²"],
            correcta: "Z = √(R² + (1/ωC)²)"
          }
        ]
      }
    ],
    "Cálculo Integral": [
      {
        tema: "Integrales avanzadas",
        preguntas: [
          {
            pregunta: "∫ x^3 e^(x^2) dx",
            opciones: ["1/2 (x^2 - 1) e^(x^2) + C", "e^(x^2)/4 + C", "x^4 e^(x^2)/4 + C", "No se puede integrar"],
            correcta: "1/2 (x^2 - 1) e^(x^2) + C"
          },
          {
            pregunta: "∫ sin^3(x) dx",
            opciones: ["-cos(x) + cos^3(x)/3 + C", "cos(x) - cos^3(x)/3 + C", "-cos(x) - cos^3(x)/3 + C", "No se puede integrar"],
            correcta: "-cos(x) + cos^3(x)/3 + C"
          },
          {
            pregunta: "∫ 1/(x^2 - 4) dx",
            opciones: ["1/4 ln| (x-2)/(x+2) | + C", "ln|x-2| + C", "1/(x-2) + 1/(x+2) + C", "No se puede integrar"],
            correcta: "1/4 ln| (x-2)/(x+2) | + C"
          },
          {
            pregunta: "∫ e^(2x) sin(3x) dx",
            opciones: ["(2/13)e^(2x) sin(3x) - (3/13)e^(2x) cos(3x) + C", "e^(2x) sin(3x)/5 + C", "No se puede integrar", "(1/5)e^(2x) sin(3x) + C"],
            correcta: "(2/13)e^(2x) sin(3x) - (3/13)e^(2x) cos(3x) + C"
          },
          {
            pregunta: "∫ ln(x)/x dx",
            opciones: ["(ln(x))^2 / 2 + C", "ln(x) + C", "1/x + C", "No se puede integrar"],
            correcta: "(ln(x))^2 / 2 + C"
          }
        ]
      }
    ],
    "Estadística": [
      {
        tema: "Distribuciones",
        preguntas: [
          {
            pregunta: "La media de {2,4,6,8,10} es:",
            opciones: ["6", "5", "7", "4"],
            correcta: "6"
          },
          {
            pregunta: "Varianza de {1,2,3} es:",
            opciones: ["2/3", "1", "1/3", "3"],
            correcta: "2/3"
          },
          {
            pregunta: "Desviación estándar es:",
            opciones: ["Raíz cuadrada de la varianza", "Varianza al cuadrado", "Media aritmética", "Moda"],
            correcta: "Raíz cuadrada de la varianza"
          },
          {
            pregunta: "Distribución normal tiene media μ y desviación σ. La probabilidad total es:",
            opciones: ["1", "0", "μ", "σ"],
            correcta: "1"
          },
          {
            pregunta: "En estadística, el p-valor mide:",
            opciones: ["Evidencia contra la hipótesis nula", "Media de la muestra", "Varianza poblacional", "Moda"],
            correcta: "Evidencia contra la hipótesis nula"
          }
        ]
      }
    ],
    "Diseño": [
      {
        tema: "Teoría del color",
        preguntas: [
          {
            pregunta: "Colores complementarios son:",
            opciones: ["Opuestos en el círculo cromático", "Similares en tono", "Todos cálidos", "Todos fríos"],
            correcta: "Opuestos en el círculo cromático"
          },
          {
            pregunta: "La saturación se refiere a:",
            opciones: ["Intensidad del color", "Brillo", "Contraste", "Tamaño"],
            correcta: "Intensidad del color"
          },
          {
            pregunta: "Tipografía serif se caracteriza por:",
            opciones: ["Pequeñas líneas al final de los caracteres", "Sin adornos", "Solo mayúsculas", "Colores brillantes"],
            correcta: "Pequeñas líneas al final de los caracteres"
          },
          {
            pregunta: "Regla de los tercios se aplica para:",
            opciones: ["Composición visual", "Elección de color", "Tipografía", "Resolución"],
            correcta: "Composición visual"
          },
          {
            pregunta: "Balance simétrico transmite:",
            opciones: ["Estabilidad", "Movimiento", "Caos", "Desorden"],
            correcta: "Estabilidad"
          }
        ]
      }
    ],
    "Psicología": [
      {
        tema: "Teorías cognitivas",
        preguntas: [
          {
            pregunta: "Piaget estudió:",
            opciones: ["Desarrollo cognitivo infantil", "Comportamiento animal", "Economía", "Física"],
            correcta: "Desarrollo cognitivo infantil"
          },
          {
            pregunta: "El condicionamiento operante es de:",
            opciones: ["Skinner", "Freud", "Piaget", "Maslow"],
            correcta: "Skinner"
          },
          {
            pregunta: "La teoría de Maslow se llama:",
            opciones: ["Jerarquía de necesidades", "Condicionamiento clásico", "Aprendizaje observacional", "Teoría del apego"],
            correcta: "Jerarquía de necesidades"
          },
          {
            pregunta: "El efecto Stroop mide:",
            opciones: ["Atención selectiva", "Memoria a largo plazo", "Motivación", "Emoción"],
            correcta: "Atención selectiva"
          },
          {
            pregunta: "La disonancia cognitiva se refiere a:",
            opciones: ["Incongruencia entre creencias y acciones", "Conflicto social", "Fallo de memoria", "Emoción intensa"],
            correcta: "Incongruencia entre creencias y acciones"
          }
        ]
      }
    ]
  }
};

// quest_imposible_postgrado.js
const questImposiblePostgrado = {
  "Postgrado": {
    "Gestión de Proyectos": [
      {
        tema: "Metodologías ágiles",
        preguntas: [
          {
            pregunta: "En Scrum, ¿quién es responsable de priorizar el backlog?",
            opciones: ["Product Owner", "Scrum Master", "Equipo de desarrollo", "Stakeholders"],
            correcta: "Product Owner"
          },
          {
            pregunta: "Kanban utiliza principalmente:",
            opciones: ["Visualización de flujo de trabajo", "Sprints de duración fija", "Evaluación de desempeño individual", "Presupuesto anual"],
            correcta: "Visualización de flujo de trabajo"
          },
          {
            pregunta: "PMBOK es un estándar para:",
            opciones: ["Gestión de proyectos", "Contabilidad", "Marketing digital", "Diseño gráfico"],
            correcta: "Gestión de proyectos"
          },
          {
            pregunta: "Critical Path Method se usa para:",
            opciones: ["Determinar la duración mínima del proyecto", "Diseñar productos", "Evaluar ventas", "Contratar personal"],
            correcta: "Determinar la duración mínima del proyecto"
          },
          {
            pregunta: "En proyectos complejos, la gestión de riesgos incluye:",
            opciones: ["Identificación, evaluación y mitigación", "Solo seguimiento financiero", "Diseño gráfico", "Ninguna opción"],
            correcta: "Identificación, evaluación y mitigación"
          }
        ]
      }
    ],
    "Investigación Avanzada": [
      {
        tema: "Metodologías de investigación",
        preguntas: [
          {
            pregunta: "El enfoque mixto combina:",
            opciones: ["Cualitativo y cuantitativo", "Experimental y observacional", "Teórico y práctico", "Solo cualitativo"],
            correcta: "Cualitativo y cuantitativo"
          },
          {
            pregunta: "Validez interna se refiere a:",
            opciones: ["Control de variables para establecer causalidad", "Diseño gráfico del estudio", "Tamaño de la muestra", "Promedio de resultados"],
            correcta: "Control de variables para establecer causalidad"
          },
          {
            pregunta: "Muestreo estratificado busca:",
            opciones: ["Representar subgrupos de la población", "Tomar la muestra más fácil", "Elegir solo individuos disponibles", "Maximizar errores"],
            correcta: "Representar subgrupos de la población"
          },
          {
            pregunta: "En investigación avanzada, triangulación significa:",
            opciones: ["Usar múltiples métodos o fuentes", "Duplicar el análisis estadístico", "Estudiar un solo caso", "Ignorar los datos atípicos"],
            correcta: "Usar múltiples métodos o fuentes"
          },
          {
            pregunta: "El sesgo de confirmación ocurre cuando:",
            opciones: ["Se buscan solo evidencias que confirmen hipótesis", "Se revisa toda la literatura", "Se usa software estadístico", "Se elige muestra aleatoria"],
            correcta: "Se buscan solo evidencias que confirmen hipótesis"
          }
        ]
      }
    ],
    "Filosofía Aplicada": [
      {
        tema: "Ética avanzada",
        preguntas: [
          {
            pregunta: "El utilitarismo busca:",
            opciones: ["Maximizar la felicidad general", "Seguir normas religiosas", "Cumplir leyes locales", "Minimizar el dolor individual"],
            correcta: "Maximizar la felicidad general"
          },
          {
            pregunta: "El deontologismo enfatiza:",
            opciones: ["Cumplir deberes independientemente de consecuencias", "Maximizar resultados", "Evaluación de riesgo", "Estrategia empresarial"],
            correcta: "Cumplir deberes independientemente de consecuencias"
          },
          {
            pregunta: "Ética profesional considera:",
            opciones: ["Responsabilidades y valores en un contexto laboral", "Solo leyes nacionales", "Preferencias personales", "Marketing"],
            correcta: "Responsabilidades y valores en un contexto laboral"
          },
          {
            pregunta: "El dilema del tranvía se usa para estudiar:",
            opciones: ["Toma de decisiones éticas", "Producción industrial", "Matemática avanzada", "Teoría política"],
            correcta: "Toma de decisiones éticas"
          },
          {
            pregunta: "Ética de la inteligencia artificial analiza:",
            opciones: ["Impacto moral de sistemas autónomos", "Diseño de software", "Procesamiento de datos", "Costo de producción"],
            correcta: "Impacto moral de sistemas autónomos"
          }
        ]
      }
    ],
    "Educación Superior": [
      {
        tema: "Políticas educativas",
        preguntas: [
          {
            pregunta: "Un modelo de acreditación universitaria busca:",
            opciones: ["Garantizar calidad académica", "Aumentar matrícula", "Reducir costos", "Marketing institucional"],
            correcta: "Garantizar calidad académica"
          },
          {
            pregunta: "Evaluación formativa se enfoca en:",
            opciones: ["Mejorar aprendizaje durante el proceso", "Dar calificación final", "Incrementar presupuesto", "Planificar infraestructura"],
            correcta: "Mejorar aprendizaje durante el proceso"
          },
          {
            pregunta: "Educación inclusiva busca:",
            opciones: ["Acceso equitativo a todos los estudiantes", "Solo estudiantes sobresalientes", "Privilegiar carreras específicas", "Reducir costos"],
            correcta: "Acceso equitativo a todos los estudiantes"
          },
          {
            pregunta: "Currículo flexible permite:",
            opciones: ["Adaptación a necesidades y contextos", "Estandarización rígida", "Reducir horas de clase", "Solo investigación"],
            correcta: "Adaptación a necesidades y contextos"
          },
          {
            pregunta: "Aprendizaje basado en proyectos se centra en:",
            opciones: ["Resolución de problemas reales", "Solo teoría", "Exámenes estandarizados", "Memorización de conceptos"],
            correcta: "Resolución de problemas reales"
          }
        ]
      }
    ]
  }
};

export default questImposible;


