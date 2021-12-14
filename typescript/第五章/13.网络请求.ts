const RequestDecorator =
  (url: string): MethodDecorator =>
  (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const all = descriptor.value;
// 模拟 axios.get().then()
    new Promise<any[]>((resolve) => {
      setTimeout(() => {
        resolve([{name:'zs'},{name:'ls'}]);
      }, 2000);
    }).then((res) => {
      all(res);
    });
  };

class Singapore {
  @RequestDecorator("https://www.baidu.com")
  public all(country: any[]) {
    console.log(country);
  }
}
