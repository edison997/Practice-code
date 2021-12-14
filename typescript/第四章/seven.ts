{

    // protected受保护的在类的外部无法调用,仅限于类的内部用
    class user {
        protected name:string
        public age:number

        constructor(n:string,a:number){
            this.name = n
            this.age = a
        }

        protected info():string {
            return `明字${this.name},年龄${this.age}`
        }
    }

    let p1 = new user('zs',19)
    // console.log(p1.info());
    
   


   class Stu extends user{
        constructor(name:string,age:number){
            super(name,age)
            this.name = name
            this.age =age
        } 
        info():string {
            return `明字${this.name},年龄${this.age}`
        }
   }  
   let stu = new Stu('ws',10)
   
//    console.log(stu.name);
    console.log(stu.info());
    
    
}  

{
     // private受保护的在类的外部无法调用,仅限于类的内部用
     class user {
        protected name:string
        public age:number
        private site:string = 'hello'
        constructor(n:string,a:number){
            this.name = n
            this.age = a
        }

        protected info():string {
            return `明字${this.name},年龄${this.age}`
        }
    }

    let p1 = new user('zs',19)
    // console.log(p1.info());
    
   


   class Stu extends user{
        constructor(name:string,age:number){
            super(name,age)
            this.name = name
            this.age =age
        } 
        show():string {
           return this.info()
        }
   }  
   let stu = new Stu('ws',10)
   
    console.log(stu.age);
    console.log(stu.show());
    console.log(stu.site);
    
}