
var test = function(req, res) {

    writeStatic(req, res);
    writeHead(req, res);
    writeContent(req, res);
    writeFoot(req, res);

}

var writeStatic = function(req, res) {
    setTimeout(
        function(){
            console.log('writeStatic');
            res.write('<head>'+
                '<meta http-equiv="Content-Type" content="text/html; charset=utf-8">'+
                '<link rel="stylesheet" type="text/css" href="/stylesheets/test.css">'+
                    '<script src="/javascripts/lib/jquery-min.js"></script>'+
                '</head>');
        } ,
        1
    );
}
var writeHead = function(req, res) {
    setTimeout(
        function(){
            console.log('writeHead');
            res.write('<div id="head">head</div>');
        } ,
        2000
    );
}

var writeContent = function(req, res) {
    setTimeout(
        function(){
            console.log('writeContent');
            res.write('<div id="content"><div id="main">main</div><div id="right">right</div><div class="clear-both"></div></div>');
            res.end();
        } ,
        6000
    );
}

var writeFoot = function(req, res) {
    setTimeout(
        function(){
            console.log('writeFoot');
            res.write('<div id="foot">foot</div>');
        } ,
        3000
    );
}

exports.test = test;