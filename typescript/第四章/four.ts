{
    class user {
        name:string
        age:number

        constructor(n:string,a:number){
            this.name = n
            this.age = a
        }

        info():string {
            return `明字${this.name},年龄${this.age}`
        }
    }

    let p1 = new user('zs',19)
    let p2 =new user('ws',92)
    console.log(p1);
    console.log(p1.info());
    
    const per:user[] = [p1,p2]
    console.log(per);
    

  
     
}  

// function fn(args:string){
//     return args
// }

// console.log(fn('1'));


// function fn2(args:boolean){
//     return args
// }    

// console.log(fn2(true));




function fn<T>(args:T):T{
    return args
}

// 下面两种写法都可以，一个是自动推断的，一个是自己定的

// let one = fn('2')
let one = fn<String>('2')
console.log(one);

// let two = fn<boolean>(true)
let two = fn(true)
console.log(two);


// 这个不会返回确定的类型
function fn2(args:string |boolean){
    return args
}

console.log(fn2('1'));
console.log(fn2(true));

