{
  const showDecorator: MethodDecorator = (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    descriptor.writable = false;
  };

  class Methods {
    @showDecorator
    public static show() {
      console.log("zs");
    }
  }

  //   静态方法只能通过构造函数来调用，不能通过实例来调用
  Methods.show = () => {
    console.log("ww");
  };
  // console.log(new Methods().name);
  Methods.show()
}
