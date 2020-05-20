const stringGen = require('./Generador de cadenas/generator')
const validateString = require('./Generador de cadenas/validator')

// Generation

test('n = 1, m = 2 expects to be: abbcccc', () => {
  expect(stringGen(1, 2)).toBe('abbcccc')
})

test('n = 2, m = 4 expects to be: aabbbbcccccccc', () => {
    expect(stringGen(2, 4)).toBe('aabbbbcccccccc')
})

test('n = 8, m = 9 expects to be: aaaaaaaabbbbbbbbbccccccccccccccccccccccccc', () => {
  expect(stringGen(8, 9)).toBe('aaaaaaaabbbbbbbbbccccccccccccccccccccccccc')
})

// Validation

test('abbcccc expects to be true', () => {
  expect(validateString('abbcccc')).toBe(true)
})

test('aaaaaaaabbbbbbbbbccccccccccccccccccccccccc expects to be true', () => {
  expect(validateString('aaaaaaaabbbbbbbbbccccccccccccccccccccccccc')).toBe(true)
})

test('aaabbcccccc expects to be false', () => {
  expect(validateString('aaabbcccccc')).toBe(false)
})