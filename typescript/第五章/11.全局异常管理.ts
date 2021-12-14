// const errorDecortator :MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
//     const mshow = descriptor.value
//     descriptor.value = ()=>{
//         try {
//             mshow()

//         } catch (error:any) {
//             // 这个%c 可以修改浏览器控制台输出的样式
//             console.log(`%c回家吧，回到最初的美好`,'color:green;font-size:30px');
//             console.log(`%c${error.message}`,'color:red;font-size:16px');
//         }
//     }
// }

// 工厂模式
const errorDecortator =
// 设置默认参数
  (title:string='回家吧，回到最初的美好',fontSize:number=30): MethodDecorator =>
  (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const mshow = descriptor.value;
    descriptor.value = () => {
      try {
        mshow();
      } catch (error: any) {
        // 这个%c 可以修改浏览器控制台输出的样式
        console.log(`%c${title}`, `color:green;font-size:${fontSize}px`);
        console.log(`%c${error.message}`, "color:red;font-size:16px");
      }
    };
  };

class Thai {
  @errorDecortator('www.baidu.com',50)
  public show() {
    throw new Error("不行啦，救命啊");
  }
}

new Thai().show();
