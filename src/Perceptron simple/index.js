import startIterations from "./Perceptron/neuronImplementation.js";

const button = document.getElementById("btn");
const userInput = document.getElementById("userInput");
const expectedResult = document.getElementById("expectedResult");

//data
const dataTable = document.getElementById("dataTable");

button.addEventListener("click", () => {
  const tr = document.createElement("tr");
  const input = userInput.value;
  const userExpectedResult = parseInt(expectedResult.value);

  const iterationData = startIterations(input, userExpectedResult);
  swal("Estado neurona", "la neurona ha aprendido!");
  
  // mostrando data
  tr.innerHTML = `
    <td>${iterationData.frase}</td>
    <td>${iterationData.entradas}</td>
    <td>${iterationData.pesos}</td>
    <td>${iterationData.pesosIterados}</td>
    <td>${iterationData.respuesta}</td>`;

  dataTable.appendChild(tr);
});
