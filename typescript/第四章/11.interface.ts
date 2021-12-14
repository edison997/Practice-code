{
    interface AnimationInterface {
        name: string
        move(): void
    }
    abstract class Animation {
        // 相当于就是定义了规范，下面的继承就要使用到

        protected get(): { x: number, y: number } {
            return { x: 100, y: 100 }
        }
    }

    // 这样就是相当于加了接口的约束，（name和move都必须有），下面的就是没有被约束的
    class Tank extends Animation implements AnimationInterface {
        name: string = '敌方tank'
        public move(): void {
            console.log(`${this.name}移动了`);

        }
    }

    class Player extends Animation {
        name: string = '玩家tank'
        public move(): void {
            console.log(`${this.name}移动了`);

        }
    }

    // const h = new Animation()
    const t = new Tank()
    t.move()
    const p = new Player()
    p.move()
}


// 接口对对象的约束===================================================================
{
    // 这里约束了，下面就必须要，除非使用？
    interface UserInterface {
        name: string
        age?: number
        info(): string
        [key: string]: any /*这个就是代表还能在后面追加任何的属性*/
    }

    let user: UserInterface = {
        name: 'zs',
        age: 19,
        sex: 'body',
        info() {
            return `${this.name}+${this.age}`
        }
    }

    console.log(user.info());
    console.log(user);


}


// 接口的继承=========================================================================
{
    // interface playEndInterface {
    //     end():void
    // }
    // // 这里继承了上面的接口，就相当于是也具有了上面接口的约束，所以下面的类也需要有这个方法
    // interface AnimationInterface extends playEndInterface{
    //     name: string
    //     move(): void
    // }

    interface playEndInterface {
        end(): void
    }

    interface AnimationInterface {
        name: string
        move(): void
    }

    abstract class Animation {
        // 相当于就是定义了规范，下面的继承就要使用到

        protected get(): { x: number, y: number } {
            return { x: 100, y: 100 }
        }
    }

    // 这样就是相当于加了接口的约束，（name和move都必须有），下面的就是没有被约束的
    class Tank extends Animation implements AnimationInterface {
        name: string = '敌方tank'
        public move(): void {
            console.log(`${this.name}移动了`);

        }
        end(): void {
            console.log('game over');

        }
    }


    // 这个就是不用继承的方法来实现使用多个接口
    class Player extends Animation implements AnimationInterface, playEndInterface {
        name: string = '玩家tank'
        public move(): void {
            console.log(`${this.name}移动了`);

        }
        end() {
            console.log('结束了');

        }
    }


    const t = new Tank()
    t.move()
    t.end()
    const p = new Player()
    p.end()

}

// 使用接口约束函数=========================================================

/*提高约束条件的复用性*/
interface userMsgInterface {
    name: string
    age: number
    isLock: boolean
}
const userMsg = {
    name: 'wangwu',
    age: 13,
    isLock: false

}
function isLock(user: userMsgInterface, lock: boolean): userMsgInterface {
    user.isLock = lock
    
    return user
}
isLock(userMsg, true)

console.log(userMsg);

// class里面使用interface

{
    interface UserInterface{
        name:string
        age:number
    }
    class User {
        _info:UserInterface
        constructor(user:UserInterface){
            this._info = user
        }

        get info():UserInterface{
            return this._info
        }
    }

    const u = new User({name:'zs',age:12})
    console.log(u.info);
    
    
    
    
}

// 数组实现interface  以及枚举的使用=========================================================

{
    // 枚举的默认排序就是 0 ，1 ，2这样来排序的
    enum SexType {
        BOY,
        GIRL
    }
    interface user {
        name:string
        age:number
        sex:SexType
    }

    let u1:user = {
        name:'zs',
        age:11,
        sex:SexType.BOY
    }

    let u2:user = {
        name:'ls',
        age:18,
        sex:SexType.GIRL
    }

    const arr:user[] = [u1,u2]
    console.log(arr);
    
}

class abc{
    name:string
    age:number
    constructor(name:string,age:number){
        this.name=name
        this.age =age
    }
}

let cba = new abc('zs',19)
console.log(cba);
