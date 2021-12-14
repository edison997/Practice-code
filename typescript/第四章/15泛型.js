var fa = "sd";
fa = "zs";
function drag(arg) {
    return arg;
}
var hdhd = drag("zs");
function dragBool(arg) {
    return arg;
}
var bool = false;
// 泛型的使用增加了复用性，不用像上面那样写多次
function dragAny(arg) {
    return arg;
}
var any = dragAny(1); /*可以指定类型*/
var any2 = dragAny("null"); /* 也可以是自动推断 */
function mygetLength(arg) {
    return arg.length;
}
console.log(mygetLength([1, 2, 3]));
console.log(mygetLength("sssss"));
// console.log(getLength(11));
//这个就是约束参数中数组中的元素的类型，不满足都会报错
function getLength22(arg) {
    return arg.length;
}
console.log(getLength22([1, 2, 3, "2"]));
/*在类中使用泛型======================================================================*/
var Vscode = /** @class */ (function () {
    function Vscode() {
        this.data = [];
    }
    Vscode.prototype.push = function () {
        var _a;
        var item = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            item[_i] = arguments[_i];
        }
        (_a = this.data).push.apply(_a, item);
    };
    Vscode.prototype.shift = function () {
        return this.data.shift();
    };
    return Vscode;
}());
var mynum = new Vscode();
mynum.push(13, 23, 3, 3);
console.log(mynum);
console.log(mynum.shift());
var VscodeT = /** @class */ (function () {
    function VscodeT() {
        this.data = [];
    }
    VscodeT.prototype.push = function () {
        var _a;
        var item = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            item[_i] = arguments[_i];
        }
        (_a = this.data).push.apply(_a, item);
    };
    VscodeT.prototype.shift = function () {
        return this.data.shift();
    };
    return VscodeT;
}());
var mynum2 = new VscodeT();
mynum2.push(13, 23, 3, 3);
var vs = new VscodeT();
vs.push({ name: "zs", age: 13 });
vs.push({ name: "ww", age: 19 });
console.log(vs.shift());
{
    var User = /** @class */ (function () {
        function User(_user) {
            this._user = _user;
        }
        User.prototype.get = function () {
            return this._user;
        };
        return User;
    }());
    var u1 = new User({ name: "zs", age: 10 });
    console.log(u1.get().name);
}
{
    var hd = {
        titile: "今天你吃了吗",
        isLock: true,
        comments: [{ content: "zs", author: "ww" }]
    };
    console.log(hd);
}
