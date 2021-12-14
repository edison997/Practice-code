const showDecorator: MethodDecorator = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) => {
  // args[0].name = 33

  //这里可以强行把下面show的内容改掉
  descriptor.value = () => {
    console.log("ww");
  };
};

class Methods {
  @showDecorator
  public show() {
    console.log("zs");
  }
}

new Methods().show();
// console.log(new Methods().name);
