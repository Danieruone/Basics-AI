import MatrixDom from './Matrix.js'

export class App {
    constructor() {
        this.weights = []
        this.memoryMatrices = []
        this.inputMatrix = null
        this.generateMatricesListener();
        this.trainListener();
        this.runListener();
    }

    createMatrices(size, quantity, container, i = 0, arr = []) {
        if (i === quantity) return arr.length > 1 ? arr : arr[0];
        const matrix = new MatrixDom(size)
        container.appendChild(matrix.getTable())
        arr.push(matrix);
        return this.createMatrices(size, quantity, container, i + 1, arr)
    }

    evolvePattern(i = 0, arr = []) {
        if (i === 1000) {
            return arr;
        }

        const coefficient = this.inputMatrix.getPattern().map(v => [v])
        const product = numbers.matrix.multiply(this.weights, coefficient).flat();
        const patternEvolved = product.map(v => v >= 0 ? 1 : -1)
        this.refreshInputMatrix(patternEvolved);

        console.log('==============================')
        console.log('Pattern evolved');
        console.log(patternEvolved);

        return this.evolvePattern(i + 1, patternEvolved)
    }

    refreshInputMatrix(pattern) {
        this.inputMatrix.updateTds(pattern)
    }

    generateMatricesListener() {
        const size$ = document.getElementById('size')
        const quantity$ = document.getElementById('patterns-quantity')

        const patternsContainer$ = document.getElementById('patterns-container')
        const inputContainer$ = document.getElementById('input-container')

        const btn$ = document.getElementById('generate-matrices')

        btn$.addEventListener('click', () => {
            patternsContainer$.innerHTML = ''
            inputContainer$.innerHTML = ''

            const size = Math.pow(+size$.value, 2);
            const quantity = +quantity$.value;

            this.memoryMatrices = this.createMatrices(size, quantity, patternsContainer$);
            this.inputMatrix = this.createMatrices(size, 1, inputContainer$)
        })
    }

    trainListener() {
        const btn = document.getElementById('train')

        btn.addEventListener('click', () => {
            const transposedMatrices = this.memoryMatrices.map(pattern => {
                return pattern.getPattern()
                    .map(i => pattern.getPattern().map(j => i * j))
            })

            this.weights = numbers.matrix.addition(...transposedMatrices)
                .map((x, i) => x.map((y, j) => i === j ? 0 : y))

            console.log('weights: ', this.weights)
        })

    }

    runListener() {
        const btn = document.getElementById('run')

        btn.addEventListener('click', () => {
            const result = this.evolvePattern()
            console.warn('SUCCESS', result);
        })


    }
}
new App();