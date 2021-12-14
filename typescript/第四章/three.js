var dq = '皇后';
dq = undefined;
dq = null;
var body = document.querySelector('body');
var div = document.querySelector('.zs');
console.log(div.innerHTML);
var alink = document.querySelector('#ww');
alink.href = (alink.innerHTML);
var One = /** @class */ (function () {
    function One(el) {
        this.el = el;
    }
    One.prototype.html = function () {
        return this.el.innerHTML;
    };
    return One;
}());
var el = document.querySelector('#last');
var obj = new One(el);
console.log(obj.html());
var btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    // e.preventDefault()
    var body = document.querySelector('body');
    body.insertAdjacentHTML('beforeend', "<h1>3333</h1>");
});
