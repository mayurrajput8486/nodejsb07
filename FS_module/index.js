const fs = require('fs')

//to create folder
//fs.mkdirSync('static')

//to create file
//fs.writeFileSync('public/readme.txt',"I am readme file")
//fs.writeFileSync("static/about.html","<h1>I am about page<h1>")
//console.log('File Created !!')

//to read data
//const mydata = fs.readFileSync('public/readme.txt',"utf-8")
//const mydata = fs.readFileSync('static/about.html',"utf-8")
//console.log(mydata)
//console.log('Read file')

//to add data
//fs.appendFileSync("public/readme.txt","I am Updated Data")
//fs.appendFileSync("static/home.html","<button>Click Me </button>")
//console.log('Add Added !!')

//to rename file
//fs.renameSync("public/readme.txt","public/newReadme.txt")
//.renameSync("static/home.html","static/index.html")
//console.log('File Rename !!')

//to copy file
//first parameter - old file name
//second parameter - new file name
//fs.copyFileSync("public/newReadme.txt","public/readme.txt")
//fs.copyFileSync("static/about.html","public/myself.html")
//console.log('file copied !!!')

//to delete file
//fs.unlinkSync("public/myself.html")
//console.log('file deleted')

//to delete folder
//fs.rmdirSync("public")
//console.log('folder deleted')


//fs.mkdirSync('public')
//fs.writeFileSync("public/abc.txt","Good Morning...")
//const mydata = fs.readFileSync("public/abc.txt","utf-8")
//console.log('Data Read')
//console.log(mydata)

const os = require('os');
const numCores = os.cpus().length;
console.log(`Number of CPU cores: ${numCores}`);