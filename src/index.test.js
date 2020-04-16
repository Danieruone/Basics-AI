const stringGen = require('./generator')

test('n = 1, m = 2 expects to be: abbcccc', () => {
  expect(stringGen(1, 2)).toBe('abbcccc')
})

test('n = 2, m = 4 expects to be: aabbbbcccccccc', () => {
    expect(stringGen(2, 4)).toBe('aabbbbcccccccc')
})