"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const message = (target) => {
    target.prototype.msg = (content) => {
        console.log(content);
    };
};
let Log = 
// 其实就相当于是继承了上面的函数，所以在原型上能找到对应方法
class Log {
    login() {
        console.log('登录成功');
        console.log('登录成功信息');
        this.msg('添加成功');
    }
};
Log = __decorate([
    message
    // 其实就相当于是继承了上面的函数，所以在原型上能找到对应方法
], Log);
const myLog = new Log();
myLog.login();
