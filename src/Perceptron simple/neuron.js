function Neuron(neuronInputs, synapticWeights, expectedResult) {
  const somaResult = soma(neuronInputs, synapticWeights);
  neuronResult = activationFunc(somaResult);

  if (neuronResult === somaResult) {
    return console.log("la neurona aprendió");
  }
  const nextSynapticWeights = errorAlgorithm(
    expectedResult,
    neuronResult,
    synapticWeights,
    neuronInputs
  );
  console.log(nextSynapticWeights)
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

function errorAlgorithm(
  expectedResult,
  neuronResult,
  synapticWeights,
  neuronInputs
) {
  // en(t) = dn(t) - yn(t)
  const errorRange = expectedResult - neuronResult;
  const deltaArray = deltaFunc(errorRange, neuronInputs);
  return nextSynapticWeightsFunc(deltaArray, synapticWeights);
}

// Awnj(t) = nen(t) * j(t)
function deltaFunc(errorRange, neuronInputs) {
  learningRatio = 1;
  return neuronInputs.map((value) => learningRatio * errorRange * value);
}

// wnj(t +1) = wnj(t) + Awnj(t)
function nextSynapticWeightsFunc(deltaArray, synapticWeights) {
  return synapticWeights.map((value, index) => deltaArray[index] + value);
}

module.exports = Neuron;
