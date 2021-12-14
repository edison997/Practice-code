"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const RequestDecorator = (url) => (target, propertyKey, descriptor) => {
    const all = descriptor.value;
    // 模拟 axios.get().then()
    new Promise((resolve) => {
        setTimeout(() => {
            resolve([{ name: 'zs' }, { name: 'ls' }]);
        }, 2000);
    }).then((res) => {
        all(res);
    });
};
class Singapore {
    all(country) {
        console.log(country);
    }
}
__decorate([
    RequestDecorator("https://www.baidu.com"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], Singapore.prototype, "all", null);
