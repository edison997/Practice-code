var Axios = /** @class */ (function () {
    function Axios(site) {
        this.site = 'www.baidu.com';
        // 这里判断 创建实例的时候到底输入没输入，没输入就用之前的
        this.site = site || this.site;
    }
    Axios.prototype.get = function (url) {
        console.log("\u4F60\u8981\u8BF7\u6C42\u7684\u662F" + this.site + "/" + url);
    };
    return Axios;
}());
var axios = new Axios('www.4399.com');
axios.get('user');
// console.log(axios.site);
// constructor
var Per = /** @class */ (function () {
    // public name:string 可以直接卸载参数里面，就少一个步骤
    function Per(name) {
        this.name = name;
        this.name = this.initName(name);
    }
    Per.prototype.initName = function (name) {
        return name + "-\u5356\u897F\u74DC";
    };
    return Per;
}());
var pp = new Per('zs');
console.log(pp.name);
// console.log(pp.initName);
// static
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.get = function () {
        return Person.site;
    };
    Person.site = '王婆卖瓜';
    return Person;
}());
var perOne = new Person();
console.log(Person.site); /*静态属性方法只能有Person来调用，不能用实例来调用*/
console.log(Person.get());
