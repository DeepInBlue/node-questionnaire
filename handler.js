var mongodb = require('mongodb')
var template = require('node-t')
var querystring = require('querystring')
var path = require('path')
var config = require('./config')

var client = new mongodb.Db('database', new mongodb.Server('127.0.0.1', 27017, {}));

function validate(token){
    
    var users = config.users
    
    if (token){
        for (var i in users){
            console.log('checking... if ' + token + ' equals ' + users[i]['token'])
            if (token === users[i]['token']){
                forf = users[i]['formtype']
                console.log('Returning forf of value ' + forf)
                return forf
                }
            }
        return false
        }
    else {
        return users['default']['token']
        }
    }

function questionnary (response, formtype, error){
    console.log('Presenting questionnary!');
    client.open(function(e, sclient){
            if (e) {
                console.log('Error accessing database!');
                }
            else {
                client.collection(formtype, function(e, collection){
                    collection.find().toArray(function(e, steps){
                        console.log(steps);
                        var tmp = template.fromFile(path.join(config.directory, 'presentation.html'));
                        body = tmp.render({'steps': steps});
                        response.writeHead(200, {'Content-Type': 'text/html'});
                        response.write(body);
                        response.end();
                        sclient.close();
                        
                    });
                });
                } 
         });
    }

function login (response, error){
    console.log('Logging in!');
    var tmp = template.fromFile(path.join(config.directory, 'login.html'));
    body = tmp.render({'error': error} || {});
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(body)
    response.end();
    }

function logout(response, error){
    console.log('Logging out!')
    var tmp = template.fromFile(path.join(config.directory,'logout.html'));
    body = tmp.render({})
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(body);
    response.end();
    }

function handle(request, response, postdata, path){
    console.log(request.method);

    if (path === '/logout'){
        logout(response)
        }

    if (path === '/questionnary') { 
        forf = validate(request.session.data.token);
        if (forf){
            if (request.method === 'POST'){
                console.log('Receiving POST data!');
                var data = querystring.parse(postdata);
                console.log(data);
                console.log(postdata);
                client.open(function(e, sclient){
                    if(e){
                        console.log('Error accessing database');
                        }
                    else {
                        client.collection(forf+'_answers', function(e, collection){
                            collection.insert(data);
                            console.log('Answers saved in the database!');
                            response.writeHead(200, {'Content-Type': 'text/plain'});
                            response.end()
                            request.session.data.token = validate();
                            });
                        }
                    sclient.close()
                    });
                }
            else {
                console.log('Go to questionnary!');
                questionnary(response, forf);
                }
            }
        else {
            console.log('Not authenticate request' + forf);
            login(response);
            }
        }
    
    if (path === '/login'){
        if (request.method === 'POST'){
            token = querystring.parse(postdata).token
            forf = validate(token); //forf is form or false
            if (forf){
                request.session.data.token = token;
                questionnary(response, forf)
                }
            else {
                login(response, 'Nieprawidłowy kod!');
                }
        }
        else {
            login(response);
            }
        }
    }

exports.handle = handle
