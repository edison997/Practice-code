{
  const MusicDecoratorFactory = (type: string): ClassDecorator => {
    console.log(type);
    switch (type) {
      case "Tank":
        return (target: Function) => {
          target.prototype.getMusic = (): void => {
            console.log("激情四射音乐起");
          };
        };

      default:
        return (target: Function) => {
            target.prototype.getMusic = (): void => {
              console.log("gogo音乐起");
            };
          };
    }
  };

  @MusicDecoratorFactory("Tank")
  /* @moveDecorator = moveDecorator(Tank)   这两者的意思是一样的，前面的就是语法糖*/
  class Tank {}
  let t = new Tank();
  // 这个和下面的那个一样

  (<any>t).getMusic();

  @MusicDecoratorFactory("Player")
  class Player {}

  let p:any = new Player();
  p.getMusic();
}
