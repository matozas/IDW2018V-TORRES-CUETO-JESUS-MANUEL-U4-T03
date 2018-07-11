//declaro mis variables 
var mongoose = require('mongoose');
var userSchema = require('./Schema')

//Lineas de Conexión de acuerdo a mi varaibles 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Alumnos', {useMongoClient:true});

//Creacion del Modelo en mongo DB
var User = mongoose.model('User',Schema,"consultaBlog");

//Consulta de Documento en MongoDB
User.find({autor:'Jesus Torres'},
function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("----------Consulta de Blog-------------");
    console.log(docs);
});