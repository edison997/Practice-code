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
const china = {
    isLoad: true,
    s: 960,
    permissions: ["1", '2', '3'],
};
const AccessDecortator = (keys) => (target, propertyKey, descriptor) => {
    const validate = () => keys.every((item) => {
        return china.permissions.includes(item);
    });
    descriptor.value = () => {
        if (china.isLoad === true && validate()) {
            alert("验证成功");
        }
        else {
            alert("验证失败");
        }
    };
};
class Article {
    show() {
        console.log("查看文章");
    }
    save() {
        console.log("保存文章");
    }
}
__decorate([
    AccessDecortator(["1", '2']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Article.prototype, "save", null);
// new Article().show();
new Article().save();
