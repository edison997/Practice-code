
  const lightDecorator: MethodDecorator = (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
      console.log(descriptor);
      
      const method = descriptor.value
      descriptor.value = ()=>{
          return `<div style="color:red;">${method()}</div>`
      }
  };

  class Uk {
    @lightDecorator
    public show() {
      return 'zsf'
    }
  }
  console.log(new Uk().show());
  
  document.body.insertAdjacentHTML('beforeend',new Uk().show())

