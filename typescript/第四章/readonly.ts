class Axios {
    protected readonly site:string = 'www.baidu.com'
    constructor(site:string){
        // 这里判断 创建实例的时候到底输入没输入，没输入就用之前的
        this.site = site || this.site
    }
    public get(url:string){
        console.log(`你要请求的是${this.site}/${url}`);
        
    }
}

let axios = new Axios('www.4399.com')
axios.get('user')
// console.log(axios.site);


// constructor
class Per {
    // public name:string 可以直接卸载参数里面，就少一个步骤
    constructor(public name:string){
        this.name = this.initName(name)
    }

    private initName(name:string) {
        return `${name}-卖西瓜`
    }
}

const pp = new Per('zs')
console.log(pp.name);
// console.log(pp.initName);


// static
class Person {
    static site:string = '王婆卖瓜'
    public static get():string {
        return Person.site
    } 
}

const perOne = new Person()

console.log(Person.site);   /*静态属性方法只能有Person来调用，不能用实例来调用*/


console.log(Person.get());
