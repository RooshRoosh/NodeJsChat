/**
 * Created with PyCharm.
 * User: dns
 * Date: 15.09.13
 * Time: 13:29
 * To change this template use File | Settings | File Templates.
 */

var http = require('http'),
    template = require('swig');


var server = new http.Server();


server.listen(1337, '127.0.0.1');

server.on('request', function(req, res){

    var tmpl = template.compileFile('/Users/dns/Git/AnotherC/templates/index.html');
    res.end(tmpl({
        'title':'Hello!',
        'list':[1,2,3,4,5,6,7,8,9,10]
    }))
});