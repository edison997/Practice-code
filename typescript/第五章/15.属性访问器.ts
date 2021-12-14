const LowerDecorator: PropertyDecorator = (
  target: Object,
  propertyKey: string | symbol
) => {
  let value: string;
  Object.defineProperty(target, propertyKey, {
    set: (v) => {
      value = v;
    },
    get: () => {
      return value.toLowerCase();
    },

   
  });
};

class Zealand {
  @LowerDecorator
  public title: string | undefined;
}

const obj = new Zealand();

obj.title = 'AACSASSGGGxxxx';

console.log(obj.title);
