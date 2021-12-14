let ta = 'zs'
let tb = 44
// 两种写法都是一样的
// let tarr = [ta,tb] as const
let tarr = <const>[ta,tb]

// 不加const断言f既可以是字符串，也可以是数字，
// 加了后只能是其对应位置的类型
let f = tarr[0]
f = "1"
console.log(f);


function hb(){
    let a = 'zs'
    let b = (x:number,y:number):number => x+y
    return [a,b] as const
}

const [z,s] = hb()
console.log(s(1,22));

