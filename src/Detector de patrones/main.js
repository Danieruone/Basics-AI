import MatrixDom from './src/Matrix.js'


const dimension$ = document.getElementById('dimension')
const nPtn$ = document.getElementById('n-ptn')
const containerPtn$ = document.getElementById('container-ptn')
const containerInput$ = document.getElementById('container-input')
const generate$ = document.getElementById('generate')
const train$ = document.getElementById('train')
const run$ = document.getElementById('run')

let patternTables = []
let weights = [];
let patternInput;

function createTables(size, len, i = 0, arr = []) {
    if (i === len) return arr;
    const matrix = new MatrixDom(size)
    arr.push(matrix);
    return createTables(size, len, i + 1, arr)
}


generate$.addEventListener('click', () => {
    containerPtn$.innerHTML = ''
    containerInput$.innerHTML = ''
    const dimension = +dimension$.value;
    const nPatterns = +nPtn$.value;

    patternTables = createTables(dimension * dimension, nPatterns);
    patternTables.forEach(t => containerPtn$.appendChild(t.getTable()))
    patternInput = new MatrixDom(dimension * dimension);
    containerInput$.appendChild(patternInput.getTable());
})

train$.addEventListener('click', () => {
    const transpose = patternTables.map(pattern => {
        return pattern.getPattern().map(i => pattern.getPattern().map(j => i * j))
    })

    weights = numbers.matrix.addition(...transpose)
        .map((x, i) => x.map((y, j) => i === j ? 0: y))
})

run$.addEventListener('click', () => {
    const patterns = patternTables.map(v => v.getPattern());
    const pattern = patternInput.getPattern();


    console.log('antes de entrenar', weights)
    const result = train(weights, pattern, patterns, patternInput)
    console.warn('aprendio el hpta', result);

})

function train(weights, pattern, expectedPatterns, patternInputDom, i = 0) {
    console.log('data train', weights, pattern, expectedPatterns, status);
    if (i === 1000) {
        return pattern
    }

    const patternInput = pattern.map(v => [v]);
    const result = numbers.matrix.multiply(weights, patternInput).flat();
    const patternvalidate = result.map(activationFun)
    console.log('result', patternvalidate);
    patternInputDom.updateTds(patternvalidate);

    return train(weights, patternvalidate, expectedPatterns, patternInputDom, i + 1)
}

const activationFun = value =>  value >= 0 ? 1 : -1

