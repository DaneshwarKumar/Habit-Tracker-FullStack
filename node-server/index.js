const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));


// connecting mongoDB with nodejs using mongoose 
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/demo');
  console.log('db connected')
}

// creating schema 
const userSchema = new mongoose.Schema({
    HabitName: String,
    WeekView: String
});


// creating an models
const User = mongoose.model('User', userSchema);

// creating an server 
const server = express();

// using an middlewares 
server.use(cors());
server.use(bodyParser.json());


// sending the data to database 
server.post('/habitWeek',async (req,res)=>{
     
    let user = new User();
    user.habit = req.body.habit;
    user.week = req.body.week;
    const doc = await user.save();

    console.log(doc);
    res.json(doc);
});


// getting the data from database 
server.get('/Weekview',async (req,res)=>{
    const docs = await User.find({});
    res.json(docs)
})

server.listen(8080,()=>{
    console.log('server started')
});
