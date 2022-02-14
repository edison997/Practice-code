import {action, observable} from "mobx"
import moment from "moment"

class UserStore {
    @observable time = '22'
   
    @observable lunboImg = [
       
       
        
    ]
    @observable lunboText = [

         {
          img:require('../assets/img/1.jpg').default,
          p1:"MODENA 2.5人座",
          p2:"米色，布艺，金属",
          p3:"从 8,890.00￥",
          p4:"如图所示 9,990.00￥",
          p5:"建议零售价",
          p6:"设计师之选",

        },
        {
          img:require('../assets/img/2.jpg').default,
          p1:"OSAKA 沙发，簇绒坐垫",
          p2:"蓝色，布艺，金属",
          p3:"从 12,690.00￥",
          p4:"如图所示 23,990.00￥",
          p5:"建议零售价",
          p6:"设计师之选",

        },
        {
          img:require('../assets/img/3.jpg').default,
          p1:"ZURICH 沙发休息模块",
          p2:"褐色，皮革，金属",
          p3:"从 16,190.00￥",
          p4:"如图所示 54,790.00￥",
          p5:"建议零售价",
          p6:"设计师之选",

        },
        {
          img:require('../assets/img/4.jpg').default,
          p1:"OSAKA沙发，簇绒坐垫",
          p2:"红色，布艺，金属",
          p3:"从 12,690.00￥",
          p4:"如图所示 25,990.00￥",
          p5:"建议零售价",
          p6:"设计师之选",

        },
        {
          img:require('../assets/img/5.jpg').default,
          p1:"INDIVI 带躺卧式单元的转角沙发",
          p2:"灰色，布艺，金属",
          p3:"从 22,690.00￥",
          p4:"如图所示 33,990.00￥",
          p5:"建议零售价",
          p6:"设计师之选",

        },
       
    ]

// 这是展示图片的数据
    @observable showImg = [
      
      {//1
        id:1,
        img:require("../assets/imgT/21.jpg").default,
        p11:"CARLTON 沙发",
        p22:"蓝色, 布艺, 金属",
        p33:require("../assets/imgT/color.png").default,
        p44:"从 18,490.00 ¥",
        p55:"如图所示 30,790.00 ¥",
        p66:"建议零售价"
      },
      {//2
        id:2,
        img:require("../assets/imgT/22.jpg").default,
        p11:"OSAKA 沙发, 簇绒坐垫",
        p22:"红色, 布艺, 金属",
        p33:require("../assets/imgT/color.png").default,
        p44:"从 12,690.00 ¥",
        p55:"如图所示 25,990.00 ¥",
        p66:"建议零售价"
      },
      {//3
        id:3,
        img:require("../assets/imgT/23.jpg").default,
        p11:"AMSTERDAM 沙发",
        p22:"灰色, 布艺, 金属",
        p33:require("../assets/imgT/color.png").default,
        p44:"从 15,590.00 ¥",
        p55:"如图所示 21,390.00 ¥",
        p66:"建议零售价"
      },
      {//4
        id:4,
        img:require("../assets/imgT/24.jpg").default,
        p11:"AMSTERDAM 带躺卧式单元的转角沙发",
        p22:"绿色, 布艺, 金属",
        p33:require("../assets/imgT/color.png").default,
        p44:"从 28,990.00 ¥",
        p55:"如图所示 38,390.00 ¥",
        p66:"建议零售价"
      },
      {//5
        id:5,
        img:require("../assets/imgT/25.jpg").default,
        p11:"HAMPTON沙发带可调节靠背及左侧休息单元，右侧储物格",
        p22:"灰色, 布艺, 金属",
        p33:require("../assets/imgT/color.png").default,
        p44:"从 28,490.00 ¥",
        p55:"如图所示 30,790.00 ¥",
        p66:"建议零售价"
      },{//6
        id:6,
        img:require("../assets/imgT/26.jpg").default,
        p11:"左侧带厚圆椅垫的 AMSTERDAM 沙发",
        p22:"棕色, 布艺, 金属",
        p33:require("../assets/imgT/color.png").default,
        p44:"从 18,490.00 ¥",
        p55:"如图所示 50,790.00 ¥",
        p66:"建议零售价"
      }
    ]
    @observable arr = [2323]
    @action add=(go)=>{
        this.arr.push(go)
    }
    
    @action getNow() {
        this.time = moment().format('YYYY-MM-DD hh:mm:ss')
    }




    //nav的数据
     @observable navO = ["三人沙发","小户型沙发","双人座沙发","贵妃沙发","躺卧沙发","转角沙发","模块沙发","沙发床","躺椅沙发","办公沙发","卧榻","软垫凳","户外沙发",]

}




const store =  new UserStore()
setInterval(() => {
         store.getNow()
     }, 1000)

  

export default store
