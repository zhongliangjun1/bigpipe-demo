var fs = require('fs');
var ejs = require('ejs');

var test = function(req, res) {

    res.writeHead(200, {'Content-type': 'text/html'});

    writeContainer(req, res);
    writeHead(req, res);
    writeContent(req, res);
    writeFoot(req, res);

}

var writeContainer = function(req, res) {
    var containerEjs = fs.readFileSync('./views/container.ejs');
    var containerEjsStr = containerEjs+'';
    console.log(typeof containerEjsStr);
    var containerHtml = ejs.render(containerEjsStr);
    res.write(containerHtml);
}
var writeHead = function(req, res) {
    setTimeout(
        function(){
            console.log('writeHead');
            res.write('<script>console.log(\'writeHead\');$("#head").html("head")</script>');
        } ,
        2000
    );
}

var writeContent = function(req, res) {
    setTimeout(
        function(){
            console.log('writeContent-main');
            res.write('<script>console.log(\'writeContent-main\');$(\"#main\").html(\'<div>main</div>\')</script>');
        } ,
        4000
    );
    setTimeout(
        function(){
            console.log('writeContent-right');
            res.write('<script>console.log(\'writeContent-right\');$(\"#right\").html(\'<div>right</div>\')</script>');
            res.end();
        } ,
        6000
    );
}

var writeFoot = function(req, res) {
    setTimeout(
        function(){
            console.log('writeFoot');
            res.write('<script>console.log(\'writeFoot\');$("#foot").html("foot")</script>');
        } ,
        3000
    );
}

exports.test = test;