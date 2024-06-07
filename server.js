const express = require("express")
var cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const app = express()

app.use(cors())
app.use(bodyParser.json())

mongoose.connect("mongodb://127.0.0.1:27017/jobboard").then(() =>{
    console.log("DATABASE IS CONNECTED")
}).catch((error) => {
    console.log("DB CONNECTION IS FAILED")
    console.log(error)
})

const Schema = mongoose.Schema
const dataSchema = new Schema({
    password: String,
    firstname:String,
    lastname:String,
    email:String,

});

const Informations = mongoose.model('informations', dataSchema);

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Informations.findOne({ email, password });

        if (user){
            console.log(true)
            res.status(200).json(true);
        } else {
            console.log(false)
            res.status(200).json(false);
        }
    } catch (error) {
        res.status(500).json(false);
        console.log(error)
    }
});



app.post("/signup" , async(req,res) => {
    const {firstname,lastname,email,password} = req.body

    const data1 = new Informations({
        firstname:firstname,
        lastname:lastname,
        email:email,
        password:password
    })

    data1.save().then(() => {
        console.log(true)
        res.status(200).json(true);
    }).catch((error) => {
        console.log(false)
        res.status(500).json(false);
    })
})


app.listen(3000,() => {
    console.log(`http://127.0.0.1:3000`)
})