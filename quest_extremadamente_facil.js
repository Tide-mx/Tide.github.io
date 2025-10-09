// quest_extremadamente_facil.js - Preguntas muy fáciles para todas las modalidades

const questExtFacil = {
  "Primaria": {
    "Matemáticas": {
      "Suma": [],
      "Resta": [],
      "Multiplicación": [],
      "División": []
    },
    "Ciencias": {
      "Animales": [],
      "Plantas": [],
      "Cuerpo Humano": [],
      "Ecosistemas": []
    },
    "Geografía": {
      "Países y Capitales": [],
      "Continentes": [],
      "Ríos y Montañas": []
    },
    "Español": {
      "Ortografía básica": [],
      "Gramática": [],
      "Lectura comprensiva": []
    },
    "Historia": {
      "Historia de México": [],
      "Historia Universal": []
    },
    "Inglés": {
      "Vocabulario": [],
      "Frases comunes": []
    },
    "Arte": {
      "Colores primarios": [],
      "Técnicas de dibujo": []
    },
    "Educación Física": {
      "Deportes": [],
      "Ejercicios básicos": []
    }
  },

  "Secundaria": {
    "Álgebra": {
      "Ecuaciones": [],
      "Inecuaciones": [],
      "Polinomios": []
    },
    "Física": {
      "Mecánica": [],
      "Óptica": [],
      "Electricidad básica": []
    },
    "Química": {
      "Átomos": [],
      "Tabla periódica": [],
      "Reacciones químicas": []
    },
    "Historia Universal": {
      "Edad Antigua": [],
      "Edad Media": [],
      "Edad Moderna": []
    },
    "Biología": {
      "Células": [],
      "Sistemas del cuerpo humano": [],
      "Genética básica": []
    },
    "Arte 2": {
      "Pintura": [],
      "Escultura": []
    },
    "Inglés 2": {
      "Gramática": [],
      "Conversación": []
    }
  },

  "Preparatoria": {
    "Cálculo": {
      "Límites": [],
      "Derivadas": [],
      "Integrales": []
    },
    "Física Avanzada": {
      "Cinemática": [],
      "Dinámica": [],
      "Ondas": []
    },
    "Literatura": {
      "Autores clásicos": [],
      "Corrientes literarias": []
    },
    "Química": {
      "Compuestos": [],
      "Reacciones orgánicas": []
    },
    "Historia Moderna": {
      "Revoluciones": [],
      "Guerras mundiales": []
    },
    "Filosofía": {
      "Ética": [],
      "Metafísica": []
    },
    "Idiomas": {
      "Francés": [],
      "Alemán": []
    }
  },

  "Universidad": {
    "Programación": {
      "Variables": [],
      "Funciones": [],
      "Estructuras de control": []
    },
    "Economía": {
      "Oferta y demanda": [],
      "Inflación": [],
      "Mercado laboral": []
    },
    "Ingeniería": {
      "Circuitos": [],
      "Mecánica de materiales": []
    },
    "Cálculo Integral": {
      "Integrales definidas": [],
      "Integrales indefinidas": []
    },
    "Estadística": {
      "Media y mediana": [],
      "Desviación estándar": []
    },
    "Diseño": {
      "Diseño gráfico": [],
      "UX/UI": []
    },
    "Psicología": {
      "Teorías de aprendizaje": [],
      "Trastornos psicológicos": []
    }
  },

  "Postgrado": {
    "Gestión de Proyectos": {
      "Metodologías": [],
      "Planificación": []
    },
    "Investigación Avanzada": {
      "Métodos cualitativos": [],
      "Métodos cuantitativos": []
    },
    "Filosofía Aplicada": {
      "Ética profesional": [],
      "Lógica aplicada": []
    },
    "Educación Superior": {
      "Políticas educativas": [],
      "Innovación pedagógica": []
    }
  }
};

// Función para generar 5 preguntas extremadamente fáciles por tema
function generarPreguntasExtFacil(modalidad, materia, tema) {
  const preguntas = [];

  for (let i = 0; i < 5; i++) {
    let pregunta, opciones, correcta;

    // Preguntas numéricas fáciles
    if (["Suma","Resta","Multiplicación","División",
         "Ecuaciones","Inecuaciones","Polinomios",
         "Límites","Derivadas","Integrales",
         "Integrales definidas","Integrales indefinidas",
         "Media y mediana","Desviación estándar"].includes(tema)) {
      const num1 = Math.floor(Math.random() * 10) + 1; // 1-10
      const num2 = Math.floor(Math.random() * 10) + 1;

      switch (tema) {
        case "Suma":
          correcta = num1 + num2;
          pregunta = `¿Cuánto es ${num1} + ${num2}?`;
          opciones = [
            correcta,
            correcta + 1,
            correcta - 1,
            correcta + 2
          ];
          break;

        case "Resta":
          correcta = num1;
          pregunta = `¿Cuánto es ${num1 + num2} - ${num2}?`;
          opciones = [
            correcta,
            correcta + 1,
            correcta - 1,
            correcta + 2
          ];
          break;

        case "Multiplicación":
          correcta = num1 * num2;
          pregunta = `¿Cuánto es ${num1} × ${num2}?`;
          opciones = [
            correcta,
            correcta + 1,
            correcta - 1,
            correcta + 2
          ];
          break;

        case "División":
          correcta = num1;
          pregunta = `¿Cuánto es ${num1 * num2} ÷ ${num2}?`;
          opciones = [
            correcta,
            correcta + 1,
            correcta - 1,
            correcta + 2
          ];
          break;

        default:
          correcta = num1 + num2;
          pregunta = `Calcula: ${num1} + ${num2}`;
          opciones = [
            correcta,
            correcta + 1,
            correcta - 1,
            correcta + 2
          ];
      }
    } else {
      // Preguntas teóricas muy fáciles
      pregunta = `Pregunta muy fácil sobre ${tema} - opción ${i+1}`;
      correcta = `Respuesta correcta ${i+1} de ${tema}`;
      opciones = [
        correcta,
        `Incorrecta ${i+1}-1`,
        `Incorrecta ${i+1}-2`,
        `Incorrecta ${i+1}-3`
      ];
    }

    // Mezclar opciones
    opciones = opciones.sort(() => Math.random() - 0.5);

    preguntas.push({
      pregunta,
      opciones,
      correcta
    });
  }

  return preguntas;
}

// Generar todas las preguntas extremadamente fáciles automáticamente
for (const modalidad in questExtFacil) {
  for (const materia in questExtFacil[modalidad]) {
    for (const tema in questExtFacil[modalidad][materia]) {
      questExtFacil[modalidad][materia][tema] = generarPreguntasExtFacil(modalidad, materia, tema);
    }
  }
}

// Exportar para Node.js
// module.exports = questExtFacil;
// O dejarlo global para navegador
window.questExtFacil = questExtFacil;

