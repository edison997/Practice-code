const message:ClassDecorator =(target:Function) => {
    target.prototype.msg = (content:string)=> {
        console.log(content);
        
    }
}

@message
// 其实就相当于是继承了上面的函数，所以在原型上能找到对应方法
class Log {
    [x: string]: any;
    public login(){
        console.log('登录成功');
        console.log('登录成功信息');
        
        this.msg('添加成功')

    }
    
}

const myLog = new Log()

myLog.login()


































