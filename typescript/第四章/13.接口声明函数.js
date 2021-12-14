{
    var WePay = function (price) { return true; };
    {
        var Pain = /** @class */ (function () {
            function Pain(name) {
                this.name = name;
            }
            Pain.prototype.move = function () {
                throw new Error("Method not implemented.");
            };
            Pain.prototype.end = function () {
                throw new Error("Method not implemented.");
            };
            return Pain;
        }());
        var p = new Pain('zs');
        console.log(p);
    }
}
