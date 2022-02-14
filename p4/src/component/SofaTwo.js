import React,{ Component} from 'react'
import "../css/SofaTwo.css"
import store from '../store/UserStore';
import {Link} from 'react-router-dom'
import { HeartOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd';


class SofaTwo extends Component {
    render() {
        return(
            <div>
                {/* <div className="box">
                    <div className="imgDiv">
                        <img  src={require("../assets/imgT/21.jpg").default} alt="" />
                    </div>
                    
                    <p className="p11">CARLTON 沙发</p>
                    <p className="p22">蓝色, 布艺, 金属</p>
                    <p className="p33"><img className="colorImg" src={require("../assets/imgT/color.png").default} alt="" /></p>
                    <p className="p44">从 18,490.00 ¥</p>
                    <p className="p55">如图所示 30,790.00 ¥</p>
                    <p className="p66">建议零售价</p>
                </div>
                 */}
                 
                {
                    store.showImg.map((item,index)=>{
                        return(
                            <div className="box" key={index}>
                                <Link to={"/TwoDetails"+item.id}>
                                <div className="imgDiv">
                                    <img src={item.img} alt="" />
                                </div>
                                <p className="p11">{item.p11}</p>
                                </Link>
                                <p className="p22">{item.p22}</p>
                                <p className="p33"><img className="colorImg" src={item.p33} alt="" /></p>
                                <p className="p44">{item.p44}</p>
                                <p className="p55">{item.p55}</p>
                                <p className="p66">{item.p66}</p>
                                <Tooltip placement="topRight" title="添加到收藏">
                                    <p className="svg"><HeartOutlined /></p>
                                </Tooltip>
                                
                            </div>
                            )
                    })
                }
               
                <hr className="xhx"/>
                <button className="moreBtn">+更多</button>


               
            </div>
            )
    }
}

export default SofaTwo;