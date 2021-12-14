const RandomColorDecorator: PropertyDecorator = (
  target: Object,
  propertyKey: string | symbol
) => {
  const arr: string[] = ["blue", "red", "green", "black", "pink"];
  Object.defineProperty(target, propertyKey, {
    get:() => {
      return arr[Math.floor(Math.random() * arr.length)]
    },
  });
};

class Bj {
  @RandomColorDecorator
  public color: string | undefined;
  public draw() {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<div style="width:200px;height:200px;background-color:${this.color}">张三李四王五</div>`
    );
  }
}

const colors = new Bj();
console.log(new Bj().color);

console.log(colors.color);

// colors.draw();
