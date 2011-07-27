var doctorform = require('./doctorform')
var patientform = require('./patientform')
var mongodb = require('mongodb')

var client = new mongodb.Db('database', new mongodb.Server('127.0.0.1', 27017, {}));

client.open(function(e, sclient){
    client.collection('doctorform', function(e, collection){
            for (var i in doctorform){
                collection.insert(doctorform[i]);
                }
            });
    client.collection('patientform', function(e, collection){
            for (var i in patientform){
                collection.insert(patientform[i]);
                }
            });
    });





