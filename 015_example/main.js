
//declaro mis variables 
var mongoose = require('mongoose');
var userSchema = require('./userSchema')

//Lineas de Conexión de acuerdo a mi varaibles 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Alumnos', {useMongoClient:true});

//Creacion del Modelo en mongo DB
var User = mongoose.model('User',userSchema,"user2");


//Actualizaciion en MongoDB------
User.update({_id: '5b4406c008c3edde46495d89'}, {$set:{email:'iarjona@ittepic.edu.mx'}},
function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("<----------Actualizacion------------->");
    console.log(docs);
    process.exit(0);
});