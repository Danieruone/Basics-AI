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

// Awnj(t) = n * en(t) * j(t)
function deltaFunc(errorRange, neuronInputs) {
  const learningRatio = 1;
  return neuronInputs.map((value) => learningRatio * errorRange * value);
}

// wnj(t +1) = wnj(t) + Awnj(t)
function nextSynapticWeightsFunc(deltaArray, synapticWeights) {
  return synapticWeights.map((value, index) => deltaArray[index] + value);
}

export default errorAlgorithm;
