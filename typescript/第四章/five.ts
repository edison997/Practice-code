{
    class user {
        public name:string
        public age:number

        constructor(n:string,a:number){
            this.name = n
            this.age = a
        }

        public info():string {
            return `明字${this.name},年龄${this.age}`
        }
    }

    let p1 = new user('zs',19)
    
    console.log(p1.name);

    for (const key in p1){
        if(p1.hasOwnProperty(key)){
            console.log(key);
            console.log(p1[key]);
            
            
        }
    }
}  



    // 泛型中的继承
    function getLength(arg: any) {
        return arg.length;
    }
    console.log(getLength('houdunren.com')); //13
    console.log(getLength(['后盾人'])); //1
    console.log(getLength(18)); //undefined

    function getLength2<T extends string>(arg: T): [T, number] {
        return [arg, arg.length];
    }
    
    let hd = getLength2<string>('houdunren.com')
    console.log(hd);
    

    {

        // 构造函数中使用泛型
        
    }