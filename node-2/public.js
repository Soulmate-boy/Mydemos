/**
 * 公共方法
 * 调用函数方法；
 * 只能支持一个exports 函数
 */
module.exports = {
    fun2: function (res) {
        console.log('我是fun2');
        res.write('你好，我是fun2');

    },
    fun3: function (res) {
        console.log('我是fun3');
        res.write('你好，我是fun3');

    },
}
