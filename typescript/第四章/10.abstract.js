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
        Animation.prototype.get = function () {
            return { x: 100, y: 100 };
        };
        return Animation;
    }());
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
    var h = new Animation_1();
    var t = new Tank();
    t.move();
    var p = new Player();
    p.move();
}
