"use strict";
// const errorDecortator :MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
//     const mshow = descriptor.value
//     descriptor.value = ()=>{
//         try {
//             mshow()
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//         } catch (error:any) {
//             // 这个%c 可以修改浏览器控制台输出的样式
//             console.log(`%c回家吧，回到最初的美好`,'color:green;font-size:30px');
//             console.log(`%c${error.message}`,'color:red;font-size:16px');
//         }
//     }
// }
// 工厂模式
const errorDecortator = 
// 设置默认参数
(title = '回家吧，回到最初的美好', fontSize = 30) => (target, propertyKey, descriptor) => {
    const mshow = descriptor.value;
    descriptor.value = () => {
        try {
            mshow();
        }
        catch (error) {
            // 这个%c 可以修改浏览器控制台输出的样式
            console.log(`%c${title}`, `color:green;font-size:${fontSize}px`);
            console.log(`%c${error.message}`, "color:red;font-size:16px");
        }
    };
};
class Thai {
    show() {
        throw new Error("不行啦，救命啊");
    }
}
__decorate([
    errorDecortator('www.baidu.com', 50),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Thai.prototype, "show", null);
new Thai().show();
