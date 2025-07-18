document.addEventListener('DOMContentLoaded', () => {
  const añosContainer = document.querySelector('.años-container');

  const años = {
    "1° Año": ["1° Semestre", "2° Semestre"],
    "2° Año": ["3° Semestre", "4° Semestre"],
    "3° Año": ["5° Semestre", "6° Semestre"],
    "4° Año": ["7° Semestre", "8° Semestre"],
    "5° Año": ["9° Semestre", "10° Semestre"]
  };

  const semestres = {
    "1° Semestre": ["Matemáticas General", "Química", "Introducción a la medicina Veterinaria", "Taller de com. oral y escrita", "Biología Celular"],
    "2° Semestre": ["Bioestadística", "Bioquímica", "Inglés 1", "Histoembriología", "Anatomía del Canino"],
    "3° Semestre": ["Inglés 2", "Medio Ambiente y Gestión Ambiental", "Zoología", "Práctica Básica", "Anatomía Comparada"],
    "4° Semestre": ["Fisiología Animal", "Microbiología General y Veterinaria", "Genética", "Administración y emprendimiento veterinario", "Enfermedades Parasitarias"],
    "5° Semestre": ["Inmunología", "Reproducción e inseminación artificial", "Tecnologia de los alimentos", "Nutrición y Alimentación Animal", "Etología y Bienestar Animal", "Fisiopatología"],
    "6° Semestre": ["Patología de Sistemas", "Farmacología y Toxicología", "Producción Avícola", "Enfermedades Infecciosas", "Control de calidad de los alimentos", "Obstetricia y Ginecología"],
    "7° Semestre": ["Práctica Intermedia", "Epidemiología Veterinaria", "Producción Porcina", "Producción Ovinos y Caprinos", "Semiología", "Laboratorio Clínico"],
    "8° Semestre": ["Medicina de Animales Exóticos", "Medicina de Animales Mayores", "Medicina de Felinos", "Medicina de Caninos", "Cirugía General"],
    "9° Semestre": ["Metodología de la Investigación", "Diagnóstico por Imágenes", "Práctica Final", "Formulación y evaluación de proyectos agropecuarios", "Producción Acuícola", "Patología Quirúrgica", "Producción Bovinos de Carne y Leche"],
    "10° Semestre": ["Farmacología Aplicada", "Salud Pública", "Trabajo de Titulación", "Clínica de Animales Menores", "Clínica de Animales Mayores"]
  };

  const prerrequisitos = {
    "Bioestadística": ["Matemáticas General"],
    "Bioquímica": ["Química"],
    "Práctica Básica": ["Introducción a la medicina Veterinaria", "Anatomía del Canino"],
    "Medio Ambiente y Gestión Ambiental": ["Biología Celular"],
    "Microbiología General y Veterinaria": ["Biología Celular"],
    "Genética": ["Bioestadística"],
    "Fisiología Animal": ["Bioquímica", "Anatomía Comparada"],
    "Nutrición y Alimentación Animal": ["Bioquímica"],
    "Zoología": ["Histoembriología"],
    "Inglés 2": ["Inglés 1"],
    "Producción Porcina": ["Medio Ambiente y Gestión Ambiental", "Reproducción e inseminación artificial"],
    "Enfermedades Parasitarias": ["Zoología"],
    "Etología y Bienestar Animal": ["Zoología"],
    "Fisiopatología": ["Zoología"],
    "Reproducción e inseminación artificial": ["Fisiología Animal"],
    "Farmacología y Toxicología": ["Fisiología Animal"],
    "Tecnologia de los alimentos": ["Microbiología General y Veterinaria"],
    "Producción Ovinos y Caprinos": ["Genética"],
    "Control de calidad de los alimentos": ["Enfermedades Parasitarias", "Tecnologia de los alimentos"],
    "Enfermedades Infecciosas": ["Inmunología"],
    "Obstetricia y Ginecología": ["Reproducción e inseminación artificial"],
    "Producción Avícola": ["Nutrición y Alimentación Animal", "Etología y Bienestar Animal"],
    "Patología de Sistemas": ["Fisiopatología"],
    "Laboratorio Clínico": ["Patología de Sistemas"],
    "Diagnóstico por Imágenes": ["Patología de Sistemas"],
    "Práctica Intermedia": ["Farmacología y Toxicología", "Enfermedades Infecciosas"],
    "Epidemiología Veterinaria": ["Enfermedades Infecciosas"],
    "Producción Bovinos de Carne y Leche": ["Obstetricia y Ginecología"],
    "Metodología de la Investigación": ["Epidemiología Veterinaria"],
    "Salud Pública": ["Control de calidad de los alimentos", "Epidemiología Veterinaria"],
    "Cirugía General": ["Semiología"],
    "Medicina de Animales Exóticos": ["Semiología", "Laboratorio Clínico"],
    "Medicina de Animales Mayores": ["Semiología", "Laboratorio Clínico"],
    "Medicina de Felinos": ["Semiología", "Laboratorio Clínico"],
    "Medicina de Caninos": ["Semiología", "Laboratorio Clínico"],
    "Clínica de Animales Mayores": ["Medicina de Animales Mayores", "Diagnóstico por Imágenes"],
    "Farmacología Aplicada": ["Medicina de Caninos", "Medicina de Animales Mayores"],
    "Clínica de Animales Menores": ["Medicina de Caninos", "Diagnóstico por Imágenes"],
    "Patología Quirúrgica": ["Cirugía General"],
    "Trabajo de Titulación": ["Metodología de la Investigación"]
  };

  for (const [año, listaSemestres] of Object.entries(años)) {
    const contAño = document.createElement('div');
    contAño.className = 'año';
    contAño.innerHTML = `<h2>${año}</h2>`;
    const fila = document.createElement('div');
    fila.className = 'grid';

    listaSemestres.forEach(nombreSem => {
      const div = document.createElement('div');
      div.className = 'semestre';
      div.innerHTML = `<h3>${nombreSem}</h3><div class="ramos"></div>`;

      const cont = div.querySelector('.ramos');
      const ramos = semestres[nombreSem] || [];

      ramos.forEach(ramo => {
        const el = document.createElement('div');
        el.className = 'ramo bloqueado';
        el.textContent = ramo;
        el.dataset.nombre = ramo;
        cont.appendChild(el);
      });

      fila.appendChild(div);
    });

    contAño.appendChild(fila);
    añosContainer.appendChild(contAño);
  }

  function actualizarEstados() {
    const todos = document.querySelectorAll('.ramo');
    todos.forEach(ramo => {
      const nombre = ramo.dataset.nombre;
      const requisitos = prerrequisitos[nombre] || [];
      const aprobados = [...document.querySelectorAll('.ramo.aprobado')].map(el => el.dataset.nombre);
      const habilitado = requisitos.every(r => aprobados.includes(r));
      if (requisitos.length === 0 || habilitado) {
        if (!ramo.classList.contains('aprobado') && !ramo.classList.contains('en-curso')) {
          ramo.classList.remove('bloqueado');
        }
      } else {
        ramo.classList.add('bloqueado');
      }
    });
  }

  document.addEventListener('click', e => {
    if (!e.target.classList.contains('ramo')) return;
    if (e.target.classList.contains('bloqueado')) return;

    if (e.target.classList.contains('aprobado')) {
      e.target.classList.remove('aprobado');
      e.target.classList.add('en-curso');
    } else if (e.target.classList.contains('en-curso')) {
      e.target.classList.remove('en-curso');
    } else {
      e.target.classList.add('aprobado');
    }

    actualizarEstados();
  });

  actualizarEstados();
});
