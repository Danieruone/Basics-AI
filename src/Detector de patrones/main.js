import Matrix from './src/Matrix.js'

const dimension$ = document.getElementById('dimension')
const nPtn$ = document.getElementById('n-ptn')
const containerPtn$ = document.getElementById('container-ptn')
const generate$ = document.getElementById('generate')

let patternTables = []

function createTables(size, len, i = 0, arr = []) {
    if (i === len) return arr;
    const matrix = new Matrix(size)
    arr.push(matrix);
    return createTables(size, len, i + 1, arr)
}

generate$.addEventListener('click', () => {
    containerPtn$.innerHTML = ''
    const dimension = +dimension$.value;
    const nPatterns = +nPtn$.value;

    patternTables = createTables(dimension * dimension, nPatterns);
    patternTables.forEach(t => containerPtn$.appendChild(t.getTable()))
})

