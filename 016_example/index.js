//declaro mis variables 
var mongoose = require('mongoose');
var userSchema = require('./Schema')


//Lineas de Conexión de acuerdo a mi varaibles 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Alumnos', {useMongoClient:true});

//Creacion del Modelo en mongo DB
var User = mongoose.model('User',Schema,"consul");

//Actualizaciion en MongoDB------
User.update({_id: '5b4406c008c3edde46495d90'}, {$set:{title:'Hora Pico 2'}},
function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("<----------Actualizacion------------->");
    console.log(docs);
    process.exit(0);
});