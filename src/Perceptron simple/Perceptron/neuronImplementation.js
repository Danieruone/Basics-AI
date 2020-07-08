import data from "./data.js";
import Neuron from "./neuron.js";

function startIterations(input, expectedResult) {
  // rango pesos sinápticos
  const max = 10;
  const min = -10;
  // entradas
  const neuronInputs = input
    .split(" ")
    .map((value) => (data[value] ? data[value] : 0));
  // pesos sinápticos
  const synapticWeights = neuronInputs.map(() =>
    Math.round(Math.random() * (max - min) + min)
  );
  const synapticWeightsHardCoded = [-100, -100, -100, -100]

  // inicio iteraciones en la neurona:
  console.log("Frase: ", input);
  console.log("Entradas: ", neuronInputs);
  console.log("Pesos sinápticos: ", synapticWeights);
  const iterationData = Neuron(neuronInputs, synapticWeights, expectedResult);

  return {
    inputUser: input,
    inputs: neuronInputs,
    weight: synapticWeights,
    iteratedWeight: iterationData.array,
    response: iterationData.response,
  };
}

export default startIterations;
