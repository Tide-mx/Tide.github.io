// Contenido de materias y temas
const contenidoMaterias = {
  "Primaria": {
    "Matemáticas": ["Suma", "Resta", "Multiplicación", "División"],
    "Ciencias": ["Animales", "Plantas", "Cuerpo Humano", "Ecosistemas"],
    "Español": ["Ortografía básica", "Gramática", "Lectura comprensiva"]
  },
  "Secundaria": {
    "Álgebra": ["Ecuaciones", "Inecuaciones", "Polinomios"],
    "Física": ["Mecánica", "Óptica", "Electricidad básica"],
    "Química": ["Átomos", "Tabla periódica", "Reacciones químicas"]
  }
  // Puedes agregar todas las demás modalidades y materias
};

// Explicación de cada tema
function getExplicacion(modalidad, materia, tema){
  return `Explicación de ${tema} de ${materia} (${modalidad}). Aquí va información detallada.`;
}

// Generar preguntas de opción múltiple
function generarPreguntas(modalidad, materia, dificultad, cantidad){
  const temas = contenidoMaterias[modalidad][materia];
  let preguntas = [];
  for(let i=0;i<cantidad;i++){
    const tema = temas[i % temas.length];
    const correcta = `Respuesta correcta de ${tema}`;
    const opciones = [correcta];
    // generar opciones falsas
    while(opciones.length < Math.min(4 + dificultadNivel(dificultad), 4)){
      opciones.push(`Opción falsa ${Math.floor(Math.random()*100)}`);
    }
    // barajar
    opciones.sort(()=>Math.random()-0.5);
    preguntas.push({pregunta:`Pregunta sobre ${tema}`, opciones:opciones, correcta:correcta});
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
