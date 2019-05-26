/**
 * 引入server.js 来使用
 */

// 引入抛出的模块
var server = require('./server.js');
// 引入路由
var router = require('./router.js');

// 调用（模块名字.模块方法）,将路由传递进去
server.start(router.route);
