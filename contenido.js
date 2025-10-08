// Contenido de materias y temas (aleatorio y local)
const contenidoMaterias = {
  "Primaria": {
    "Matemáticas": ["Suma", "Resta", "Multiplicación", "División"],
    "Ciencias": ["Animales", "Plantas", "Cuerpo Humano", "Ecosistemas"],
    "Geografía": ["Países", "Ríos", "Montañas"],
    "Español": ["Ortografía básica", "Gramática", "Lectura comprensiva"],
    "Historia": ["Prehistoria", "Edad Media", "Edad Moderna"],
    "Inglés": ["Vocabulario básico", "Gramática básica", "Conversación"],
    "Arte": ["Dibujo", "Pintura", "Escultura"],
    "Educación Física": ["Deportes", "Ejercicios", "Salud"]
  },
  "Secundaria": {
    "Álgebra": ["Ecuaciones", "Inecuaciones", "Polinomios"],
    "Física": ["Mecánica", "Óptica", "Electricidad básica"],
    "Química": ["Átomos", "Tabla periódica", "Reacciones químicas"],
    "Historia Universal": ["Edad Media", "Renacimiento", "Revolución Industrial"],
    "Biología": ["Células", "Genética", "Evolución"],
    "Arte 2": ["Arte moderno", "Diseño", "Fotografía"],
    "Inglés 2": ["Lectura avanzada", "Gramática avanzada", "Conversación"]
  },
  "Preparatoria": {
    "Cálculo": ["Derivadas", "Integrales", "Funciones"],
    "Física Avanzada": ["Dinámica", "Termodinámica", "Electromagnetismo"],
    "Literatura": ["Poemas", "Novelas", "Cuentos"],
    "Química": ["Reacciones complejas", "Estequiometría", "Química orgánica"],
    "Historia Moderna": ["Revoluciones", "Guerras", "Tratados"],
    "Filosofía": ["Ética", "Lógica", "Metafísica"],
    "Idiomas": ["Francés", "Alemán", "Italiano"]
  },
  "Universidad": {
    "Programación": ["Variables", "Funciones", "POO", "APIs"],
    "Economía": ["Oferta y Demanda", "Inflación", "PIB"],
    "Ingeniería": ["Circuitos", "Mecánica de materiales", "Termodinámica"],
    "Cálculo Integral": ["Integrales definidas", "Integrales impropias", "Series"],
    "Estadística": ["Probabilidad", "Distribuciones", "Muestreo"],
    "Diseño": ["Diseño gráfico", "UX/UI", "Tipografía"],
    "Psicología": ["Cognición", "Comportamiento", "Psicología social"]
  },
  "Postgrado": {
    "Gestión de Proyectos": ["Planificación", "Ejecución", "Control"],
    "Investigación Avanzada": ["Métodos", "Análisis", "Publicaciones"],
    "Filosofía Aplicada": ["Ética aplicada", "Filosofía política", "Lógica avanzada"],
    "Educación Superior": ["Currículo", "Evaluación", "Metodología"]
  }
};

// Explicaciones aleatorias
function getExplicacion(modalidad, materia, tema){
  const frases = [
    `Aquí aprenderás sobre ${tema} de ${materia} (${modalidad}).`,
    `Este tema (${tema}) en ${materia} te ayudará a comprender mejor ${tema}.`,
    `Estudia ${tema} en la materia de ${materia} para mejorar tus conocimientos en ${modalidad}.`
  ];
  return frases[Math.floor(Math.random() * frases.length)];
}

// Generar preguntas aleatorias
function generarPreguntas(modalidad, materia, dificultad, cantidad){
  const temas = contenidoMaterias[modalidad][materia];
  const preguntas = [];
  for(let i=0;i<cantidad;i++){
    const tema = temas[i % temas.length];
    const correcta = `Respuesta correcta de ${tema}`;
    const opciones = [correcta];

    while(opciones.length < Math.min(4 + dificultadNivel(dificultad), 4)){
      opciones.push(`Opción falsa ${Math.floor(Math.random()*100)}`);
    }
    opciones.sort(()=>Math.random()-0.5);
    preguntas.push({
      pregunta: `Pregunta sobre ${tema}`,
      opciones: opciones,
      correcta: correcta
    });
  }
  return preguntas;
}

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
