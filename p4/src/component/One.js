import React,{Component} from 'react'
import {inject,observer} from "mobx-react"
import '../css/One.css'
import { Collapse } from 'antd';
import {PlusOutlined, RightCircleFilled} from '@ant-design/icons'
const { Panel } = Collapse;


@inject("store")
@observer

class One extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        let {store} = this.props
        return(
            <div>
               <div>
               <div>
                   <hr />
               </div>
                   <ul className="ulBox">
                        {
                            store.navO.map((item,idnex)=>{
                                return (
                                    <li className='' key={idnex}>
                                       {item}
                                    </li>
                                )
                            })
                        }
                   </ul>
               </div>


               <div className="zhedie">
               {/* defaultActiveKey={['1']} */}
                    <Collapse
                    expandIconPosition = "right"
                    expandIcon={({ isActive }) => <PlusOutlined rotate={isActive ? 45 : 0}/>} 
                    ghost>
                    <hr />
                        <Panel header="颜色" key="1">
                       <ul className="imgUl">
                           <li className="imgLi">
                               <img src={require('../assets/color/beige.png').default} alt="" />
                               <img src={require('../assets/color/black.png').default} alt="" />
                               <img src={require('../assets/color/blue.png').default} alt="" />
                               
                               <img src={require('../assets/color/brown.png').default} alt="" />
                               <img src={require('../assets/color/white.png').default} alt="" />
                              
                           </li>
                         
                           <li className="imgLi"> 
                                <img src={require('../assets/color/green.png').default} alt="" />
                                <img src={require('../assets/color/grey.png').default} alt="" />
                               <img src={require('../assets/color/oranje.png').default} alt="" />
                               <img src={require('../assets/color/purple.png').default} alt="" />
                               <img src={require('../assets/color/red.png').default} alt="" />
                            </li>
                           <li className="imgLi">
                               <img src={require('../assets/color/yellow.png').default} alt="" />
                           </li>
                           <li></li>
                       </ul>
                        </Panel>
                        <hr />
                        <Panel header="材料" key="2">
                        <ul>
                           <li>布艺</li>
                           <li>皮革</li>
                           <li>胡桃木</li>
                           <li>金属</li>
                           <li>漆</li>
                           <li>塑料</li>
                           <li>橡木</li>
                       </ul>
                        </Panel>
                        <hr />
                        <Panel header="座位" key="3">
                        <ul>
                           <li>1</li>
                           <li>2</li>
                           <li>3</li>
                           
                       </ul>
                        </Panel>
                        <hr />
                        <Panel header="价格" key="4">
                        <ul>
                           <li>500-999￥</li>
                           <li>2000-4999￥</li>
                           <li>5000-9999￥</li>
                           <li>9999以上</li>
                       </ul>
                        </Panel>
                        <hr />
                        <Panel header="系列" key="5">
                        <ul>
                           <li>Amsterdam</li>
                           <li>Bermuda</li>
                           <li>Carlton</li>
                           <li>Eden</li>
                       </ul>
                        </Panel>
                        <hr />
                        <Panel header="设计师" key="6">
                        <ul>
                           <li>Anders Noergaard</li>
                           <li>BoConcept Design Studio</li>
                           <li>Henrik Pedersen</li>
                           <li>Karim Rashid</li>
                       </ul>
                        </Panel>
                        <hr />
                        <Panel header="宽度" key="7">
                        <ul>
                           <li>150-200 cm</li>
                           <li>200-250 cm</li>
                        
                    
                       </ul>
                        </Panel>
                        <hr />
                        <Panel header="LENGTH" key="8">
                        <ul>
                           <li>50-100 cm</li>
                          
                       </ul>
                        </Panel>
                        <hr />
                        <Panel header="高度" key="9">
                        <ul>
                           <li>0-50 cm</li>
                           <li>50-100 cm</li>
                           <li>100-150 cm</li>
                           <li>150-200 cm</li>
                       </ul>
                        </Panel>

                        <hr />
                        <Panel header="深度" key="10">
                        <ul>
                           <li>75-100 cm</li>
                    
                           <li>100-150 cm</li>
                      
                       </ul>
                        </Panel>

                    </Collapse>
               </div>
            </div>
        )
    
    }
}

export default One