const data = require("./data");
const Neuron = require("./neuron")

// rango pesos sinápticos
const max = 5;
const min = -5;

const input = "me gusta la pizza";
// entradas
const neuronInputs = input
  .split(" ")
  .map((value) => (data[value] ? data[value] : 0));
// pesos sinápticos
const synapticWeights = neuronInputs.map(() =>
  Math.round(Math.random() * (max - min) + min)
);

const synapticWeightsHardCoded = [0, 1, 0, 0]

console.log(neuronInputs, synapticWeights)
Neuron(neuronInputs, synapticWeights, 1)
