const sq = require('./square')
const cube = require('./cube')
const percent = require('./percentage')

console.log(sq.sqaureOfNum(10))
console.log(`sqaure of 17 - ${sq.sqaureOfNum(17)}`)

console.log(`The cude of 7 - ${cube.cubeOfNum(7)} `)
console.log(`The cube of 17 - ${cube.cubeOfNum(17)}`)

console.log(`Mahesh got percentage - ${percent.StuPercentage(600,480)} %`)
console.log(`Rajesh got percentage in SSC - ${percent.StuPercentage(600,420)} %`)