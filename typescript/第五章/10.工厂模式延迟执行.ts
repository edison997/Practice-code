const tenDecorator =
  (times: number): MethodDecorator =>
  (...args:any[]) => {
    const [,,descriptor] = args
    const method = descriptor.value;
    descriptor.value = () => {
      setTimeout(() => {
        method();
      }, times);
    };
  };

class Usb {
  @tenDecorator(10000)
  public show() {
    console.log("zsf");
  }
}
new Usb().show();
