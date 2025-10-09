// contenido.js - Generador educativo local (temas, explicaciones, preguntas)

// -------------------- Contenido real resumido --------------------
const contenidoMaterias = {
  "Primaria": {
    "Matemáticas": ["Suma", "Resta", "Multiplicación", "División"],
    "Ciencias": ["Animales", "Plantas", "Cuerpo Humano", "Ecosistemas"],
    "Geografía": ["Continentes", "Países", "Ríos y montañas"],
    "Español": ["Ortografía básica", "Gramática", "Lectura comprensiva"],
    "Historia": ["Historia de México", "Edad Antigua", "Edad Media"],
    "Inglés": ["Saludos", "Colores", "Números"],
    "Arte": ["Colores primarios", "Formas básicas", "Técnicas simples"],
    "Educación Física": ["Ejercicios básicos", "Deportes comunes", "Higiene"]
  },
  "Secundaria": {
    "Álgebra": ["Ecuaciones", "Inecuaciones", "Polinomios"],
    "Física": ["Mecánica", "Óptica", "Electricidad básica"],
    "Química": ["Átomos", "Tabla periódica", "Reacciones químicas"],
    "Historia Universal": ["Revolución Francesa", "Edad Moderna", "Edad Contemporánea"],
    "Biología": ["Células", "Órganos", "Ecosistemas"],
    "Arte 2": ["Perspectiva", "Colores secundarios", "Historia del arte"],
    "Inglés 2": ["Tiempos verbales", "Frases comunes", "Vocabulario avanzado"]
  },
  "Preparatoria": {
    "Cálculo": ["Límites", "Derivadas", "Integrales"],
    "Física Avanzada": ["Dinámica", "Termodinámica", "Ondas"],
    "Literatura": ["Narrativa", "Poesía", "Teatro"],
    "Química": ["Química orgánica", "Química inorgánica", "Electroquímica"],
    "Historia Moderna": ["Siglo XIX", "Revoluciones", "Industrialización"],
    "Filosofía": ["Ética", "Lógica", "Metafísica"],
    "Idiomas": ["Gramática avanzada", "Comprensión lectora", "Expresión oral"]
  },
  "Universidad": {
    "Programación": ["Variables", "Funciones", "Algoritmos"],
    "Economía": ["Oferta y demanda", "Inflación", "Mercados"],
    "Ingeniería": ["Estructuras", "Materiales", "Proyectos"],
    "Cálculo Integral": ["Integrales definidas", "Integrales indefinidas", "Aplicaciones"],
    "Estadística": ["Probabilidad", "Distribuciones", "Regresión"],
    "Diseño": ["Diseño gráfico", "Tipografía", "Composición visual"],
    "Psicología": ["Teorías psicológicas", "Desarrollo humano", "Cognición"]
  },
  "Postgrado": {
    "Gestión de Proyectos": ["Planificación", "Riesgos", "Recursos"],
    "Investigación Avanzada": ["Metodología", "Estadística aplicada", "Publicación científica"],
    "Filosofía Aplicada": ["Ética profesional", "Filosofía política", "Filosofía de la ciencia"],
    "Educación Superior": ["Didáctica avanzada", "Evaluación educativa", "Innovación pedagógica"]
  }
};

// -------------------- Explicaciones --------------------
function getExplicacion(modalidad, materia, tema) {
  // Explicaciones resumidas reales para cada tema
  const explicacionesBase = {
    "Suma": "La suma consiste en combinar dos o más números para obtener un total.",
    "Resta": "La resta consiste en quitar un valor de otro para obtener la diferencia.",
    "Multiplicación": "La multiplicación es una suma repetida de un mismo número.",
    "División": "La división consiste en repartir un número en partes iguales.",
    "Animales": "Los animales son seres vivos que se alimentan, se reproducen y respiran.",
    "Plantas": "Las plantas producen su propio alimento mediante la fotosíntesis.",
    "Cuerpo Humano": "El cuerpo humano está compuesto por sistemas que realizan funciones vitales.",
    "Ecosistemas": "Los ecosistemas son comunidades de seres vivos interactuando con su entorno.",
    "Límites": "Un límite describe el valor que una función se aproxima cuando la variable se acerca a cierto número.",
    "Derivadas": "La derivada mide cómo cambia una función respecto a su variable.",
    "Integrales": "La integral calcula el área bajo una curva o la acumulación de cantidades.",
    "Mecánica": "La mecánica estudia el movimiento de los cuerpos y las fuerzas que lo producen.",
    "Óptica": "La óptica estudia la luz y su comportamiento al reflejarse o refractarse.",
    "Electricidad básica": "La electricidad es el flujo de electrones a través de un conductor.",
    "Ecuaciones": "Una ecuación es una igualdad entre expresiones algebraicas.",
    "Inecuaciones": "Una inecuación establece una relación de desigualdad entre expresiones.",
    "Polinomios": "Un polinomio es una expresión algebraica formada por sumas de términos con exponentes enteros.",
    "Variables": "Una variable es un espacio donde se almacena información que puede cambiar.",
    "Funciones": "Una función relaciona un valor de entrada con uno de salida siguiendo una regla.",
    "Algoritmos": "Un algoritmo es un conjunto de pasos ordenados para resolver un problema."
    // Se pueden agregar más explicaciones reales por materia y tema
  };

  return explicacionesBase[tema] || `Explicación sobre ${tema} de ${materia} (${modalidad}).`;
}

// -------------------- Generador de preguntas --------------------
function generarPreguntas(modalidad, materia, dificultad, cantidad = 5) {
  const temas = contenidoMaterias[modalidad][materia];
  let preguntas = [];
  
  for (let i = 0; i < cantidad; i++) {
    const tema = temas[i % temas.length];
    const correcta = `Respuesta correcta de ${tema}`;
    const dificultadExtra = dificultadNivel(dificultad);
    const opciones = [correcta];

    // Generar respuestas falsas (aleatorias y coherentes)
    while (opciones.length < 4) {
      let falsa = `Respuesta falsa ${Math.floor(Math.random() * 100)} de ${tema}`;
      if (!opciones.includes(falsa)) opciones.push(falsa);
    }

    // Mezclar opciones
    opciones.sort(() => Math.random() - 0.5);

    preguntas.push({
      pregunta: `Sobre el tema "${tema}", ¿cuál es la respuesta correcta?`,
      opciones: opciones,
      correcta: correcta
    });
  }

  return preguntas;
}

// -------------------- Dificultad --------------------
function dificultadNivel(dificultad){
  switch(dificultad){
    case "Extremadamente Fácil": return 0;
    case "Muy Fácil": return 0;
    case "Fácil": return 1;
    case "Normal": return 2;
    case "Difícil": return 3;
    case "Muy Difícil": return 4;
    case "Extremo": return 5;
    case "Imposible 💀": return 6;
    default: return 0;
  }
}
