import startIterations from "./Perceptron/neuronImplementation.js";

const button = document.getElementById("btn");
const $emisor = document.getElementById("emisor");
const $receptor = document.getElementById("receptor");
const $expectedResult = document.getElementById("expectedResult");
const $learningRatio = document.getElementById("learningRatio");

button.addEventListener("click", () => {
  const tr = document.createElement("tr");

  // entradas
  const emisor = parseInt($emisor.value);
  const receptor = parseInt($receptor.value);
  const expectedResult = parseInt($expectedResult.value);
  const learningRatio = parseInt($learningRatio.value);

  if (expectedResult == 1 || expectedResult == -1) {
    const iterationData = startIterations(
      emisor,
      receptor,
      expectedResult,
      learningRatio
    );
    if (iterationData.status == "0") {
      swal("Estado neurona", "Iteraciones infinitas :(", "error");
    } else {
      swal("Estado neurona", "la neurona ha aprendido!", "success");
    }

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
      <td>${iterationData.emisor}</td>
      <td>${iterationData.receptor}</td>
      <td>${iterationData.weight}</td>
      <td><ul class="list-group">${data}</ul></td>
      <td>${iterationData.response}</td>`;

    dataTable.appendChild(tr);
  } else {
    swal("Mensaje neurona", "La neurona no recibe ese valor! :(", "error");
  }
});
