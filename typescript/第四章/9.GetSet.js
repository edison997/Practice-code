{
    var User = /** @class */ (function () {
        function User(name) {
            this._name = name;
        }
        Object.defineProperty(User.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (name) {
                this._name = name;
            },
            enumerable: false,
            configurable: true
        });
        return User;
    }());
    var u1 = new User('zs');
    console.log(u1);
    var Arr = /** @class */ (function () {
        function Arr() {
            this._list = [];
        }
        Object.defineProperty(Arr.prototype, "lists", {
            // constructor(lists:any[]){
            //     this._list= lists            
            // }
            get: function () {
                return this._list.map(function (item) {
                    item.title = item.title.slice(0, 2);
                    return item;
                });
            },
            set: function (val) {
                this._list = val;
            },
            enumerable: false,
            configurable: true
        });
        return Arr;
    }());
    var a = new Arr();
    console.log(a);
    a.lists = [{ title: 'zs' }, { title: "ww000" }];
    console.log(a.lists);
}
