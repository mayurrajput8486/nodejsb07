const express = require('express')
const mongoose = require('mongoose')

const app = express()

//use middleware to read body data
app.use(express.json())

//connect mongoose with mongodb server 
// we require mongodb server 
//const myUri = 'mongodb://127.0.0.1:27017/database-name'
//const myport = 8000
mongoose.connect('mongodb://127.0.0.1:27017/b07')
.then(()=>{
    console.log('Connected to MongoDB')
}).catch((error)=>{
    console.log('Failed to connect',error)
})

//create one interface / model / class
const employeeSchema = new mongoose.Schema({
    name : String,
    email : String,
    role : String,
    city : String,
    contact : Number
})

//create collection 
//mongoose.model() method assign schema or interface to the collection
//collection stored in mongo always in lowercase and plural 
const Employee = mongoose.model('Employee',employeeSchema)


//Add data in collection - POST

app.post('/employees/newemp', async (req,res)=>{
    const newEmployee = new Employee({
        name : req.body.name,
        email : req.body.email,
        role : req.body.role,
        city : req.body.city,
        contact : req.body.contact,
    })
    const saveEmp = await newEmployee.save()
    res.send(saveEmp)
})

//to get or read data
app.get("/employees", async (req,res)=>{
    const employees = await Employee.find()
    res.send(employees)
})

//Access specific user data - params (useParams)
app.get("/employees/:id",async (req,res)=>{
    const emp = await Employee.findById(req.params.id)
    if(emp){
        res.send(emp)
    }else{
        res.status(404).send("Employee Not Found")
    }
})

//Update data for specific user

app.put("/employees/update/:id", async (req,res)=>{
    const updateEmp = await Employee.findByIdAndUpdate(req.params.id ,{
        name : req.body.name,
        email : req.body.email,
        role : req.body.role,
        city  : req.body.city,
        contact : req.body.contact
    }, {new : true})

    if(updateEmp){
        res.send(updateEmp)
    }else{
        res.status(404).send('Employee Not Found')
    }
})

app.listen(8000,()=>{
    console.log('server running on port no. 8000')
})