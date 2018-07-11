//declaro mis variables 
var mongoose = require("mongoose");
var  userSchema= require("./userSchema");

//lineas de conexion de acuerdo a mis variables
mongoose.Promise= global.Promise;
mongoose.connect("mongodb://localhost:27017/Alumnos",{useMongoClient:true});

//creacion del Modelo en mongo

var User = mongoose.model('User',userSchema,"user3");


//crear el documento en memoria Ram
var user1 = new User({
    name: "User1",
    email: "user1@ittepic.edu.mx"

});

//guardamos el docuemnto en MongoDB
user1.save((error,data)=>{
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Guardado"+data)
    process.exit(0);
});

