const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(express())
app.use(cors())
mongoose.set("strictQuery", false);
let PORT = 8080

mongoose.connect(`mongodb+srv://nft-marketplace:bi3A8FulfZWxQuzI@cluster0.xtvensf.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => console.err(error))

app.use(express.json())

const CostumerSchema = new mongoose.Schema({
    name: String,
    desc: String,
    city: String,
    
});

const CustomerModel = mongoose.model("Customer",CostumerSchema)



app.get("/api/customers",(req,res)=>{
    CustomerModel.find(null,"name desc city").exec((error,data)=>{
        if(error) return res.status(500).send({error})
        res.send(data)
    })
})


app.post("/api/customers",(req,res)=>{
    let newCustomer = new CustomerModel({
        ...req.body
    })

    // newCustomer.save()
    // res.send("Customer created:",newCustomer).then()
    newCustomer.save().then(() => res.send({ message: "Customer successfully created!", newCustomer })).catch(error => res.status(500).send({ error }))
})


app.listen(PORT, () => {
    console.log("Server running on " + PORT);
})