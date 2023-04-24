 
 const express = require("express")
const { USD5 , MaleUser , lName , Nodigit,Topcity} = require("./controller")

const app = express()

const cors = require("cors");
app.use(cors());



 app.get("/home",USD5)
 app.get("/MaleUser",MaleUser)
 app.get("/lName",lName)
 app.get("/Nodigit",Nodigit)
 app.get("/Topcity",Topcity)



app.listen(5000,()=>{
    console.log("server runnnIg ")
})   










