let fa: string = "sd";
fa = "zs";

function drag(arg: string): string {
  return arg;
}

let hdhd = drag("zs");

function dragBool(arg: boolean): boolean {
  return arg;
}

let bool = false;

// 泛型的使用增加了复用性，不用像上面那样写多次
function dragAny<T>(arg: T): T {
  return arg;
}

let any = dragAny<number>(1); /*可以指定类型*/
let any2 = dragAny("null"); /* 也可以是自动推断 */

// 类型的继承======================================================================

// 下面这两个是一个意思
interface T {}
interface lengthInterface {
  length: number;
}
type TT = { length: number };

function mygetLength<T extends TT>(arg: T): number {
  return arg.length;
}

console.log(mygetLength([1, 2, 3]));
console.log(mygetLength("sssss"));
// console.log(getLength(11));

//这个就是约束参数中数组中的元素的类型，不满足都会报错
function getLength22<T>(arg: T[]): number {
  return arg.length;
}

console.log(getLength22<number | string>([1, 2, 3, "2"]));

/*在类中使用泛型======================================================================*/

class Vscode {
  data: number[] = [];
  public push(...item: number[]) {
    this.data.push(...item);
  }
  public shift(): number {
    return this.data.shift();
  }
}

let mynum = new Vscode();
mynum.push(13, 23, 3, 3);
console.log(mynum);
console.log(mynum.shift());

class VscodeT<RU> {
  data: RU[] = [];
  public push(...item: RU[]) {
    this.data.push(...item);
  }
  public shift(): RU {
    return this.data.shift();
  }
}

let mynum2 = new VscodeT<number>();
mynum2.push(13, 23, 3, 3);

type myUser = { name: string; age: number };
let vs = new VscodeT<myUser>();
vs.push({ name: "zs", age: 13 });
vs.push({ name: "ww", age: 19 });
console.log(vs.shift());

{
  class User<T> {
    public constructor(private _user: T) {}
    public get(): T {
      return this._user;
    }
  }

  interface user {
    name: string;
    age: number;
  }

  let u1 = new User<user>({ name: "zs", age: 10 });

  console.log(u1.get().name);
}

{
  // 也就是给一个对象，以及对象里面的数组定以类型
  interface ArticleIterface<B, C> {
    titile: string;
    isLock: B;
    comments: C[];
  }

  type commentsType = {
    content: string;
    author: string;
  };

  const hd: ArticleIterface<boolean, commentsType> = {
    titile: "今天你吃了吗",
    isLock: true,
    comments: [{ content: "zs", author: "ww" }],
  };

  console.log(hd);
}
