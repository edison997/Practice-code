"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// target就是需要传入的构造函数
const moveDecorator = (target) => {
    console.log(target);
    target.prototype.getPosition = () => {
        return { x: 100, y: 100 };
    };
};
const MusicDecorator = (target) => {
    console.log(target);
    target.prototype.getMusic = () => {
        console.log('音乐起');
    };
};
let Tank = 
/* @moveDecorator = moveDecorator(Tank)   这两者的意思是一样的，前面的就是语法糖*/
class Tank {
};
Tank = __decorate([
    MusicDecorator,
    moveDecorator
    /* @moveDecorator = moveDecorator(Tank)   这两者的意思是一样的，前面的就是语法糖*/
], Tank);
let t = new Tank();
// 这个和下面的那个一样
console.log(t.getPosition());
console.log(t.getMusic());
let Player = class Player {
};
Player = __decorate([
    moveDecorator
], Player);
let p = new Tank();
console.log(p.getPosition());
// 装饰器叠加
