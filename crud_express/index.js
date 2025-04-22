const express = require('express')
const app = express()

//to read json data from body we use middleware
app.use(express.json())

const employee = [

    {"id":1, "full_name": "Virat", "city" : "Pune", "contact" : 7744556633 },
    {"id":2, "full_name": "Rohit", "city" : "Mumbai", "contact" : 770006633 },
    {"id":3, "full_name": "MSD", "city" : "Ranchi", "contact" : 7744558888 },
    {"id":4, "full_name": "Rahul", "city" : "Nagpur", "contact" : 8888556633 },
    {"id":5, "full_name": "Virendra", "city" : "Delhi", "contact" : 8745556633 }

]
console.log('Array length',employee.length)
//to read all data we use http method - GET
app.get("/employees",(req,res)=>{
    res.send(employee)
})

//to READ specific employee data - GET
//USE FIND() METHOD - ARRAY METHOD - array_name.find(()=>{})
//Callback fun is a fun which is passed as an argument in another function 
//use PARAMS - routing parameter

// == - check only value
// === - check datatype as well as value

app.get("/employees/:empid",(req,res) => {
    const empgetbyID = employee.find((emp)=>emp.id === +(req.params.empid))
    //const empgetbyID = employee.find((emp)=>emp.id === parseInt(req.params.empid))   
    //const empgetbyID = employee.find((emp)=>emp.id === Number(req.params.empid))              
    if(empgetbyID){
        res.send(empgetbyID)
    }else{
        res.send('Employee Not Found')
    }
})

//DATA SUMBIT - POST METHOD
app.post('/employees/newemp',(req,res)=>{
    const newEmp = {
        id : employee.length + 1,
        full_name : req.body.full_name,
        city : req.body.city,
        contact :req.body.contact
    }
    employee.push(newEmp)
    res.send(newEmp)
})

//update the records - PUT Method
app.put('/employees/update/:empid',(req,res)=>{
    const empgetById = employee.find((emp)=>emp.id === +(req.params.empid))
    if(empgetById){
        empgetById.full_name = req.body.full_name,
        empgetById.city = req.body.city,
        empgetById.contact = req.body.contact
        res.send(empgetById)
    }else{
        res.send('Employee Not Found')
    }
})

//to delete data - DELETE
app.delete('/employees/delete/:empid',(req,res)=>{
    const empgetbyID = employee.find((emp)=>emp.id === +(req.params.empid))
    if(empgetbyID){
        const index = employee.indexOf(empgetbyID)
        employee.splice(index,1)
        res.send(empgetbyID)
    }else{
        res.send('Employee Not Found')
    }
})

//const array1 = [1,2,3,4,5,6]
//array1.pop() - last element remove
//array1.shift() - first element remove
//splice(indexnumber, deleteCount, newElement)
//array1.splice(1,0,10) - element add 
//array1.splice(3,1)
//console.log(array1)

app.listen(8080,()=>{
    console.log('8080 is running....')
})