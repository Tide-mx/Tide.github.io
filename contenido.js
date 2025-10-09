// -------------------- contenido.js (Primaria) --------------------

const contenidoMaterias = {
  "Primaria": {
    "Matemáticas": ["Suma", "Resta", "Multiplicación", "División", "Fracciones"],
    "Ciencias": ["Animales", "Plantas", "Cuerpo Humano", "Ecosistemas", "Clima"],
    "Geografía": ["Continentes", "Países", "Ríos", "Montañas", "Mapas"],
    "Español": ["Ortografía básica", "Gramática", "Lectura comprensiva", "Redacción", "Poesía"],
    "Historia": ["Historia de México", "Civilizaciones antiguas", "Época colonial", "Independencia", "Revolución"],
    "Inglés": ["Saludos", "Vocabulario básico", "Gramática básica", "Colores", "Números"],
    "Arte": ["Dibujo", "Pintura", "Música", "Escultura", "Teatro"],
    "Educación Física": ["Carrera", "Saltos", "Coordinación", "Juegos", "Estiramientos"]
  }
};

// Explicaciones de todos los temas de primaria
function getExplicacion(modalidad, materia, tema){
  if(modalidad !== "Primaria") return `Explicación de ${tema} de ${materia} (${modalidad}).`;

  const explicaciones = {
    "Matemáticas": {
      "Suma": "La suma consiste en añadir dos o más números para obtener un total. Ejemplo: 2 + 3 = 5.",
      "Resta": "La resta consiste en quitar un número de otro para obtener la diferencia. Ejemplo: 5 - 3 = 2.",
      "Multiplicación": "La multiplicación es sumar un número tantas veces como indica otro número. Ejemplo: 3 x 4 = 12.",
      "División": "La división reparte un número en partes iguales. Ejemplo: 12 ÷ 3 = 4.",
      "Fracciones": "Las fracciones representan partes de un todo. Ejemplo: 1/2 significa la mitad de algo."
    },
    "Ciencias": {
      "Animales": "Estudio de los seres vivos que se mueven y consumen alimentos. Ejemplo: mamíferos, aves, reptiles.",
      "Plantas": "Estudio de seres vivos que producen su propio alimento mediante fotosíntesis.",
      "Cuerpo Humano": "Conocimiento de órganos, sistemas y funciones del cuerpo humano, como corazón, pulmones y digestión.",
      "Ecosistemas": "Relaciones entre seres vivos y su entorno, como bosques, mares y desiertos.",
      "Clima": "Condiciones atmosféricas de un lugar en un tiempo determinado: lluvia, sol, viento, temperatura."
    },
    "Geografía": {
      "Continentes": "Grandes extensiones de tierra: América, Europa, Asia, África, Oceanía, Antártida.",
      "Países": "Divisiones políticas dentro de los continentes, como México, Francia, Japón.",
      "Ríos": "Corrientes de agua que fluyen hacia un lago, mar u océano, como el Amazonas o Nilo.",
      "Montañas": "Elevaciones naturales del terreno, como los Andes o el Himalaya.",
      "Mapas": "Representaciones gráficas de la superficie terrestre, mostrando países, ríos, montañas."
    },
    "Español": {
      "Ortografía básica": "Reglas para escribir correctamente las palabras, como uso de tildes y letras.",
      "Gramática": "Estudio de la estructura de oraciones, sustantivos, verbos y adjetivos.",
      "Lectura comprensiva": "Habilidad para entender lo que se lee y extraer ideas principales.",
      "Redacción": "Arte de escribir textos correctamente y con sentido.",
      "Poesía": "Expresión artística mediante versos y lenguaje figurado, como rimas y metáforas."
    },
    "Historia": {
      "Historia de México": "Estudio de los eventos más importantes en la historia de México.",
      "Civilizaciones antiguas": "Estudio de culturas como los mayas, aztecas y egipcios.",
      "Época colonial": "Periodo de conquista y colonización de América por España.",
      "Independencia": "Proceso mediante el cual México logró su libertad en 1810.",
      "Revolución": "Conflicto social y político en México entre 1910 y 1920 para reformar el país."
    },
    "Inglés": {
      "Saludos": "Palabras y frases para saludar: Hello, Good morning, How are you?",
      "Vocabulario básico": "Palabras comunes del día a día como colors, animals, food.",
      "Gramática básica": "Reglas simples de formación de oraciones en inglés.",
      "Colores": "Aprender los nombres de los colores: red, blue, green, yellow.",
      "Números": "Aprender los números en inglés: one, two, three, four."
    },
    "Arte": {
      "Dibujo": "Técnicas para representar objetos usando lápiz o carboncillo.",
      "Pintura": "Uso de colores y pinceles para crear imágenes en un lienzo.",
      "Música": "Aprender sobre instrumentos, ritmo y notas musicales.",
      "Escultura": "Creación de figuras tridimensionales con arcilla, madera o piedra.",
      "Teatro": "Interpretación de historias mediante actuación y expresión corporal."
    },
    "Educación Física": {
      "Carrera": "Actividad física de correr largas o cortas distancias.",
      "Saltos": "Ejercicios que implican impulsarse y despegar del suelo.",
      "Coordinación": "Habilidad de sincronizar movimientos del cuerpo.",
      "Juegos": "Actividades recreativas que fomentan la actividad física.",
      "Estiramientos": "Ejercicios para flexibilizar músculos antes o después de la actividad física."
    }
  };

  return explicaciones[materia][tema];
      }
// -------------------- contenido.js (Secundaria) --------------------

contenidoMaterias["Secundaria"] = {
  "Álgebra": ["Ecuaciones", "Inecuaciones", "Polinomios", "Factores", "Funciones"],
  "Física": ["Mecánica", "Óptica", "Electricidad básica", "Termodinámica", "Fuerza y movimiento"],
  "Química": ["Átomos", "Tabla periódica", "Reacciones químicas", "Compuestos", "Moléculas"],
  "Historia Universal": ["Edad Antigua", "Edad Media", "Edad Moderna", "Revoluciones", "Guerras Mundiales"],
  "Biología": ["Células", "Genética", "Ecología", "Sistema Digestivo", "Sistema Circulatorio"],
  "Arte 2": ["Pintura moderna", "Escultura avanzada", "Fotografía", "Teatro y danza", "Música contemporánea"],
  "Inglés 2": ["Gramática avanzada", "Vocabulario intermedio", "Comprensión lectora", "Expresión escrita", "Conversación"]
};

// Explicaciones de los temas de Secundaria
function getExplicacionSecundaria(materia, tema){
  const explicaciones = {
    "Álgebra": {
      "Ecuaciones": "Resolución de ecuaciones de primer y segundo grado para encontrar valores desconocidos.",
      "Inecuaciones": "Problemas que involucran desigualdades y sus soluciones gráficas o algebraicas.",
      "Polinomios": "Expresiones algebraicas con varias sumas de términos con exponentes.",
      "Factores": "Descomposición de números o polinomios en factores primos o algebraicos.",
      "Funciones": "Relación entre variables donde a cada entrada le corresponde una salida específica."
    },
    "Física": {
      "Mecánica": "Estudio del movimiento de los cuerpos y las fuerzas que los afectan.",
      "Óptica": "Comportamiento de la luz, reflexión, refracción y lentes.",
      "Electricidad básica": "Conceptos de corriente, voltaje, resistencia y circuitos eléctricos.",
      "Termodinámica": "Estudio del calor, temperatura y transferencia de energía.",
      "Fuerza y movimiento": "Conceptos de masa, aceleración y leyes de Newton."
    },
    "Química": {
      "Átomos": "Partículas fundamentales de la materia, formadas por protones, neutrones y electrones.",
      "Tabla periódica": "Organización de los elementos químicos según sus propiedades.",
      "Reacciones químicas": "Transformaciones de sustancias en otras mediante enlaces químicos.",
      "Compuestos": "Sustancias formadas por la combinación de dos o más elementos.",
      "Moléculas": "Grupos de átomos unidos por enlaces químicos."
    },
    "Historia Universal": {
      "Edad Antigua": "Periodo desde la invención de la escritura hasta la caída del Imperio Romano.",
      "Edad Media": "Periodo de feudalismo, expansión del cristianismo y grandes reinos europeos.",
      "Edad Moderna": "Descubrimientos, exploraciones, y el surgimiento de la ciencia y el arte renacentista.",
      "Revoluciones": "Movimientos sociales y políticos que cambiaron gobiernos, como la francesa o la industrial.",
      "Guerras Mundiales": "Conflictos globales del siglo XX que afectaron a gran parte del planeta."
    },
    "Biología": {
      "Células": "Unidad básica de la vida, con núcleo, citoplasma y membrana.",
      "Genética": "Estudio de herencia y transmisión de características de padres a hijos.",
      "Ecología": "Interacciones de los organismos con su entorno y entre sí.",
      "Sistema Digestivo": "Órganos y procesos encargados de la digestión y absorción de nutrientes.",
      "Sistema Circulatorio": "Estudio del corazón, vasos sanguíneos y transporte de sangre."
    },
    "Arte 2": {
      "Pintura moderna": "Estilos de pintura del siglo XX y contemporánea, como expresionismo o surrealismo.",
      "Escultura avanzada": "Técnicas complejas de modelado y construcción de esculturas.",
      "Fotografía": "Captura de imágenes mediante cámaras, luz y composición.",
      "Teatro y danza": "Interpretación artística combinando movimientos y actuación.",
      "Música contemporánea": "Estilos musicales recientes y experimentales, como jazz moderno o electrónica."
    },
    "Inglés 2": {
      "Gramática avanzada": "Estructura compleja de oraciones, tiempos verbales y condicionales.",
      "Vocabulario intermedio": "Palabras y expresiones útiles para situaciones variadas.",
      "Comprensión lectora": "Interpretación de textos y análisis de ideas principales y secundarias.",
      "Expresión escrita": "Redacción de textos coherentes y correctos en inglés.",
      "Conversación": "Práctica oral para comunicarse fluidamente en situaciones reales."
    }
  };

  return explicaciones[materia][tema];
      }
// -------------------- contenido.js (Preparatoria) --------------------

contenidoMaterias["Preparatoria"] = {
  "Cálculo": ["Límites", "Derivadas", "Integrales", "Series", "Funciones Compuestas"],
  "Física Avanzada": ["Cinemática", "Dinámica", "Electromagnetismo", "Termodinámica avanzada", "Ondas y óptica"],
  "Literatura": ["Época Clásica", "Renacimiento", "Siglo XIX", "Siglo XX", "Literatura Contemporánea"],
  "Química": ["Química Orgánica", "Química Inorgánica", "Reacciones Redox", "Estequiometría", "Equilibrio químico"],
  "Historia Moderna": ["Ilustración", "Revolución Industrial", "Revoluciones Sociales", "Colonialismo", "Guerras Europeas"],
  "Filosofía": ["Metafísica", "Ética", "Lógica", "Estética", "Filosofía Política"],
  "Idiomas": ["Inglés Avanzado", "Francés Básico", "Alemán Básico", "Español Avanzado", "Latín"]
};

// Explicaciones de los temas de Preparatoria
function getExplicacionPreparatoria(materia, tema){
  const explicaciones = {
    "Cálculo": {
      "Límites": "Concepto fundamental que describe el valor que se aproxima una función cuando la variable se acerca a un punto.",
      "Derivadas": "Medida de la tasa de cambio de una función respecto a una variable.",
      "Integrales": "Operación que calcula el área bajo la curva de una función.",
      "Series": "Suma de términos de una sucesión infinita siguiendo un patrón.",
      "Funciones Compuestas": "Funciones formadas al combinar dos o más funciones en una sola."
    },
    "Física Avanzada": {
      "Cinemática": "Estudio del movimiento sin considerar sus causas, incluyendo velocidad y aceleración.",
      "Dinámica": "Estudio del movimiento considerando fuerzas y masas.",
      "Electromagnetismo": "Estudio de campos eléctricos y magnéticos y su interacción con la materia.",
      "Termodinámica avanzada": "Leyes de la termodinámica aplicadas a sistemas complejos y ciclos energéticos.",
      "Ondas y óptica": "Comportamiento de ondas mecánicas y electromagnéticas, incluyendo interferencia y difracción."
    },
    "Literatura": {
      "Época Clásica": "Textos literarios de Grecia y Roma antigua, mitología y tragedias.",
      "Renacimiento": "Obras que reflejan el humanismo y la recuperación de la cultura clásica.",
      "Siglo XIX": "Literatura romántica, realista y naturalista con enfoque en emociones y sociedad.",
      "Siglo XX": "Modernismo, vanguardias y literatura contemporánea temprana.",
      "Literatura Contemporánea": "Autores actuales, estilos experimentales y narrativa moderna."
    },
    "Química": {
      "Química Orgánica": "Estudio de compuestos que contienen carbono y sus reacciones.",
      "Química Inorgánica": "Estudio de minerales, metales y compuestos sin carbono.",
      "Reacciones Redox": "Procesos donde ocurren transferencias de electrones.",
      "Estequiometría": "Cálculo de cantidades de reactivos y productos en una reacción química.",
      "Equilibrio químico": "Condición donde la velocidad de reacción directa e inversa son iguales."
    },
    "Historia Moderna": {
      "Ilustración": "Movimiento cultural e intelectual que promovía la razón y el conocimiento.",
      "Revolución Industrial": "Transformación económica y social con nuevas máquinas y producción en fábricas.",
      "Revoluciones Sociales": "Cambios políticos y sociales en varios países durante los siglos XVIII y XIX.",
      "Colonialismo": "Expansión de países europeos sobre territorios y culturas extranjeras.",
      "Guerras Europeas": "Conflictos importantes que moldearon la política europea, como Napoleónicas y la Primera Guerra Mundial."
    },
    "Filosofía": {
      "Metafísica": "Estudio de la naturaleza de la realidad y la existencia.",
      "Ética": "Reflexión sobre la moral y lo que es correcto o incorrecto.",
      "Lógica": "Principios de razonamiento válido y argumentación.",
      "Estética": "Análisis de la belleza, arte y percepción sensorial.",
      "Filosofía Política": "Estudio de la organización del poder, justicia y derechos en la sociedad."
    },
    "Idiomas": {
      "Inglés Avanzado": "Perfeccionamiento del vocabulario y gramática compleja para comunicación fluida.",
      "Francés Básico": "Introducción al vocabulario, gramática y frases simples.",
      "Alemán Básico": "Aprendizaje inicial de palabras, estructuras y pronunciación alemana.",
      "Español Avanzado": "Comprensión de literatura, redacción formal y expresiones idiomáticas.",
      "Latín": "Estudio de gramática, vocabulario y textos clásicos del latín."
    }
  };

  return explicaciones[materia][tema];
}
// -------------------- contenido.js (Universidad) --------------------

contenidoMaterias["Universidad"] = {
  "Programación": ["Estructuras de Datos", "Algoritmos", "Programación Orientada a Objetos", "Bases de Datos", "Inteligencia Artificial"],
  "Economía": ["Microeconomía", "Macroeconomía", "Econometría", "Finanzas", "Política Económica"],
  "Ingeniería": ["Mecánica de Materiales", "Circuitos Eléctricos", "Termodinámica", "Control de Procesos", "Diseño de Sistemas"],
  "Cálculo Integral": ["Integrales Indefinidas", "Integrales Definidas", "Teorema Fundamental del Cálculo", "Métodos de Integración", "Aplicaciones de la Integral"],
  "Estadística": ["Probabilidad", "Distribuciones", "Inferencia Estadística", "Regresión", "Series Temporales"],
  "Diseño": ["Diseño Gráfico", "Diseño Industrial", "Diseño de Interfaces", "Diseño Arquitectónico", "Diseño de Experiencia de Usuario"],
  "Psicología": ["Psicología Cognitiva", "Psicología Social", "Psicología Clínica", "Neuropsicología", "Psicología del Desarrollo"]
};

// Explicaciones de los temas de Universidad
function getExplicacionUniversidad(materia, tema){
  const explicaciones = {
    "Programación": {
      "Estructuras de Datos": "Organización y almacenamiento eficiente de datos para su uso en algoritmos.",
      "Algoritmos": "Secuencia de pasos lógicos para resolver problemas de manera eficiente.",
      "Programación Orientada a Objetos": "Paradigma que organiza software en objetos con atributos y métodos.",
      "Bases de Datos": "Sistemas para almacenar, recuperar y manipular grandes volúmenes de información.",
      "Inteligencia Artificial": "Desarrollo de sistemas que pueden aprender y tomar decisiones similares a humanos."
    },
    "Economía": {
      "Microeconomía": "Estudio del comportamiento de individuos y empresas en mercados específicos.",
      "Macroeconomía": "Análisis de la economía global, incluyendo PIB, inflación y desempleo.",
      "Econometría": "Aplicación de métodos estadísticos para analizar datos económicos.",
      "Finanzas": "Gestión de dinero, inversiones y riesgos financieros.",
      "Política Económica": "Diseño e implementación de políticas para influir en la economía nacional."
    },
    "Ingeniería": {
      "Mecánica de Materiales": "Estudio de cómo los materiales soportan fuerzas y deformaciones.",
      "Circuitos Eléctricos": "Análisis y diseño de sistemas eléctricos y electrónicos.",
      "Termodinámica": "Estudio de energía, calor y trabajo en sistemas físicos.",
      "Control de Procesos": "Gestión automática de sistemas industriales para mantener parámetros deseados.",
      "Diseño de Sistemas": "Planificación y creación de sistemas complejos con eficiencia y seguridad."
    },
    "Cálculo Integral": {
      "Integrales Indefinidas": "Operación para encontrar funciones cuya derivada es la función dada.",
      "Integrales Definidas": "Cálculo del área bajo una curva entre dos puntos específicos.",
      "Teorema Fundamental del Cálculo": "Relación entre derivadas e integrales, base de la integración.",
      "Métodos de Integración": "Técnicas como sustitución, partes y fracciones parciales para resolver integrales.",
      "Aplicaciones de la Integral": "Uso de integrales en física, economía, probabilidad y geometría."
    },
    "Estadística": {
      "Probabilidad": "Medida de la certeza de que ocurra un evento.",
      "Distribuciones": "Modelos matemáticos que describen cómo se distribuyen los datos.",
      "Inferencia Estadística": "Procedimientos para sacar conclusiones sobre poblaciones basándose en muestras.",
      "Regresión": "Modelos que permiten predecir valores de una variable según otra.",
      "Series Temporales": "Análisis de datos ordenados cronológicamente para estudiar tendencias."
    },
    "Diseño": {
      "Diseño Gráfico": "Creación de piezas visuales para comunicar mensajes de manera estética.",
      "Diseño Industrial": "Diseño de productos funcionales y atractivos para el consumidor.",
      "Diseño de Interfaces": "Creación de interfaces de usuario intuitivas y efectivas para software.",
      "Diseño Arquitectónico": "Planificación de espacios y edificaciones considerando funcionalidad y estética.",
      "Diseño de Experiencia de Usuario": "Optimización de la interacción de usuarios con productos o servicios."
    },
    "Psicología": {
      "Psicología Cognitiva": "Estudio de procesos mentales como memoria, atención y aprendizaje.",
      "Psicología Social": "Análisis de cómo los individuos interactúan y se influyen mutuamente.",
      "Psicología Clínica": "Evaluación y tratamiento de trastornos mentales y emocionales.",
      "Neuropsicología": "Relación entre el cerebro y el comportamiento humano.",
      "Psicología del Desarrollo": "Estudio del crecimiento y cambio psicológico a lo largo de la vida."
    }
  };

  return explicaciones[materia][tema];
      }
// -------------------- contenido.js (Postgrado) --------------------

contenidoMaterias["Postgrado"] = {
  "Gestión de Proyectos": ["Planificación Estratégica", "Gestión de Riesgos", "Control de Calidad", "Recursos Humanos en Proyectos", "Metodologías Ágiles"],
  "Investigación Avanzada": ["Métodos Cualitativos", "Métodos Cuantitativos", "Revisión Bibliográfica", "Diseño Experimental", "Análisis de Datos Complejos"],
  "Filosofía Aplicada": ["Ética Profesional", "Lógica Avanzada", "Filosofía Política", "Filosofía de la Ciencia", "Estética y Arte"],
  "Educación Superior": ["Gestión Universitaria", "Currículo Avanzado", "Innovación Educativa", "Evaluación y Acreditación", "Políticas Educativas"]
};

// Explicaciones de los temas de Postgrado
function getExplicacionPostgrado(materia, tema){
  const explicaciones = {
    "Gestión de Proyectos": {
      "Planificación Estratégica": "Diseño de planes a largo plazo para alcanzar objetivos específicos de un proyecto.",
      "Gestión de Riesgos": "Identificación, análisis y mitigación de riesgos que puedan afectar el proyecto.",
      "Control de Calidad": "Monitoreo de estándares y aseguramiento de que los resultados cumplan con la calidad requerida.",
      "Recursos Humanos en Proyectos": "Gestión eficiente del personal, roles y responsabilidades dentro del proyecto.",
      "Metodologías Ágiles": "Uso de métodos iterativos y flexibles para gestionar proyectos con cambios constantes."
    },
    "Investigación Avanzada": {
      "Métodos Cualitativos": "Técnicas de investigación centradas en comprensión de fenómenos mediante observación y entrevistas.",
      "Métodos Cuantitativos": "Aplicación de estadísticas y análisis numérico para extraer conclusiones objetivas.",
      "Revisión Bibliográfica": "Evaluación crítica de literatura existente para fundamentar la investigación.",
      "Diseño Experimental": "Planificación de experimentos controlados para probar hipótesis específicas.",
      "Análisis de Datos Complejos": "Interpretación de grandes volúmenes de datos usando técnicas estadísticas avanzadas."
    },
    "Filosofía Aplicada": {
      "Ética Profesional": "Estudio de principios morales y de conducta en contextos laborales y académicos.",
      "Lógica Avanzada": "Razonamiento formal y análisis de argumentos complejos.",
      "Filosofía Política": "Reflexión sobre poder, justicia, leyes y organización social.",
      "Filosofía de la Ciencia": "Estudio de fundamentos y métodos que sustentan la ciencia y el conocimiento.",
      "Estética y Arte": "Análisis de la percepción de la belleza y la creación artística."
    },
    "Educación Superior": {
      "Gestión Universitaria": "Administración de recursos, procesos y estrategias en instituciones de educación superior.",
      "Currículo Avanzado": "Diseño de planes de estudio adaptados a las necesidades de formación profesional avanzada.",
      "Innovación Educativa": "Implementación de nuevas metodologías y tecnologías para mejorar la enseñanza.",
      "Evaluación y Acreditación": "Procesos de medición de calidad educativa y cumplimiento de estándares oficiales.",
      "Políticas Educativas": "Formulación e implementación de normativas y estrategias en el sistema educativo superior."
    }
  };

  return explicaciones[materia][tema];
}
