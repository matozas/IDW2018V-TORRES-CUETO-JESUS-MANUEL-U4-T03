//declaro mis variables 
var mongoose = require("mongoose");
var  user3Schema= require("./User3Schema");

//lineas de conexion de acuerdo a mis variables
mongoose.Promise= global.Promise;
mongoose.connect("mongodb://localhost:27017/Alumnos",{useMongoClient:true});

//creacion del Modelo en mongo

var User = mongoose.model('User',user3Schema,"user5");


//Guardamos en memoria

User.create({name: 'user3', email: 'user3@ittepic.edu.mx'},
    function(error){
        if(error){
            console.log(error);
            process.exit(1);
        }
        console.log("Guardado USER 3")
    });
  

