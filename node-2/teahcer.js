var User = require('./user.js');
function Teahcer(id,name,age){
    // 继承,把User应用到Teacher上
    User.apply(this,[id,name,age]); //初始化构造
    this.teach = function(res){
        res.write(this.name+'讲课');
    }
}
module.exports = Teahcer;