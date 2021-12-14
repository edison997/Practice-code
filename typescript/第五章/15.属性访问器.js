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
const LowerDecorator = (target, propertyKey) => {
    let value;
    Object.defineProperty(target, propertyKey, {
        set: (v) => {
            value = v;
        },
        get: () => {
            return value.toLowerCase();
        },
    });
};
class Zealand {
    title;
}
__decorate([
    LowerDecorator,
    __metadata("design:type", Object)
], Zealand.prototype, "title", void 0);
const obj = new Zealand();
obj.title = 'AACSASSGGGxxxx';
console.log(obj.title);
