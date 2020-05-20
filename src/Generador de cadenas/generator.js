function genString(n, string, array){
    if(n === 1){
        array.push(string)
        return console.log('letras insertadas.')
    }
    array.push(string)
    genString(n-1, string, array)
}

const stringGen = (n, m) => {
    if(n < 0 || m < 0) throw new Error('ningún valor puede ser menor que cero.')
    if(n > m) throw new Error('n no puede ser mayor que m.')
    if(n === m) throw new Error('n y m no pueden ser iguales.')
    
    let array = []
    const E = ['a', 'b', 'c']
    genString(n, E[0], array)
    genString(m, E[1], array)
    genString(n * 2 + m, E[2], array)
    return array.join('')
}

module.exports = stringGen