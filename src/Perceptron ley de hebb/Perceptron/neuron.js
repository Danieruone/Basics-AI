import hebbAlgorithm from "./hebbAlgorithm.js";

let iterationsData = {
  response: "",
  status: "",
  array: [],
};

function Neuron(neuronInputs, synapticWeights, expectedResult, learningRatio) {
  const somaResult = soma(neuronInputs, synapticWeights);
  const neuronResult = activationFunc(somaResult);

  if (neuronResult === expectedResult) {
    if (neuronResult > 0) {
      console.log("Estado: conectados");
      iterationsData.response = "Conectados";
    } else {
      console.log("Estado: desconectados");
      iterationsData.response = "Desconectados";
    }
    console.log("la neurona ha aprendido");
    const auxIterationsData = {
      ...iterationsData,
    };
    iterationsData.response = "";
    iterationsData.array = [];
    return auxIterationsData;
  }

  const nextSynapticWeights = hebbAlgorithm(
    neuronResult,
    synapticWeights,
    neuronInputs,
    learningRatio
  );
  console.log("Pesos sinápticos siguiente iteración: ", nextSynapticWeights);
  iterationsData.array.push(nextSynapticWeights);
  if (iterationsData.array.length > 100) {
    iterationsData.array = [];
    return { response: "Las iteraciones tienden al infinito!", array: [], status: "0" };
  }
  return Neuron(
    neuronInputs,
    nextSynapticWeights,
    expectedResult,
    learningRatio
  );
}

function soma(neuronInputs, synapticWeights) {
  return neuronInputs
    .map((value, index) => value * synapticWeights[index])
    .reduce((acc, cur) => acc + cur);
}

function activationFunc(somaResult) {
  console.log("soma: ", somaResult);
  if (somaResult > 0) return 1;
  if (somaResult <= 0) return -1;
}

export default Neuron;
