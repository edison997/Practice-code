function sum(a,b){
    return a +b
}

console.log(sum(1,2));

// 枚举
enum SexType {
    girl,
    boy
}

let user ={
    name:'zs',
    sex:1,
}

console.log(SexType.girl);
console.log(user.sex);


// 断言


function fn(arg:boolean):string | number{
    return arg?'算了算了':111
}
let res =  fn(true) as number
res = 222
console.log(res);


// const 断言

let a:string = '111'
a = '22'

let m :'张三' = '张三'
m = '张三'
// 本身就是值类型
const mm = '法外狂徒'

// 转换成值类型
let n = '皮城' as const
console.log(n);

let b = 1 as const

const arr = [a,b,11,'zs',true] as const

const u = {
    name:"zs"
} as const