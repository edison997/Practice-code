function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));
// 枚举
var SexType;
(function (SexType) {
    SexType[SexType["girl"] = 0] = "girl";
    SexType[SexType["boy"] = 1] = "boy";
})(SexType || (SexType = {}));
var user = {
    name: 'zs',
    sex: 1
};
console.log(SexType.girl);
console.log(user.sex);
// 断言
function fn(arg) {
    return arg ? '算了算了' : 111;
}
var res = fn(true);
res = 222;
console.log(res);
// const 断言
var a = '111';
a = '22';
var m = '张三';
m = '张三';
// 本身就是值类型
var mm = '法外狂徒';
// 转换成值类型
var n = '皮城';
console.log(n);
var b = 1;
var arr = [a, b, 11, 'zs', true];
var u = {
    name: "zs"
};
