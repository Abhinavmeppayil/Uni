const express = require('express')
const mongoose = require('mongoose')
const cors = require ('cors')
const bycrypt = require('bcrypt')
const jwt= require("jsonwebtoken")
// const cookieParser = require('cookie-parser')
const userModel = require('./model/Users')

const app = express()
app.use(cors())
app.use(express.json())
// app.use(cookieParser)


//mongodb connection
mongoose.connect("mongodb://127.0.0.1:27017/Un")



// app.post("/createUser", (req, res)=>{
//         userModel.create((req.body))
//     .then(users =>res.json(users))
//     .catch( err =>err.json(err))
//     .catch(err => res.json.apply(err))
// })
app.post("/createUser", async (req, res) => {
    try {
      const user = await userModel.create(req.body);
      res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while creating the user" });
    }
  });

  app.get("/getUser", async (req, res) => {
    try {
      const user = await userModel.find();
  
      
  
      res.status(200).json({ message: "User retrieved successfully", user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while retrieving the user" });
    }
  });


  app.get('/getUser/:id', (req ,res)=>{
    const id = req.params.id;
    userModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
  })

  app.put('/updateUser/:id', (req, res) =>{
    const id = req.params.id;
    userModel.findByIdAndUpdate({_id:id},{task:req.body.task, 
      email:req.body.email,
      description:req.body.description,
       date:req.body.date })
    .then(users => res.json(users))
    .catch(err => res.json(err))

  })
  


app.listen(3001, ()=>{
    console.log('sever is running')
})

// const express = require('express')

// const cors = require('cors')

// const server= express()

// server.use(cors({
//     origin:'http://localhost:5173'
// }))



// server.use(express.json())

// server.listen(8000, ()=>{
//     console.log('listening to port 8000')
// })