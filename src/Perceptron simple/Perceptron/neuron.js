import errorAlgorithm from "./errorAlgorithm.js";

let iterationsData = {
  response: "",
  array: ""
}

function Neuron(neuronInputs, synapticWeights, expectedResult) {
  const somaResult = soma(neuronInputs, synapticWeights);
  const neuronResult = activationFunc(somaResult);

  if (neuronResult === expectedResult) {
    if (neuronResult >= 0) {
      console.log("la frase se puede publicar");
      iterationsData.response = "la frase se puede publicar"

    } else {
      console.log("la frase NO se puede publicar");
      iterationsData.response = "la frase NO se puede publicar"
    }
    console.log("la neurona ha aprendido");
    return iterationsData
  }
  const nextSynapticWeights = errorAlgorithm(
    expectedResult,
    neuronResult,
    synapticWeights,
    neuronInputs
  );
  console.log("Pesos sinápticos siguiente iteración: ", nextSynapticWeights);
  iterationsData= {
    ...iterationsData,
    array: iterationsData.array + JSON.stringify(nextSynapticWeights)
  }
  Neuron(neuronInputs, nextSynapticWeights, expectedResult);
}

function soma(neuronInputs, synapticWeights) {
  return neuronInputs
    .map((value, index) => value * synapticWeights[index])
    .reduce((acc, cur) => acc + cur);
}

function activationFunc(somaResult) {
  if (somaResult > 0) return 1;
  if (somaResult < 0) return -1;
  return 0;
}

export default Neuron;
