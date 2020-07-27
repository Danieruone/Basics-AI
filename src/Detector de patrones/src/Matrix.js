export default class Matrix {
    constructor(size) {
        this.size = size;
        this.table = document.createElement('table')
        this.table.classList.add('table')
        this.pattern = this.fillArray(this.size);
        this.tds = this.createTds();
        this.createTrs(this.tds);
        console.log('pattern initialization ', this.pattern);
    }

    getPattern() {
        return this.pattern
    }

    getTable() {
        return this.table
    }

    fillArray(len, i = 0, arr = []) {
        if (i === len) return arr;
        arr.push(-1);
        return this.fillArray(len, i + 1, arr)
    }

    createTds() {
        return this.pattern.map((v, i) => {
            const td = document.createElement('td')
            td.innerHTML = v.toString();
            td.data = {id: i, value: v}
            this.tdListener(td);
            return td;
        })
    }

    createTrs(tds) {
        tds.reduce((acc, curr) => {
            acc.tds.push(curr);
            acc.i = acc.i + 1;
            if (this.size / acc.i === Math.sqrt(this.size)) {
                const tr = document.createElement('tr');
                acc.tds.forEach(td => tr.appendChild(td))
                this.table.appendChild(tr);
                acc.i = 0;
                acc.tds = []
            }
            return acc;
        }, {tds: [], i: 0})
    }

    tdListener(td) {
        td.addEventListener('click', (e) => {
            const {id, value} = e.target.data

            if (value === -1) {
                e.target.classList.add("selected")
                e.target.innerHTML = 1;
                e.target.data.value = 1;
            } else {
                e.target.classList.remove("selected")
                e.target.innerHTML = -1;
                e.target.data.value = -1;
            }

            this.pattern[id] = e.target.data.value;
            console.log('pattern updated', this.pattern);
        })
    }

    updateTds(patterArr) {
        console.log(this.tds);
        this.tds.forEach((td, i) => {
            const value = patterArr[i];
            if (value === 1) {
                td.classList.add("selected")
                td.innerHTML = 1;
                td.data.value = 1;
            } else {
                td.classList.remove("selected")
                td.innerHTML = -1;
                td.data.value = -1;
            }
        })
    }
}