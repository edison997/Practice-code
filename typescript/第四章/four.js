{
    var user = /** @class */ (function () {
        function user(n, a) {
            this.name = n;
            this.age = a;
        }
        user.prototype.info = function () {
            return "\u660E\u5B57" + this.name + ",\u5E74\u9F84" + this.age;
        };
        return user;
    }());
    var p1 = new user('zs', 19);
    var p2 = new user('ws', 92);
    console.log(p1);
    console.log(p1.info());
    var per = [p1, p2];
    console.log(per);
}
// function fn(args:string){
//     return args
// }
// console.log(fn('1'));
// function fn2(args:boolean){
//     return args
// }    
// console.log(fn2(true));
function fn(args) {
    return args;
}
// 下面两种写法都可以，一个是自动推断的，一个是自己定的
// let one = fn('2')
var one = fn('2');
console.log(one);
// let two = fn<boolean>(true)
var two = fn(true);
console.log(two);
// 这个不会返回确定的类型
function fn2(args) {
    return args;
}
console.log(fn2('1'));
console.log(fn2(true));
