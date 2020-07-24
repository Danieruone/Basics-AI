function hebbAlgorithm(
  neuronResult,
  synapticWeights,
  neuronInputs,
  learningRatio
) {

  const deltaArray = deltaFunc(learningRatio, neuronResult, neuronInputs);
  return nextSynapticWeightsFunc(deltaArray, synapticWeights);
}

// Awnj(t) = n * yn(t) * xj (t)
function deltaFunc(learningRatio, neuronResult, neuronInputs) {
  return neuronInputs.map((value) => learningRatio * neuronResult * value);
}

// wnj(t+1) = wn(t) + Awnj(t)
function nextSynapticWeightsFunc(deltaArray, synapticWeights) {
  return synapticWeights.map((value, index) => value + deltaArray[index]);
}

export default hebbAlgorithm;
