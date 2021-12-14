var CollectionNumber = /** @class */ (function () {
    function CollectionNumber() {
        this.data = [];
    }
    CollectionNumber.prototype.push = function () {
        var _a;
        var num = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            num[_i] = arguments[_i];
        }
        (_a = this.data).push.apply(_a, num);
    };
    CollectionNumber.prototype.shift = function () {
        return this.data.shift();
    };
    return CollectionNumber;
}());
var collectOne = new CollectionNumber();
collectOne.push(1, 2, 3, 4, 5);
console.log(collectOne.shift());
var collectTwo = new CollectionNumber();
collectTwo.push("1", "@", "#");
console.log(collectTwo.data);
var u1 = { name: 'zs', age: 10 };
var collectThree = new CollectionNumber();
collectThree.push(u1);
console.log(collectThree.data);
