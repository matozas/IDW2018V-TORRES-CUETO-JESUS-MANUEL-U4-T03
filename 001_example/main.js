
//declaro mis variables 
var mongoose = require("mongoose");
var  userSchema= require("./userSchema");

//lineas de conexion de acuerdo a mis variables
mongoose.Promise= global.Promise;
mongoose.connect("mongodb://localhost:27017/Alumnos",{useMongoClient:true});

//creacion del Modelo en mongo

var User = mongoose.model('User',userSchema,"user2");

//crear el documento en memoria Ram
var user = new User({
    name: "Israel",
    email: "iarjona@ittepic.edu.mx",
    password:"12345"

});

//guardamos el docuemnto en MongoDB
user.save((error,data)=>{
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Guardado"+data)
    process.exit(0);
});