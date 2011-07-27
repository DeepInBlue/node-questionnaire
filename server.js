var http = require('http')
var url = require('url')
var nodestatic = require('node-static')
var handler = require('./handler')
var session = require('./session.js/lib/core').magicSession();

var staticServer = new nodestatic.Server('.');

function connection(request, response){
    var postdata = '';
    var path = url.parse(request.url).pathname;
    console.log(path)
   
    if (path.search('/static/') == 0){
        console.log('Static file request');
        staticServer.serve(request, response);
        }

    else {
        console.log('Dynamic file request');
        request.addListener('data', function(chunk){
            console.log(chunk);
            postdata += chunk;
            });
        request.addListener('end', function(){
            handler.handle(request, response, postdata, path)
            });
        }
    }
    
http.createServer(connection).listen(8888);
