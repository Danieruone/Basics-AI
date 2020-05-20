function validateString(string){
    const array = string.split('')
    numA = array.filter(string => string == 'a').length
    numB = array.filter(string => string == 'b').length
    numC = array.filter(string => string == 'c').length

    return numC == 2 * numA + numB
}

module.exports = validateString