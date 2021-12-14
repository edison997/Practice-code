const PropDecotator :PropertyDecorator = (...args:any) =>{

}


const ParamDecotator:ParameterDecorator = (...args:any) =>{
    console.log(args);
    
}

class hd {
    @PropDecotator
    public title:string | undefined
    // 这里的装饰器表示的是参数所在的下标
    public show(id:number, @ParamDecotator content:string){}
}