var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    // protected受保护的在类的外部无法调用,仅限于类的内部用
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
    // console.log(p1.info());
    var Stu = /** @class */ (function (_super) {
        __extends(Stu, _super);
        function Stu(name, age) {
            var _this = _super.call(this, name, age) || this;
            _this.name = name;
            _this.age = age;
            return _this;
        }
        Stu.prototype.info = function () {
            return "\u660E\u5B57" + this.name + ",\u5E74\u9F84" + this.age;
        };
        return Stu;
    }(user));
    var stu = new Stu('ws', 10);
    //    console.log(stu.name);
    console.log(stu.info());
}
{
    // private受保护的在类的外部无法调用,仅限于类的内部用
    var user = /** @class */ (function () {
        function user(n, a) {
            this.site = 'hello';
            this.name = n;
            this.age = a;
        }
        user.prototype.info = function () {
            return "\u660E\u5B57" + this.name + ",\u5E74\u9F84" + this.age;
        };
        return user;
    }());
    var p1 = new user('zs', 19);
    // console.log(p1.info());
    var Stu = /** @class */ (function (_super) {
        __extends(Stu, _super);
        function Stu(name, age) {
            var _this = _super.call(this, name, age) || this;
            _this.name = name;
            _this.age = age;
            return _this;
        }
        Stu.prototype.show = function () {
            return this.info();
        };
        return Stu;
    }(user));
    var stu = new Stu('ws', 10);
    console.log(stu.age);
    console.log(stu.show());
    console.log(stu.site);
}
