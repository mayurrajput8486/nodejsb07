console.log(1)
console.log(2)
//setTimeout(function, timer (millisecond))
setTimeout(()=>{
    console.log('Calculating data...')
},1000)

setTimeout((a)=>{
    console.log(a*a)
},2000,5)

console.log(3)
console.log(4)

