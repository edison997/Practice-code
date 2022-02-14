import React,{Component} from 'react'
import {LeftOutlined,RightOutlined} from '@ant-design/icons'
import '../css/SofaOne.css'
import {inject,observer} from "mobx-react"

import One from './One'
import SofaTwo from './SofaTwo'





@inject("store")
@observer

class SofaOne extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    
    close(){
        let btn1P = document.getElementById("btn1P")
        let btn1 = document.getElementsByClassName("btn1")[0]
        btn1P.style.display="none"
        btn1.style.display="none"
        }

     moveR(){
        let lunbo =document.getElementsByClassName("lunbo")[0]
        if(lunbo.style.marginLeft===""){
        lunbo.style.marginLeft="0px";
    }
        lunbo.style.marginLeft=(parseInt(lunbo.style.marginLeft)-359)+"px"
        lunbo.style.transition="0.5s"
        let btnR = document.getElementsByClassName("btnR")[0]
        let btnL = document.getElementsByClassName("btnL")[0]
            
        if(lunbo.style.marginLeft>="-718px"){
            btnR.style.display="none"
            
        }
        if(lunbo.style.marginLeft<"0px"){
            btnL.style.display="block"
        }
        
     }  
     
     moveL(){
        let btnR = document.getElementsByClassName("btnR")[0]
        let btnL = document.getElementsByClassName("btnL")[0]
        let lunbo =document.getElementsByClassName("lunbo")[0]
            if(lunbo.style.marginLeft===""){
                 lunbo.style.marginLeft="0px";
                }
        lunbo.style.marginLeft=(parseInt(lunbo.style.marginLeft)+359)+"px"

        if(lunbo.style.marginLeft<="-718px"){
             btnR.style.display="block"
        }
        if(lunbo.style.marginLeft==="0px"){
            btnL.style.display="none"
        }

        console.log(this)
   
     }


    //拖拽
  
     tz(){
        let lunboDiv = document.getElementById("lunboDiv");
        let lunbo  = document.getElementsByClassName("lunbo")[0];
        lunboDiv.style.position="absolute";
        lunbo.style.position="absolute";

        lunboDiv.onmousedown = function(){
             lunbo.onmousemove = function(e){
                 let left = e.clientX;
              

                 lunboDiv.style.left = left+"px";
                
             }

             lunbo.onmouseup = function(){
                lunbo.onmosuemove = null;
                lunbo.onmouseup = null;
             }

             return false;
         }
     }



    //  add=()=>{
    //     let {store} = this.props
    //     console.log(store)
    //     store.add("111")

    //     this.setState({store})
    //     // console.log(this.state)
    //  }
     
     
    

    render(){
        let {store} = this.props

 
        return(
            <div className="divBox">
            {/* <div>

      
                <div >
                    实验mobxmobx
                    {store.time}
                </div>
                <button onClick={this.add.bind(this)}>增加</button>
                {
                   store.arr.map((item,index)=>{
                        return(
                           <div key={index}>{item}</div>
                        )
                    })
                }
            </div>
            */}



                <div className="titleDiv">
                    <p className="titleP">沙发</p>
                    <p className="titleText">坐下.后靠.斜倚.平躺.我们拥有大量组合沙发，您在这里总能找到最适合自己的。 如两人位沙发、三人位沙发、转角组合沙发等。机会无限。</p> 
                </div>
          
                    <button className="btn1">免费的风格建议</button> 
                    <p id="btn1P" onClick={this.close}>x</p>
                
                
                {/* 轮播图 */}
                <div className="show">
                    
                    <div className="lunbo" >
                

                        {
                            store.lunboText.map((item,index)=>{
                                return (
                                    <div className="lunboDiv" key={index} onclick={this.tz}>
                                        <img id="lunboImg" src={item.img} alt=""  />
                                        <p className="p1">{item.p1}</p>
                                        <p className="p2">{item.p2}</p>
                                        <p className="p3">{item.p3}</p>
                                        <p className="p4">{item.p4}</p>
                                        <p className="p5">{item.p5}</p>
                                        <p className="p6">{item.p6}</p>
                                    </div>
                                )
                            })
                        }
                 
                    </div>
                </div>
                <button className="btnR" onClick={this.moveR}> <RightOutlined /></button>
                <button className="btnL" onClick={this.moveL}><LeftOutlined/></button>
                

                {/* 引入子组件 */}
                <div className="navM">
                  <One></One>
                </div>

                {/* 第二个子组件 */}
               
                <div className="showImg">
                    <SofaTwo></SofaTwo>
                </div>

                 {/* 最下面的图片 */}
                <div className="myLastImg">
                    <div className="myLastImgOne">
                        <p className="myLastImgOnep1">预定免费室内设计服务</p>
                        <p className="myLastImgOnep2">我们明白重新装修可能是一场挑战，但我们能够<br/>帮助您充分利用 空间。</p>
                        <div className="myLastDiv">
                            <p  className="lastp"></p>立即开始
                            
                        </div>
                    </div>
                    <div>
                        <img className="lastImg" src={require("../assets/last/PLP-630543.jpg").default} alt="" />
                    </div>
                </div>
               
            </div>
        )
    }
}


export default SofaOne 