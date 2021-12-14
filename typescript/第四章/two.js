var ta = 'zs';
var tb = 44;
// 两种写法都是一样的
// let tarr = [ta,tb] as const
var tarr = [ta, tb];
// 不加const断言f既可以是字符串，也可以是数字，
// 加了后只能是其对应位置的类型
var f = tarr[0];
f = "1";
console.log(f);
function hb() {
    var a = 'zs';
    var b = function (x, y) { return x + y; };
    return [a, b];
}
var _a = hb(), z = _a[0], s = _a[1];
console.log(s(1, 22));
