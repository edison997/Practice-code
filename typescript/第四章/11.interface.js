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
    var Animation_1 = /** @class */ (function () {
        function Animation() {
        }
        // 相当于就是定义了规范，下面的继承就要使用到
        Animation.prototype.get = function () {
            return { x: 100, y: 100 };
        };
        return Animation;
    }());
    // 这样就是相当于加了接口的约束，（name和move都必须有），下面的就是没有被约束的
    var Tank = /** @class */ (function (_super) {
        __extends(Tank, _super);
        function Tank() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = '敌方tank';
            return _this;
        }
        Tank.prototype.move = function () {
            console.log(this.name + "\u79FB\u52A8\u4E86");
        };
        return Tank;
    }(Animation_1));
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = '玩家tank';
            return _this;
        }
        Player.prototype.move = function () {
            console.log(this.name + "\u79FB\u52A8\u4E86");
        };
        return Player;
    }(Animation_1));
    // const h = new Animation()
    var t = new Tank();
    t.move();
    var p = new Player();
    p.move();
}
// 接口对对象的约束===================================================================
{
    var user = {
        name: 'zs',
        age: 19,
        sex: 'body',
        info: function () {
            return this.name + "+" + this.age;
        }
    };
    console.log(user.info());
    console.log(user);
}
// 接口的继承=========================================================================
{
    var Animation_2 = /** @class */ (function () {
        function Animation() {
        }
        // 相当于就是定义了规范，下面的继承就要使用到
        Animation.prototype.get = function () {
            return { x: 100, y: 100 };
        };
        return Animation;
    }());
    // 这样就是相当于加了接口的约束，（name和move都必须有），下面的就是没有被约束的
    var Tank = /** @class */ (function (_super) {
        __extends(Tank, _super);
        function Tank() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = '敌方tank';
            return _this;
        }
        Tank.prototype.move = function () {
            console.log(this.name + "\u79FB\u52A8\u4E86");
        };
        Tank.prototype.end = function () {
            console.log('game over');
        };
        return Tank;
    }(Animation_2));
    // 这个就是不用继承的方法来实现使用多个接口
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = '玩家tank';
            return _this;
        }
        Player.prototype.move = function () {
            console.log(this.name + "\u79FB\u52A8\u4E86");
        };
        Player.prototype.end = function () {
            console.log('结束了');
        };
        return Player;
    }(Animation_2));
    var t = new Tank();
    t.move();
    t.end();
    var p = new Player();
    p.end();
}
var userMsg = {
    name: 'wangwu',
    age: 13,
    isLock: false
};
function isLock(user, lock) {
    user.isLock = lock;
    return user;
}
isLock(userMsg, true);
console.log(userMsg);
// class里面使用interface
{
    var User = /** @class */ (function () {
        function User(user) {
            this._info = user;
        }
        Object.defineProperty(User.prototype, "info", {
            get: function () {
                return this._info;
            },
            enumerable: false,
            configurable: true
        });
        return User;
    }());
    var u = new User({ name: 'zs', age: 12 });
    console.log(u.info);
}
// 数组实现interface  以及枚举的使用=========================================================
{
    // 枚举的默认排序就是 0 ，1 ，2这样来排序的
    var SexType = void 0;
    (function (SexType) {
        SexType[SexType["BOY"] = 0] = "BOY";
        SexType[SexType["GIRL"] = 1] = "GIRL";
    })(SexType || (SexType = {}));
    var u1 = {
        name: 'zs',
        age: 11,
        sex: SexType.BOY
    };
    var u2 = {
        name: 'ls',
        age: 18,
        sex: SexType.GIRL
    };
    var arr = [u1, u2];
    console.log(arr);
}
var abc = /** @class */ (function () {
    function abc(name, age) {
        this.name = name;
        this.age = age;
    }
    return abc;
}());
var cba = new abc('zs', 19);
console.log(cba);
