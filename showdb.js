mongodb = require('mongodb')

var client = new mongodb.Db('database', new mongodb.Server('127.0.0.1', 27017, {}));

client.open(function(e, sclient){
            client.collection('patientform_answers', function(e, collection){
                collection.find().toArray(function(err, results){
                    for (var i in results){
                        console.log(results[i]);
                        }
                    });
                });
            });

