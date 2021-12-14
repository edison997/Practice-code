
  const highlightDecorator: MethodDecorator = (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
      console.log(descriptor);
      
      const method = descriptor.value
      descriptor.value = ()=>{
          setTimeout(() => {
              method()
          }, 1500);
      }
  };

  class Us {
    @highlightDecorator
    public show() {
      console.log('zsf');
      
    }
  }
new Us().show();
  

