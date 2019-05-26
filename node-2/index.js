/**
 * Created by LumpSum on 2019/5/19.
 */
var http = require("http");

var public = require("./public.js");
var User = require('./user.js');
var Teahcer = require('./teahcer.js');



var num = 0;

http.createServer(function (request, response) {

    response.writeHead(200, { "Content-Type": "text/html", "charset": "utf-8" });

    // console.log(request.url);    //清除两次刷新

    if (request.url !== '/favicon.ico') {
        console.log("|-------第 " + (num++) + "次刷新: ---------");
        console.log('|-----------------------------------------\n');

        // fun1(response);

        // 字符串调用-->配合路由使用
        // public['fun2'](response);
        // public.fun3(response);

        // user = new User(num++,'张三',10);
        // user.enter();

        teahcer = new Teahcer(num,'李四',90);
        teahcer.enter();
        teahcer.teach(response);



        response.end();

        console.log('\n')
        console.log('|-----------------------------------------')
    }

}).listen(8888);
console.log("---------------->>: Server running at http://192.168.1.107:8888/");

function fun1(res) {
    console.log('fun1');
    res.write('hello,我是fun1');
}

