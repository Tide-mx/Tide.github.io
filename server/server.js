// server/server.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const OPENAI_KEY = process.env.OPENAI_API_KEY;
const PORT = process.env.PORT || 3000;

// Función para elegir un tema aleatorio según dificultad
function sample(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Base de temas por modalidad, materia y nivel
const baseTemas = {
  "Primaria": {
    "Matemáticas": {
      facil: ["Suma", "Resta", "Multiplicación", "División"],
      medio: ["Fracciones", "Decimales", "Problemas combinados"],
      dificil: ["Porcentajes", "Problemas mixtos"]
    },
    "Ciencias": {
      facil: ["Animales", "Plantas", "El cuerpo humano"],
      medio: ["Ecosistemas", "Clima"],
      dificil: ["Biología molecular", "Física básica"]
    },
    "Geografía": {
      facil: ["Continentes", "Países", "Capitales"],
      medio: ["Climas del mundo", "Ríos y montañas"],
      dificil: ["Fronteras y geopolítica"]
    },
    "Español": {
      facil: ["Ortografía básica", "Gramática"],
      medio: ["Comprensión lectora", "Redacción"],
      dificil: ["Literatura infantil", "Figuras literarias"]
    },
    "Historia": {
      facil: ["Historia local", "Grandes personajes"],
      medio: ["Civilizaciones antiguas", "Épocas importantes"],
      dificil: ["Guerras históricas", "Revoluciones"]
    },
    "Inglés": {
      facil: ["Vocabulario básico", "Saludos"],
      medio: ["Gramática básica", "Lecturas cortas"],
      dificil: ["Conversación y textos avanzados"]
    },
    "Arte": {
      facil: ["Colores y formas", "Dibujo simple"],
      medio: ["Técnicas de pintura", "Historia del arte"],
      dificil: ["Corrientes artísticas", "Análisis de obras"]
    },
    "Educación Física": {
      facil: ["Juegos simples", "Correr y saltar"],
      medio: ["Coordinación y fuerza básica"],
      dificil: ["Técnicas deportivas", "Resistencia avanzada"]
    }
  },
  "Secundaria": {
    "Álgebra": { facil: ["Expresiones", "Ecuaciones simples"], medio: ["Inecuaciones", "Polinomios"], dificil: ["Sistemas de ecuaciones", "Factorización avanzada"] },
    "Física": { facil: ["Mecánica básica"], medio: ["Óptica", "Electricidad básica"], dificil: ["Dinámica avanzada", "Leyes de Newton"] },
    "Química": { facil: ["Átomos", "Tabla periódica"], medio: ["Reacciones químicas"], dificil: ["Estequiometría", "Química orgánica"] },
    "Historia Universal": { facil: ["Edad Antigua"], medio: ["Edad Media"], dificil: ["Edad Moderna y Contemporánea"] },
    "Biología": { facil: ["Células", "Reinos"], medio: ["Sistemas del cuerpo humano"], dificil: ["Genética y evolución"] },
    "Arte 2": { facil: ["Dibujo"], medio: ["Pintura"], dificil: ["Historia del arte avanzado"] },
    "Inglés 2": { facil: ["Vocabulario intermedio"], medio: ["Gramática intermedia"], dificil: ["Conversación y lectura avanzada"] }
  },
  "Preparatoria": {
    "Cálculo": { facil:["Funciones básicas"], medio:["Derivadas"], dificil:["Integrales", "Límites avanzados"] },
    "Física Avanzada": { facil:["Cinemática"], medio:["Dinámica"], dificil:["Electromagnetismo"] },
    "Literatura": { facil:["Lectura de cuentos"], medio:["Análisis de novelas"], dificil:["Literatura universal"] },
    "Química": { facil:["Química general"], medio:["Química inorgánica"], dificil:["Química orgánica avanzada"] },
    "Historia Moderna": { facil:["Revoluciones"], medio:["Imperios"], dificil:["Historia contemporánea"] },
    "Filosofía": { facil:["Conceptos básicos"], medio:["Corrientes"], dificil:["Filosofía moderna"] },
    "Idiomas": { facil:["Vocabulario"], medio:["Gramática"], dificil:["Conversación y lectura avanzada"] }
  },
  "Universidad": {
    "Programación": { facil:["Variables y funciones"], medio:["Estructuras de datos"], dificil:["Algoritmos avanzados"] },
    "Economía": { facil:["Oferta y demanda"], medio:["Macroeconomía"], dificil:["Economía internacional"] },
    "Ingeniería": { facil:["Conceptos básicos"], medio:["Diseño y cálculo"], dificil:["Proyectos complejos"] },
    "Cálculo Integral": { facil:["Integrales simples"], medio:["Integrales dobles"], dificil:["Integrales múltiples"] },
    "Estadística": { facil:["Promedios"], medio:["Desviación estándar"], dificil:["Inferencia estadística"] },
    "Diseño": { facil:["Principios básicos"], medio:["Diseño gráfico"], dificil:["Diseño avanzado"] },
    "Psicología": { facil:["Teorías básicas"], medio:["Procesos psicológicos"], dificil:["Psicología clínica avanzada"] }
  },
  "Postgrado": {
    "Gestión de Proyectos": { facil:["Planificación"], medio:["Ejecución"], dificil:["Control avanzado"] },
    "Investigación Avanzada": { facil:["Métodos básicos"], medio:["Técnicas"], dificil:["Metodología avanzada"] },
    "Filosofía Aplicada": { facil:["Conceptos"], medio:["Teorías"], dificil:["Análisis crítico"] },
    "Educación Superior": { facil:["Pedagogía"], medio:["Metodologías"], dificil:["Investigación educativa"] }
  }
};

// Elegir tema según modalidad, materia y dificultad
function elegirTema(modalidad, materia, dificultad){
  let nivel = "medio";
  if(dificultad.includes("Fácil")) nivel = "facil";
  else if(dificultad.includes("Difícil") || dificultad.includes("Extremo") || dificultad.includes("Imposible")) nivel = "dificil";
  const temas = baseTemas[modalidad]?.[materia]?.[nivel] || ["Tema general"];
  return sample(temas);
}

app.post("/generarContenido", async (req,res) => {
  const { modalidad, materia, dificultad } = req.body;
  if(!modalidad || !materia || !dificultad) return res.status(400).json({ error: "Faltan parámetros" });

  const tema = elegirTema(modalidad, materia, dificultad);

  const prompt = `
Eres un tutor experto. 
1) Explica de forma clara y adaptada al nivel ${modalidad} el tema "${tema}" de la materia "${materia}".
2) Genera 3 preguntas tipo test coherentes con ese tema (cada una con 4 opciones) y señala cuál es la correcta.
Devuélvelo en JSON con la forma:
{
  "tema": "...",
  "explicacion": "...",
  "preguntas": [
    { "pregunta":"...","opciones":["...","...","...","..."], "correcta":0 }
  ]
}
`;

  try{
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization": `Bearer ${OPENAI_KEY}`
      },
      body: JSON.stringify({
        model:"gpt-4o-mini",
        messages:[{role:"user", content:prompt}],
        temperature:0.8,
        max_tokens:1000
      })
    });

    const data = await response.json();
    const texto = data?.choices?.[0]?.message?.content || "";

    let contenido = { tema, explicacion:"", preguntas:[] };
    try {
      const parsed = JSON.parse(texto);
      contenido = { 
        tema: parsed.tema || tema, 
        explicacion: parsed.explicacion || parsed.explanation || "", 
        preguntas: parsed.preguntas || [] 
      };
    } catch(err){
      contenido.explicacion = texto;
    }

    res.json(contenido);

  } catch(err){
    console.error("Error con OpenAI:",err);
    res.status(500).json({ error: "Error generando contenido" });
  }
});

app.listen(PORT, ()=>console.log(`Servidor ejecutándose en http://localhost:${PORT}`));
