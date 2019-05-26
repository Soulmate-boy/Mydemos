function User(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.enter = function () {
        console.log('恭喜' + this.age + '岁的' + this.name + '（ID:' + this.id + '）进入聊天室！')
    }
}
module.exports = User;