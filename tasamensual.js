function calcularTasa() {
  let metrosC = parseFloat(document.getElementById("metros").value);
  let abono = parseFloat(document.getElementById("abono").value);
  let anosP = parseInt(document.getElementById("anos").value);
  let tasa;

  if (isNaN(metrosC) || isNaN(abono) || isNaN(anosP)) {
    document.getElementById("resultado").textContent = "Por favor completa todos los campos.";
    return;
  }

  if (anosP <= 7) {
    tasa = ((40 * metrosC) - abono) / (anosP * 12);
  } else if (anosP === 8) {
    tasa = ((41.67 * metrosC) - abono) / (anosP * 12);
  } else if (anosP === 9) {
    tasa = ((43.34 * metrosC) - abono) / (anosP * 12);
  } else if (anosP === 10) {
    tasa = ((45.01 * metrosC) - abono) / (anosP * 12);
  } else {
    document.getElementById("resultado").textContent = "Solo se admiten plazos de 7 a 10 años.";
    return;
  }

  tasa = Math.round(tasa * 100) / 100;
  document.getElementById("resultado").textContent = "Su letra mensual es de: $" + tasa;
}
