/**
 * 路由的使用方法
 * 根据url的路径来判断需要执行的方法
 * 
 */
module.exports = {
    login:function(req,res){
        console.log('登录！');
    },
    zhuce:function(req,res){
        console.log('注册！');
    }
}