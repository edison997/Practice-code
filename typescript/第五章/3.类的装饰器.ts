// target就是需要传入的构造函数
const moveDecorator:ClassDecorator = (target:Function)=>{
    console.log(target);
    target.prototype.getPosition=():{x:number,y:number}=>{
        return {x:100,y:100}
    }
    
}

const MusicDecorator:ClassDecorator = (target:Function)=>{
    console.log(target);
    target.prototype.getMusic=():void=>{
        console.log('音乐起');
        
    }
    
}
@MusicDecorator
@moveDecorator 
/* @moveDecorator = moveDecorator(Tank)   这两者的意思是一样的，前面的就是语法糖*/ 
class Tank{

}
let t = new Tank()
// 这个和下面的那个一样
console.log((<any>t).getPosition());
console.log((<any>t).getMusic());

@moveDecorator
class Player{}
let p = new Tank()
console.log((p as any).getPosition());


// 装饰器叠加