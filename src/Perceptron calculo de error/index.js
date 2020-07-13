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
  if (userExpectedResult == 1 || userExpectedResult == -1) {
    const iterationData = startIterations(input, userExpectedResult);
    swal("Estado neurona", "la neurona ha aprendido!", "success");

    // mostrando data
    const data =
      iterationData.iteratedWeight
        .map(
          (value) => `
      <li class="list-group-item">${JSON.stringify(value)}</li>
    `
        )
        .join("") || "na";

    tr.innerHTML = `
      <td>${iterationData.inputUser}</td>
      <td>${iterationData.inputs}</td>
      <td>${iterationData.weight}</td>
      <td><ul class="list-group">${data}</ul></td>
      <td>${iterationData.response}</td>`;

    dataTable.appendChild(tr);
  } else {
    swal("Mensaje neurona", "La neurona no recibe ese valor! :(", "error");
  }
});
