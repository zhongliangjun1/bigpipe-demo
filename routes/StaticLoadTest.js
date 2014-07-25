/**
 * Created with JetBrains WebStorm.
 * User: liangjun.zhong
 * Date: 14-7-25
 * Time: AM11:39
 * To change this template use File | Settings | File Templates.
 */


var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

    console.log(req.url);

    switch (req.url) {
        case '/statictest' :
            sendPage(req, res);
            break;
        case '/1.js' :
            sendJS(req, res, '1.js', 4000);
            break;
        case '/2.js' :
            sendJS(req, res, '2.js', 2000);
            break;
        case '/3.js' :
            sendJS(req, res, '3.js', 1000); // 7000
            break;
        case '/4.js' :
            sendJS(req, res, '4.js', 1500); // 7000
            break;
    }

}).listen(3000, "localhost");

var sendPage = function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    var page = fs.readFileSync('../views/StaticLoadTest.html');
    res.end(page);
}

var sendJS = function(req, res, filename, time) {
    setTimeout(function(){
        res.writeHead(200, {'Content-type': 'application/x-javascript'});
        var js = fs.readFileSync('../public/javascripts/'+filename);
        res.end(js);
    },
    time
    );
}