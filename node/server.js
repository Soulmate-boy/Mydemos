/**
 * 服务器模块
 * 注意utf-8编码，不然浏览器打开中文显示是乱码
 */


// 引入http模块
var http = require('http');
//引入url模块（用来解析数据）
var url = require('url');
var num = 0;

// 用函数包裹以便导出到其他文件夹使用
// 抛出			//这里需要接收一个参数（路由）
exports.start = function(route) {
	// 创建请求(第一个是请求参数，第二个是请求处理)
	http.createServer(function(request, response) {
		console.log('Request:这是事件驱动的异步服务器端js和回调次数：' + (num++))
		
		var pathname = url.parse(request.url).pathname;
		console.log("请求参数："+pathname);
		
		 route(pathname);
		 
		// 配置请求头
		response.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		// 配置请求内容
		response.write('hello,world! this is “服务器模块”');
		// 请求结束
		response.end();
	}).listen(8088); // 配置端口
};


exports.upload = function upload(){
	console.log("这是：upload 模块")
};


/**
 * 运行此文件在浏览器（localhost:8888）本地打开可查看 请求的内容
 * 
 * 分析HTTP服务器
那么接下来，让我们分析一下这个HTTP服务器的构成。

第一行请求（require）Node.js自带的 http 模块，并且把它赋值给 http 变量。

接下来我们调用http模块提供的函数： createServer 。这个函数会返回一个对象，这个对象有一个叫做 listen 的方法，这个方法有一个数值参数，指定这个HTTP服务器监听的端口号。

咱们暂时先不管 http.createServer 的括号里的那个函数定义。

我们本来可以用这样的代码来启动服务器并侦听8888端口：

var http = require("http");

var server = http.createServer();
server.listen(8888);
这段代码只会启动一个侦听8888端口的服务器，它不做任何别的事情，甚至连请求都不会应答。

最有趣（而且，如果你之前习惯使用一个更加保守的语言，比如PHP，它还很奇怪）的部分是 createServer() 的第一个参数，一个函数定义。

实际上，这个函数定义是 createServer() 的第一个也是唯一一个参数。因为在JavaScript中，函数和其他变量一样都是可以被传递的。

 */
