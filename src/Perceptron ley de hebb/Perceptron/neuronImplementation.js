import Neuron from "./neuron.js";

function startIterations(emisor, receptor, expectedResult, learningRatio) {
  // rango pesos sinápticos
  const max = 10;
  const min = -10;
  // entradas
  const neuronInputs = [emisor, receptor]
  // pesos sinápticos
  const synapticWeights = neuronInputs.map(() =>
    Math.round(Math.random() * (max - min) + min)
  );
  const synapticWeightsHardCoded = [4, -5]

  // inicio iteraciones en la neurona:
  console.log("Entradas: ", neuronInputs);
  console.log("Pesos sinápticos: ", synapticWeights);
  const iterationData = Neuron(neuronInputs, synapticWeights, expectedResult, learningRatio);

  return {
    emisor: emisor,
    receptor: receptor,
    weight: synapticWeights,
    iteratedWeight: iterationData.array,
    response: iterationData.response,
    status: iterationData.status
  };
}

export default startIterations;
