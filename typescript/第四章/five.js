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
    console.log(p1.name);
    for (var key in p1) {
        if (p1.hasOwnProperty(key)) {
            console.log(key);
            console.log(p1[key]);
        }
    }
}
// 泛型中的继承
function getLength(arg) {
    return arg.length;
}
console.log(getLength('houdunren.com')); //13
console.log(getLength(['后盾人'])); //1
console.log(getLength(18)); //undefined
function getLength2(arg) {
    return [arg, arg.length];
}
var hd = getLength2('houdunren.com');
console.log(hd);
