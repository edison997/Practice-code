// let a = [1, 2, 3, 4] + "";
// let b = ["112", "114", "113"];

// b.reverse();
// console.log(b);

// let obj = {
//   name: "zs",
//   age: 19,
// };

// obj = { ...obj, name: "wangwu" };
// console.log(obj);
// obj = { name: "ll" };
// console.log(obj);
var result = {
  id: 0,
  name: "张飞",
  item: [
    { id: 1, name: "关羽" },
    {
      id: 2,
      name: "刘备",
      item: [
        { id: 5, name: "荀彧" },
        { id: 6, name: "关平" },
      ],
    },
    //点击曹操这一项，加载出来刘禅和周仓，点击周仓，又异步加载项羽和别姬
    {
      id: 3,
      name: "曹操",
      item: [
        { id: 8, name: "刘禅" },
        {
          id: 9,
          name: "周仓",
          item: [
            { id: 10, name: "项羽" },
            { id: 11, name: "别姬" },
          ],
        },
      ],
    },
    { id: 4, name: "貂蝉" },
  ],
};
// }[
//   //点击曹操，返回如下数组
//   ({ id: 8, name: "刘禅" }, { id: 9, name: "周仓" })
// ][
//   //点击周仓，返回如下数组
//   ({ id: 8, name: "项羽" }, { id: 9, name: "别姬" })
// ];
// var item = [result];
// //设置一个全局的value，存放找到对应item的时候的引用地址
// var value = null;
// //函数要有返回值，否则默认返回undefiend
// function getName(item, id) {
//   if (!item) return null;
//   for (var i = 0; i < item.length; i++) {
//     if (item[i].id == id) {
//       value = item[i];
//       break;
//     }
//     if (item[i].item) {
//       getName(item[i].item, id);
//     }
//   }
//   return value;
// }
// //可以试着改变id看下效果，最好打下断电，可以更加深刻的了解下程序运行的过程
// var foundName = getName(item, 7);
// console.log("foundName", foundName);
var item = [result];
function getName(item, id) {
  let value = null;
  let ret = recurision(item, id);
  return ret;
  function recurision(item, id) {
    if (!item) return null;
    for (var i = 0; i < item.length; i++) {
      if (item[i].id == id) {
        value = item[i];
        break;
      }
      if (item[i].item) {
        recurision(item[i].item, id);
      }
    }
    return value;
  }
}

var foundName = getName(item, 9);
// console.log("foundName", foundName);
// console.log(item);

function filter(condition = () => false, key) {
  return function filtrate(data) {
    return data.reduce((res, item) => {
      if (!condition(item)) {
        const children = item[key];
        res.push({
          ...item,
          [key]: Array.isArray(children) ? filtrate(children) : children,
        });
      }
      return res;
    }, []);
  };
}

var data = [
  {
    id: 1,
    name: "mock",
    type: 1,
    subs: [
      {
        id: 4,
        name: "agency.sol",
        type: 2,
        subs: {
          id: 10,
          name: "account.sol",
          type: 2,
          subs: null,
        },
      },
      {
        id: 5,
        name: "blockchain.sol",
        type: 2,
        subs: null,
      },
    ],
  },
  {
    id: 2,
    name: "public",
    type: 1,
    subs: [
      {
        id: 6,
        name: "vote.sol",
        type: 2,
        subs: null,
      },
      {
        id: 7,
        name: "user.sol",
        type: 2,
        subs: null,
      },
    ],
  },
];

var filterIdEqual2 = filter((item) => item.id == 2, "subs");
var filterIdEqual7 = filter((item) => item.id == 7, "subs");

console.log(filterIdEqual2(data));
console.log("----------");
console.log(filterIdEqual7(data));
