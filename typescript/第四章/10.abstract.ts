{
    abstract class Animation {
        // 相当于就是定义了规范，下面的继承就要使用到
        abstract name:string
        abstract move():void
        protected get(): {x:number,y:number} {
            return {x:100,y:100}
        }
    }

    class Tank extends Animation{
        name:string ='敌方tank'
        public move():void {
            console.log(`${this.name}移动了`);
            
        }
    }

    class Player extends Animation {
        name:string = '玩家tank'
        public move():void {
            console.log(`${this.name}移动了`);
            
        }
    }

    const h = new Animation()
    const t = new Tank()
    t.move()
    const p = new Player()
    p.move()
}