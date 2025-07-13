const ramos = {
  "matematicas general": { requisitos: [], desbloquea: ["bioestadística"] },
  "quimica": { requisitos: [], desbloquea: ["bioquímica"] },
  "introducción a la medicina veterinaria": { requisitos: [], desbloquea: ["practica basica"] },
  "taller de com. oral y escrita": { requisitos: [], desbloquea: [] },
  "biologia celular": { requisitos: [], desbloquea: ["medio ambiente y gestión ambiental", "microbiología general y veterinaria"] },
  "bioestadística": { requisitos: ["matematicas general"], desbloquea: ["genetica"] },
  "bioquímica": { requisitos: ["quimica"], desbloquea: ["fisiología animal", "nutrición y alimentación animal"] },
  "ingles 1": { requisitos: [], desbloquea: ["ingles 2"] },
  "histoembriología": { requisitos: [], desbloquea: ["zoología"] },
  "anatomia del camino": { requisitos: [], desbloquea: ["practica basica", "anatomia comparada"] },
  "ingles 2": { requisitos: ["ingles 1"], desbloquea: [] },
  "medio ambiente y gestión ambiental": { requisitos: ["biologia celular"], desbloquea: ["producción porcina"] },
  "zoología": { requisitos: ["histoembriología"], desbloquea: ["enfermedades parasitarias", "etología y bienestar animal", "fisiopatología"] },
  "practica basica": { requisitos: ["introducción a la medicina veterinaria", "anatomia del camino"], desbloquea: [] },
  "anatomia comparada": { requisitos: ["anatomia del camino"], desbloquea: ["fisiología animal", "semiología"] },
  "fisiología animal": { requisitos: ["bioquímica", "anatomia comparada"], desbloquea: ["reproducción e inseminación artificial", "farmacología y toxicología"] },
  "microbiología general y veterinaria": { requisitos: ["biologia celular"], desbloquea: ["inmunología", "tecnologia de los alimentos"] },
  "genetica": { requisitos: ["bioestadística"], desbloquea: ["producción ovinos y caprinos"] },
  "administración y emprendimiento veterinario": { requisitos: [], desbloquea: ["formulación y evaluación de proyectos agropecuarios"] },
  "enfermedades parasitarias": { requisitos: ["zoología"], desbloquea: ["control de calidad de los alimentos"] },
  "inmunología": { requisitos: ["microbiología general y veterinaria"], desbloquea: ["enfermedades infecciosas"] },
  "reproducción e inseminación artificial": { requisitos: ["fisiología animal"], desbloquea: ["obstetricia y ginecología", "producción porcina"] },
  "tecnologia de los alimentos": { requisitos: ["microbiología general y veterinaria"], desbloquea: ["control de calidad de los alimentos"] },
  "nutrición y alimentación animal": { requisitos: ["bioquímica"], desbloquea: ["producción avícola", "producción acuícola"] },
  "etología y bienestar animal": { requisitos: ["zoología"], desbloquea: ["producción avícola"] },
  "fisiopatología": { requisitos: ["zoología"], desbloquea: ["patología de sistemas", "semiología"] },
  "patología de sistemas": { requisitos: ["fisiopatología"], desbloquea: ["laboratorio clinico", "diagnostico por imagenes"] },
  "farmacología y toxicología": { requisitos: ["fisiología animal"], desbloquea: ["practica intermedia", "semiología"] },
  "producción avícola": { requisitos: ["nutrición y alimentación animal", "etología y bienestar animal"], desbloquea: [] },
  "enfermedades infecciosas": { requisitos: ["inmunología"], desbloquea: ["practica intermedia", "epidemiología veterinaria"] },
  "control de calidad de los alimentos": { requisitos: ["tecnologia de los alimentos", "enfermedades parasitarias"], desbloquea: ["salud publica"] },
  "obstetricia y ginecología": { requisitos: ["reproducción e inseminación artificial"], desbloquea: ["producción de bovinos de carne y leche"] },
  "practica intermedia": { requisitos: ["farmacología y toxicología", "enfermedades infecciosas"], desbloquea: ["practica final"] },
  "epidemiología veterinaria": { requisitos: ["enfermedades infecciosas"], desbloquea: ["metodología de la investigación", "salud publica"] },
  "producción porcina": { requisitos: ["medio ambiente y gestión ambiental", "reproducción e inseminación artificial"], desbloquea: [] },
  "producción ovinos y caprinos": { requisitos: ["genetica"], desbloquea: [] },
  "semiología": { requisitos: ["anatomia comparada", "farmacología y toxicología", "fisiopatología"], desbloquea: ["medicina de animales exoticos", "medicina de animales mayores", "medicina de felinos", "medicina de caninos", "cirugia general"] },
  "laboratorio clinico": { requisitos: ["patología de sistemas"], desbloquea: ["medicina de animales exoticos", "medicina de animales mayores", "medicina de felinos", "medicina de caninos"] },
  "medicina de animales exoticos": { requisitos: ["semiología", "laboratorio clinico"], desbloquea: [] },
  "medicina de animales mayores": { requisitos: ["semiología", "laboratorio clinico"], desbloquea: ["clinica de animales mayores", "farmacología aplicada"] },
  "medicina de felinos": { requisitos: ["semiología", "laboratorio clinico"], desbloquea: [] },
  "medicina de caninos": { requisitos: ["semiología", "laboratorio clinico"], desbloquea: ["clinica de animales menores", "farmacología aplicada"] },
  "cirugia general": { requisitos: ["semiología"], desbloquea: ["patologia quirurgica"] },
  "metodología de la investigación": { requisitos: ["epidemiología veterinaria"], desbloquea: ["trabajo de titulación"] },
  "diagnostico por imagenes": { requisitos: ["patología de sistemas"], desbloquea: ["clinica de animales mayores", "clinica de animales menores"] },
  "trabajo de titulación": { requisitos: ["metodología de la investigación"], desbloquea: [] },
  "formulación y evaluación de proyectos agropecuarios": { requisitos: ["administración y emprendimiento veterinario"], desbloquea: [] },
  "producción acuícola": { requisitos: ["nutrición y alimentación animal"], desbloquea: [] },
  "patologia quirurgica": { requisitos: ["cirugia general"], desbloquea: [] },
  "producción de bovinos de carne y leche": { requisitos: ["obstetricia y ginecología"], desbloquea: [] },
  "farmacología aplicada": { requisitos: ["medicina de animales mayores", "medicina de caninos"], desbloquea: [] },
  "salud publica": { requisitos: ["control de calidad de los alimentos", "epidemiología veterinaria"], desbloquea: [] },
  "clinica de animales menores": { requisitos: ["medicina de caninos", "diagnostico por imagenes"], desbloquea: [] },
  "clinica de animales mayores": { requisitos: ["medicina de animales mayores", "diagnostico por imagenes"], desbloquea: [] }
};

const malla = document.getElementById("malla");

// Crear los botones dinámicamente
for (const nombre in ramos) {
  const div = document.createElement("div");
  div.classList.add("ramo");
  div.innerText = nombre;
  if (ramos[nombre].requisitos.length > 0) div.classList.add("bloqueado");
  div.addEventListener("click", () => aprobarRamo(nombre, div));
  malla.appendChild(div);
}

function aprobarRamo(nombre, div) {
  if (div.classList.contains("bloqueado")) return;
  div.classList.toggle("aprobado");
  actualizarEstado();
}

function actualizarEstado() {
  const aprobados = new Set(
    Array.from(document.querySelectorAll(".ramo.aprobado")).map(e => e.innerText)
  );

  for (const [nombre, datos] of Object.entries(ramos)) {
    const el = Array.from(document.querySelectorAll(".ramo")).find(e => e.innerText === nombre);
    if (datos.requisitos.every(req => aprobados.has(req))) {
      el.classList.remove("bloqueado");
    } else {
      if (!aprobados.has(nombre)) el.classList.add("bloqueado");
    }
  }
                                                 }
