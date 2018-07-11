//declaro mis variables 
var mongoose = require("mongoose");
var  userSchema2= require("./User2Schema");

//lineas de conexion de acuerdo a mis variables
mongoose.Promise= global.Promise;
mongoose.connect("mongodb://localhost:27017/Alumnos",{useMongoClient:true});

//creacion del Modelo en mongo

var User = mongoose.model('User',userSchema2,"user4");


//crear el documento en memoria Ram
var user2 = {
    name: "User2",
    email: "user2@ittepic.edu.mx"

    
}

//guardamos el docuemnto en MongoDB
User.create(user2,function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Guardado USER2");
});
