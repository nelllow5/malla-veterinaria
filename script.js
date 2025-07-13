function mostrarInfo(ramo) {
  const info = {
    anat1: "Anatomía I: Estudia la estructura básica de los animales. Semestre 1. 5 créditos.",
    fisio: "Fisiología: Funciones vitales de los animales. Semestre 2. 5 créditos."
  };

  document.getElementById("contenido").innerText = info[ramo];
  document.getElementById("info-box").classList.remove("oculto");
}

function cerrarInfo() {
  document.getElementById("info-box").classList.add("oculto");
}
