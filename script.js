// Script principal da calculadora desenvolvido por Pamella Fraga 💚

function append(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    const result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (e) {
    alert("Erro na expressão!");
  }
}
